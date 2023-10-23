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
import { Throttle, ThrottlerGuard } from "@nestjs/throttler";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signup(@Req() req: any, @Body() signUpDto: SignUpDto) {
    try {
      const { token, ...user } = await this.authService.signUp(signUpDto);
      req.session.passport = { user: token };
      return { user, message: "Successfully Signup" };
    } catch (error) {
      return handleError(error);
    }
  }

  @Post("login")
  async login(@Req() req: any, @Body() loginDto: LoginDto) {
    try {
      const { token, ...user } = await this.authService.login(loginDto);
      req.session.passport = { user: token };
      return { user, message: "Successfully login" };
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("login/google")
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginWithGoogle() {}

  @Get("logout")
  @UseGuards(JwtAuthGuard)
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

  @Get("/google/redirect")
  @UseGuards(GoogleAuthGuard)
  async googleRedirect(@Res() res: Response) {
    try {
      res.redirect(`${process.env.FRONTEND_URL}/`);
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("confirm_email")
  @UseGuards(ThrottlerGuard)
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
  @UseGuards(JwtAuthGuard)
  async getAllUser(@Req() req: AuthenticatedRequest, @Query() query: any) {
    try {
      const { userId } = req.user;
      return await this.authService.getAllUsers(userId, query);
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("resend_confirmation_token")
  @UseGuards(JwtAuthGuard)
  async resendConfirmationToken(@Req() req: AuthenticatedRequest) {
    try {
      const { userId } = req.user;
      return await this.authService.resendConfirmationToken(userId);
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("password_reset_token")
  @UseGuards(JwtAuthGuard)
  async resetPasswordToken(@Req() req: AuthenticatedRequest) {
    try {
      const { userId } = req.user;
      return await this.authService.resetPasswordToken(userId);
    } catch (error) {
      return handleError(error);
    }
  }
}
