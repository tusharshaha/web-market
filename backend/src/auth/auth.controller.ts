import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("signup")
  async signup(@Body() signUpDto: SignUpDto) {
    try {
      const token = await this.authService.signUp(signUpDto);
      return {
        token,
        message: "Successfully Signup",
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
