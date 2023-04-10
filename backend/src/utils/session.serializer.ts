/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/auth/schemas/user.schema";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: User, done: Function) {
    // console.log("Serializer User");
    // console.log(user);
    done(null, user);
  }

  async deserializeUser(payload: User, done: Function) {
    // console.log("Deserialize User");
    // console.log(payload);
    return payload ? done(null, payload) : done(null, null);
  }
}
