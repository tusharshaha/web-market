import { NextRequest, NextResponse } from "next/server";

const commonOptions: RequestInit = {
  mode: "cors",
  credentials: "include",
};

const makeRequest = (url: string, options: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
    ...commonOptions,
    ...options,
  }).then((res) => res.json());

export default async function middleware(req: NextRequest) {
  try {
    const access_token = req.cookies.get("access_token")?.value || "";
    const refresh_token = req.cookies.get("refresh_token")?.value || "";

    const profileData = await makeRequest("/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`
      },
    });
    if (profileData.statusCode === 401) {
      const refreshData = await makeRequest("/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${refresh_token}`
        },
      });

      if (refreshData.statusCode !== 401) {
        const refreshedProfileData = await makeRequest("/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
          },
        });
        console.log(refreshedProfileData);
      } else {
        // return NextResponse.redirect(new URL('/', req.url))
      }
    }
  } catch (error) {
    console.error({ error });
  }
}

export const config = {
  matcher: ["/candidate"],
};
