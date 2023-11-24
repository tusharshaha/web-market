import {
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
import { GoogleAuthGuard } from "./guards/google-auth.guard";
import { Throttle } from "@nestjs/throttler";
import { Public } from "../common/public.decorator";
import { RTAuthGuard } from "./guards/refresh-auth.guard";
import { ATC_Option, RTC_Option } from "../utils/cookieOption";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("signup")
  async signup(@Res() res: Response, @Body() signUpDto: SignUpDto) {
    try {
      const token = await this.authService.signUp(signUpDto);
      res.cookie("access_token", token.access_token, ATC_Option);
      res.cookie("refresh_token", token.refresh_token, RTC_Option);
      res.json({ message: "Successfully Signup" });
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Post("login")
  async login(@Res() res: Response, @Body() loginDto: LoginDto) {
    try {
      const token = await this.authService.login(loginDto);
      res.cookie("access_token", token.access_token, ATC_Option);
      res.cookie("refresh_token", token.refresh_token, RTC_Option);
      res.json({ message: "Successfully login" });
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Get("login/google")
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async loginWithGoogle() {}

  @Public()
  @Get("/google/redirect")
  @UseGuards(GoogleAuthGuard)
  async googleRedirect(@Req() req: any, @Res() res: Response) {
    try {
      const token = req.user;
      res.cookie("access_token", token.access_token, ATC_Option);
      res.cookie("refresh_token", token.refresh_token, RTC_Option);
      res.redirect(`${process.env.FRONTEND_URL}/`);
    } catch (error) {
      return handleError(error);
    }
  }

  @Post("logout")
  async logoutUser(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    try {
      const { userId } = req.user;
      await this.authService.logout(userId);
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
      res.json({ message: "Successfully logout" });
    } catch (error) {
      return handleError(error);
    }
  }

  @Public()
  @Post("/refresh")
  @UseGuards(RTAuthGuard)
  async refreshToken(@Req() req: any, @Res() res: Response) {
    try {
      const { userId } = req.user;
      const refreshToken = req.cookies.refresh_token || null;
      const token = await this.authService.refreshToken(userId, refreshToken);
      res.cookie("access_token", token.access_token, ATC_Option);
      res.cookie("refresh_token", token.refresh_token, RTC_Option);
      res.json({ message: "Token refresh successfuly" });
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

  @Get("profile")
  @Throttle(30, 60)
  async getUserProfile(@Req() req: AuthenticatedRequest) {
    try {
      const { userId } = req.user;
      return await this.authService.getProfile(userId);
    } catch (error) {
      return handleError(error);
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
