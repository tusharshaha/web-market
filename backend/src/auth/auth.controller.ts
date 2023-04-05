import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from "@nestjs/common";
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

  @Get("resend_confirmation_token")
  async resendConfirmationToken(@Query("email") email: string) {
    try {
      const token = await this.authService.resendConfirmationToken(email);
      return { token };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get("reset_password_token")
  async resetPasswordToken(@Query("email") email: string) {
    try {
      const token = await this.authService.resetPasswordToken(email);
      return { token };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
