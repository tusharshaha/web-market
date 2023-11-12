import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
  constructor() {
    const extractJwtFromCookie = (req: any) => {
      return req.cookies.refresh_token;
    };
    super({
      jwtFromRequest: extractJwtFromCookie,
      ignoreExpiration: false,
      secretOrKey: `${process.env.RT_SECRET}`,
    });
  }

  async validate(payload: { id: string }) {
    const { id } = payload;
    return id ? { userId: id } : null;
  }
}
