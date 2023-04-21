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
import { handleError } from "src/utils/errorHandler";
import { Response } from "express";
import { AuthenticatedRequest } from "src/utils/types";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { GoogleAuthGuard } from "./guards/google-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  async googleRedirect(@Req() req: any, @Res() res: Response) {
    try {
      const token = req.user;
      res.redirect("http://localhost:3000?token=" + token);
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
      const token = await this.authService.resendConfirmationToken(userId);
      return { token };
    } catch (error) {
      return handleError(error);
    }
  }

  @Get("password_reset_token")
  @UseGuards(JwtAuthGuard)
  async resetPasswordToken(@Req() req: AuthenticatedRequest) {
    try {
      const { userId } = req.user;
      const token = await this.authService.resetPasswordToken(userId);
      return { token };
    } catch (error) {
      return handleError(error);
    }
  }
}
