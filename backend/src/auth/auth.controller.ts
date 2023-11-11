import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { handleError } from "../utils/errorHandler";
import { Response } from "express";
import { AuthenticatedRequest } from "../utils/types";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { GoogleAuthGuard } from "./guards/google-auth.guard";
import { Throttle } from "@nestjs/throttler";
import { Public } from "../common/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("signup")
  async signup(@Req() req: any, @Body() signUpDto: SignUpDto) {
    try {
      const token = await this.authService.signUp(signUpDto);
      req.session.passport = { user: token.access_token };
      return { token, message: "Successfully Signup" };
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Post("login")
  async login(@Req() req: any, @Body() loginDto: LoginDto) {
    try {
      const token = await this.authService.login(loginDto);
      req.session.passport = { user: token.access_token };
      return { token, message: "Successfully login" };
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Get("login/google")
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginWithGoogle() {}

  @Get("logout")
  async logoutUser(@Req() req: any, @Res() res: Response) {
    try {
      req.session.destroy((err: any) => {
        if (err) {
          throw new BadRequestException("Failed to logout");
        } else {
          res.clearCookie("LOGIN_INFO");
          res.json({
            status: 200,
            message: "Successfully logged out.",
          });
        }
      });
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Get("/google/redirect")
  @UseGuards(GoogleAuthGuard)
  async googleRedirect(@Res() res: Response) {
    try {
      res.redirect(`${process.env.FRONTEND_URL}/`);
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Get("/refresh")
  @UseGuards(JwtAuthGuard)
  async refreshToken() {
    try {
      this.authService.refreshToken();
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Get("confirm_email")
  @Throttle(5, 60)
  async confirmEmail(@Query("token") token: string, @Res() res: Response) {
    try {
      return await this.authService.confirmEmail(token, res);
    } catch (error) {
      res.send(`
            <html>
                <body style="text-align:center">
                  <h1>Something went wrong! try again.</h1>
                </body>
            </html>
        `);
    }
  }

  @Get("users")
  async getAllUser(@Req() req: AuthenticatedRequest, @Query() query: any) {
    try {
      const { userId } = req.user;
      return await this.authService.getAllUsers(userId, query);
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("resend_confirmation_token")
  async resendConfirmationToken(@Req() req: AuthenticatedRequest) {
    try {
      const { userId } = req.user;
      return await this.authService.resendConfirmationToken(userId);
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("password_reset_token")
  async resetPasswordToken(@Req() req: AuthenticatedRequest) {
    try {
      const { userId } = req.user;
      return await this.authService.resetPasswordToken(userId);
    } catch (error) {
      return handleError(error);
    }
  }
}
