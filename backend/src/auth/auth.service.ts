import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
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

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password, contactNumber, userImage } = signUpDto;
    const userBody = { name, email, password, contactNumber, userImage };
    const user = await this.userModel.create(userBody);
    user.generateConfirmationToken();
    const token = this.jwtService.sign({
      name,
      email,
      role: user.role,
      status: user.status,
    });
    const updatedUser = await user.save({ validateBeforeSave: false });
    // mail sending functionality
    const template = confirmMailTemp(updatedUser);

    return { token };
  }
}
