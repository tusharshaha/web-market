import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("signup")
  async signup(@Body() signUpDto: SignUpDto, @Res() res: Response) {
    try {
      const token = await this.authService.signUp(signUpDto);
      res.set("Authorization", `Bearer ${token}`);
      res.status(200).json({
        status: true,
        message: "Successfully signed up",
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}
