import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import * as bcrypt from "bcryptjs";
import { Model } from "mongoose";
import confirmMailTemp from "../utils/confirm.temp";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { Response } from "express";
import { UserDetails } from "src/utils/types";

@Injectable({})
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async generateConfirmationToken(user: User): Promise<string> {
    const confToken = crypto.randomUUID().toString();
    user.confirmationToken = confToken;
    const date = new Date();
    // get tomorrow / expire date is 1 day.
    date.setDate(date.getDate() + 1);
    user.confirmationTokenExpires = date;
    return confToken;
  }

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const { name, email, password, role, contactNumber } = signUpDto;
    if (role === "admin") {
      throw new UnauthorizedException("You can't perform this action");
    }
    const userBody = { name, email, password, contactNumber, role };
    const user = new this.userModel(userBody);
    this.generateConfirmationToken(user);
    const updatedUser = await user.save({ validateBeforeSave: true });
    const token = this.jwtService.sign({ id: user._id });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return token;
  }

  async login(loginDto: LoginDto): Promise<string> {
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
    const token = this.jwtService.sign({ id: user._id });
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
      const updatedUser = await user.save({ validateBeforeSave: true });
      return this.jwtService.sign({ id: updatedUser._id });
    }
    user.email = email;
    user.provider = "google";
    user.providerId = providerId;
    const updatedUser = await user.save({ validateBeforeSave: false });
    return this.jwtService.sign({ id: updatedUser._id });
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
    res.redirect("https://github.com/tusharshaha");
  }

  async getAllUsers(userId: string): Promise<User[]> {
    const user = await this.userModel.findById(userId);
    if (!user || user.role !== "admin") {
      throw new UnauthorizedException("You can't perform this action");
    }
    return await this.userModel.find({});
  }

  async resendConfirmationToken(userId: string): Promise<string> {
    const user = await this.userModel.findById(userId);
    if (user.status !== "deactive") {
      throw new ForbiddenException("You can't perform this action");
    }
    const token = await this.generateConfirmationToken(user);
    const updatedUser = await user.save({ validateBeforeSave: false });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return token;
  }

  async resetPasswordToken(userId: string): Promise<string> {
    const token = crypto.randomUUID().toString();
    const user = await this.userModel.findById(userId);
    if (user.status === "block") {
      throw new ForbiddenException("You can't perform this action");
    }
    user.passwordResetToken = token;
    const date = new Date();
    // get tomorrow / expire date is 1 day.
    date.setDate(date.getDate() + 1);
    user.passwordResetExpires = date;
    const updatedUser = await user.save({ validateBeforeSave: false });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return token;
  }
}
