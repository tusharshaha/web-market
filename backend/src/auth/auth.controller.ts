import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get("signup")
  signup(): string {
    return this.authService.signup();
  }
  @Post("signin")
  signin(): string {
    return this.authService.signin();
  }
}
