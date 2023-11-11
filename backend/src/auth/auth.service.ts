import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import * as bcrypt from "bcryptjs";
import * as crypto from "crypto";
import { Model } from "mongoose";
import confirmMailTemp from "../utils/confirm.temp";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { Response } from "express";
import { UserDetails } from "../utils/types";
import { flexibleQuery } from "../utils/flexibleQuery";

@Injectable({})
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  // get confirm mail token
  async generateConfirmationToken(user: User) {
    const confToken = crypto.randomUUID();
    user.confirmationToken = confToken;
    const date = new Date();
    // get tomorrow / expire date is 1 day.
    date.setDate(date.getDate() + 1);
    user.confirmationTokenExpires = date;
  }

  // get access token and refresh token
  async getToken(id: string) {
    const access_token = this.jwtService.signAsync(
      { id },
      {
        secret: `${process.env.JWT_SECRET}`,
        expiresIn: 60 * 20, // expire time is 20 minute
      },
    );
    const refresh_token = this.jwtService.signAsync(
      { id },
      {
        secret: `${process.env.RT_SECRET}`,
        expiresIn: 60 * 60 * 24 * 7, // expire time is 7 days
      },
    );
    const [at, rt] = await Promise.all([access_token, refresh_token]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const { name, email, password, role } = signUpDto;
    if (role === "admin") {
      throw new UnauthorizedException("You can't perform this action");
    }
    const userBody = { name, email, password };
    const user = new this.userModel(userBody);
    this.generateConfirmationToken(user);
    const updatedUser = await user.save({ validateBeforeSave: true });
    const token = await this.getToken(user._id);
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);
    return token;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException("Invalid email or password");
    }
    if (user.status === "block") {
      throw new UnauthorizedException("You can't perform this action");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException("Invalid email or password");
    }
    const token = await this.getToken(user._id);
    return token;
  }

  async loginWithGoogle(details: UserDetails) {
    const { email, userImage, name, providerId } = details;
    const user =
      (await this.userModel.findOne({ email })) || new this.userModel();
    user.userImage = userImage;
    user.name = name;
    user.status = "active";
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;
    if (user.email) {
      const updatedUser = await user.save({ validateBeforeSave: false });
      return await this.getToken(updatedUser._id);
    }
    user.email = email;
    user.provider = "google";
    user.providerId = providerId;
    const updatedUser = await user.save({ validateBeforeSave: false });
    return await this.getToken(updatedUser._id);
  }

  async confirmEmail(token: string, res: Response) {
    const user = await this.userModel.findOne({ confirmationToken: token });
    if (!user) {
      return res.send(`
                    <html>
                        <body>
                            <h1 style="text-align:center">Invalid Token!</h1>
                        </body>
                    </html>
                `);
    }
    user.status = "active";
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;
    user.save({ validateBeforeSave: true });
    res.redirect(process.env.FRONTEND_URL);
  }

  async getAllUsers(userId: string, query: any): Promise<User[]> {
    const user = await this.userModel.findById(userId);
    if (!user || user.role !== "admin") {
      throw new UnauthorizedException("You can't perform this action");
    }
    const { search } = flexibleQuery(query);
    return await this.userModel
      .find({})
      .skip(search.skip)
      .limit(search.limit)
      .select("-password -__v -updatedAt -passwordChangedAt -provider")
      .sort(search.sortBy);
  }

  async refreshToken() {
    return;
  }

  async resendConfirmationToken(userId: string): Promise<{ message: string }> {
    const user = await this.userModel.findById(userId);
    if (user.status !== "deactive") {
      throw new ForbiddenException("You can't perform this action");
    }
    await this.generateConfirmationToken(user);
    const updatedUser = await user.save({ validateBeforeSave: true });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return { message: "Token have sent to your mail" };
  }

  async resetPasswordToken(userId: string): Promise<{ message: string }> {
    const token = crypto.randomUUID();
    const user = await this.userModel.findById(userId);
    if (user.status === "block") {
      throw new ForbiddenException("You can't perform this action");
    }
    user.passwordResetToken = token;
    const date = new Date();
    // get tomorrow / expire date is 1 day.
    date.setDate(date.getDate() + 1);
    user.passwordResetExpires = date;
    const updatedUser = await user.save({ validateBeforeSave: true });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return { message: "Token have sent to your mail" };
  }
}
