import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./utils/auth";

export default async function middleware(req: NextRequest) {
  try {
    const user = getUser(req);
  } catch (error) {
    console.error({ error });
  }
}

export const config = {
  matcher: ["/candidate"],
};
