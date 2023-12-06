import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const refresh_token = req.cookies.get("refresh_token")?.value || "";

  if (pathname.startsWith("/register") && refresh_token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (pathname.startsWith("/dashboard") && !refresh_token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/register", "/dashboard/:path*"],
};
