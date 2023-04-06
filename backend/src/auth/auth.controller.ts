import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { handleError } from "src/utils/errorHandler";
import { Response } from "express";

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
      return handleError(error);
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
      return handleError(error);
    }
  }

  @Get("confirm_email")
  async confirmEmail(@Query("token") token: string, @Res() res: Response) {
    try {
      return await this.authService.confirmEmail(token, res);
    } catch (error) {
      res.send(`
            <html>
                <body>
                    <div style="text-align:center">
                        <h1>Something went wrong! try again.</h1>
                    </div>
                </body>
            </html>
        `);
    }
  }

  @Get("resend_confirmation_token")
  async resendConfirmationToken(@Query("email") email: string) {
    try {
      const token = await this.authService.resendConfirmationToken(email);
      return { token };
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("reset_password_token")
  async resetPasswordToken(@Query("email") email: string) {
    try {
      const token = await this.authService.resetPasswordToken(email);
      return { token };
    } catch (error) {
      return handleError(error);
    }
  }
}
