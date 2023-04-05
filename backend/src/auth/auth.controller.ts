import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";

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

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    try {
      const token = await this.authService.login(loginDto);
      return {
        token,
        message: "Successfully Login",
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
