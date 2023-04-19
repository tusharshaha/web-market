import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    const extractJwtFromCookie = (req: any) => {
      return req.user || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    };
    super({
      jwtFromRequest: extractJwtFromCookie,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: string }) {
    const { id } = payload;
    return id ? { userId: id } : null;
  }
}
