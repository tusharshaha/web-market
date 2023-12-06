import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./utils/auth";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const cookieOption: Partial<ResponseCookie> = {
  secure: true,
  sameSite: "none",
  path: "/",
};

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const user = await getUser(req);
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/register") && user.email) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (pathname.startsWith("/dashboard") && !user.email) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // set token to the browser 
  if (user?.token?.access_token) {
    response.cookies.set("access_token", user.token.access_token, {
      ...cookieOption,
      maxAge: 60 * 60 * 1000,
    });
    response.cookies.set("refresh_token", user.token.refresh_token, {
      ...cookieOption,
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });
    return response;
  }
}

export const config = {
  matcher: ["/register", "/dashboard/:path*"],
};
