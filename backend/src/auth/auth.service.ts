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
import { Token, UserDetails } from "../utils/types";
import { flexibleQuery } from "../utils/flexibleQuery";

@Injectable({})
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<Token> {
    const { name, email, password, userImage } = signUpDto;
    const userBody = { name, email, password, userImage };
    const user = new this.userModel(userBody);
    this.generateConfirmationToken(user);
    const token = await this.getToken(user.id);
    user.refreshToken = bcrypt.hashSync(token.refresh_token, 8);
    const updatedUser = await user.save({ validateBeforeSave: true });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);
    return token;
  }

  async login(loginDto: LoginDto): Promise<Token> {
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
    const token = await this.getToken(user.id);
    await this.updateRefreshToken(user.id, token.refresh_token);
    return token;
  }

  async loginWithGoogle(details: UserDetails): Promise<Token> {
    const { email, userImage, name, providerId } = details;
    const user =
      (await this.userModel.findOne({ email })) || new this.userModel();
    const token = await this.getToken(user.id);
    user.userImage = userImage;
    user.name = name;
    user.status = "active";
    user.refreshToken = bcrypt.hashSync(token.refresh_token, 8);
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;
    if (user.email) {
      await user.save({ validateBeforeSave: false });
      return token;
    }
    user.email = email;
    user.provider = "google";
    user.providerId = providerId;
    await user.save({ validateBeforeSave: false });
    return token;
  }

  async logout(userId: string) {
    await this.userModel.findByIdAndUpdate(userId, { refreshToken: null });
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
      .select(
        "-password -__v -updatedAt -passwordChangedAt -provider -refreshToken",
      )
      .sort(search.sortBy);
  }

  async getProfile(userId: string): Promise<User> {
    const user = await this.userModel
      .findById(userId)
      .select(
        "-password -__v -provider -providerId -refreshToken -passwordResetToken -confirmationToken",
      );
    return user;
  }

  async refreshToken(userId: string, refreshToken: string): Promise<Token> {
    const user = await this.userModel.findById(userId);
    if (!user || !user.refreshToken) {
      throw new ForbiddenException("Access Denied");
    }
    const rtMatch = bcrypt.compare(refreshToken, user.refreshToken);
    if (!rtMatch) throw new ForbiddenException("Access Denied");
    const token = await this.getToken(user.id);
    await this.updateRefreshToken(user.id, token.refresh_token);
    return token;
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

  // get confirm mail token
  async generateConfirmationToken(user: User): Promise<void> {
    const confToken = crypto.randomUUID();
    user.confirmationToken = confToken;
    const date = new Date();
    // get tomorrow / expire date is 1 day.
    date.setDate(date.getDate() + 1);
    user.confirmationTokenExpires = date;
  }

  async updateRefreshToken(userId: string, refresh_token: string) {
    const hash = bcrypt.hashSync(refresh_token, 8);
    await this.userModel.findByIdAndUpdate(userId, { refreshToken: hash });
  }

  // get access token and refresh token
  async getToken(id: string): Promise<Token> {
    const access_token = this.jwtService.signAsync(
      { id },
      {
        secret: `${process.env.JWT_SECRET}`,
        expiresIn: "1h", // expire time is 1 hour
      },
    );
    const refresh_token = this.jwtService.signAsync(
      { id },
      {
        secret: `${process.env.RT_SECRET}`,
        expiresIn: "7d", // expire time is 7 days
      },
    );
    const [at, rt] = await Promise.all([access_token, refresh_token]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
