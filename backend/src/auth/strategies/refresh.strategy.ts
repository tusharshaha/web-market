import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { Request } from "express";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
  constructor() {
    const extractJwtFromCookie = (req: any) => {
      return req.user;
    };
    super({
      jwtFromRequest: extractJwtFromCookie,
      ignoreExpiration: false,
      secretOrKey: `${process.env.RT_SECRET}`,
      passReqToCallBack: true,
    });
  }

  async validate(req: Request, payload: { id: string }) {
    const { id } = payload;
    return id ? { userId: id } : null;
  }
}
