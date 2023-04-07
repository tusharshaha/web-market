import { Request } from "@nestjs/common";
import { User } from "src/auth/schemas/user.schema";

export interface AuthenticatedRequest extends Request {
  user: User;
}
