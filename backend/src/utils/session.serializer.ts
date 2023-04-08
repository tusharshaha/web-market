import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportSerializer } from "@nestjs/passport";
import { Model } from "mongoose";
import { User } from "src/auth/schemas/user.schema";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {
    super();
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: User, done: Function) {
    done(null, user);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  async deserializeUser(payload: User, done: Function) {
    const user = await this.userModel.findById(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
