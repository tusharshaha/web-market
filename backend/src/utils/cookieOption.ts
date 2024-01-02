import { CookieOptions } from "express";

export const CC_Option: CookieOptions = {
  secure: true,
  sameSite: "none",
  path: "/",
  domain: "web-market-nu.vercel.app",
};

export const ATC_Option: CookieOptions = {
  ...CC_Option,
  httpOnly: true,
  maxAge: 60 * 60 * 1000, //cookie max age is 1 hour
};
export const RTC_Option: CookieOptions = {
  ...ATC_Option,
  maxAge: 60 * 60 * 24 * 7 * 1000, //cookie max age is 7 days
};
