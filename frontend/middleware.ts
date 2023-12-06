import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./utils/auth";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const cookieOption: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path: "/",
};

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const refresh_token = req.cookies.get("refresh_token")?.value || "";
  response.cookies.set("token", refresh_token, cookieOption)
  return response
  // if (pathname.startsWith("/register") && refresh_token) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  // if (pathname.startsWith("/dashboard") && !refresh_token) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
}

export const config = {
  matcher: ["/register", "/dashboard/:path*"],
};
