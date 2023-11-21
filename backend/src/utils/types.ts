import { Request } from "@nestjs/common";

export interface AuthenticatedRequest extends Request {
  user: { userId: string };
}

export interface UserDetails {
  email: string;
  name: string;
  userImage: string;
  providerId: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface Cookie {
  maxAge: number;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: boolean;
  path?: string;
}
