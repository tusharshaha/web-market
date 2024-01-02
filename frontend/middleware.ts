import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./utils/auth";

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const user = await getUser(req);
  const refresh_token = req.cookies.get("refresh_token")?.value || "";
  const access_token = req.cookies.get("access_token")?.value || "";

  console.log({access_token, refresh_token, user})
  //if (pathname.startsWith("/register") && user.email) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  // if (pathname.startsWith("/dashboard") && !user.email) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
}

export const config = {
  matcher: ["/register", "/dashboard/:path*"],
};