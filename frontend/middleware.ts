import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./utils/auth";

export default async function middleware(req: NextRequest) {
  // const user = getUser(req);
  console.log(req.nextUrl.pathname)
}