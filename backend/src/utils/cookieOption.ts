import { Cookie } from "./types";

export const ATC_Option: Cookie = {
  httpOnly: true,
  sameSite: true,
  secure: true,
  maxAge: 60 * 60 * 1000, //cookie max age is 1 hour
};
export const RTC_Option: Cookie = {
  httpOnly: true,
  sameSite: true,
  secure: true,
  maxAge: 60 * 60 * 24 * 7 * 1000, //cookie max age is 7 days
};
