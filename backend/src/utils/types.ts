import { Request } from "@nestjs/common";

export interface AuthenticatedRequest extends Request {
  user: { userId: string };
}

export interface UserDetails {
  email: string;
  name: string;
  userImage: string;
}
