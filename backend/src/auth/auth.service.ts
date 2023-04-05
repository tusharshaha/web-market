import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import * as bcrypt from "bcryptjs";
import { Model } from "mongoose";
import confirmMailTemp from "./emailTemplate/confirm.temp";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";

@Injectable({})
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const { name, email, password, contactNumber, userImage } = signUpDto;
    const userBody = { name, email, password, contactNumber, userImage };
    const user = new this.userModel(userBody);
    const confToken = crypto.randomUUID().toString();
    user.confirmationToken = confToken;
    const date = new Date();
    // get tomorrow / expire date is 1 day.
    date.setDate(date.getDate() + 1);
    user.confirmationTokenExpires = date;
    const token = this.jwtService.sign({ id: user._id });
    const hashPassword = await bcrypt.hash(password, 16);
    user.password = hashPassword;
    user.passwordChangedAt = new Date();
    const updatedUser = await user.save({ validateBeforeSave: false });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return token;
  }
}
