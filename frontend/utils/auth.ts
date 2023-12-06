import { NextRequest } from "next/server";

const commonOptions: RequestInit = {
  mode: "cors",
  credentials: "include",
};

const makeRequest = async (url: string, options: RequestInit) => {
  const req = fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
    ...commonOptions,
    ...options,
  });
  return (await req).json();
};
export async function getUser(req: NextRequest) {
  const access_token = req.cookies.get("access_token")?.value || "";
  const refresh_token = req.cookies.get("refresh_token")?.value || "";

  const profileData = await makeRequest("/auth/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (profileData.statusCode === 401) {
    const refreshData = await makeRequest("/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refresh_token}`,
      },
    });

    if (refreshData.statusCode !== 401) {
      const refreshedProfileData = await makeRequest("/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshData?.token?.access_token}`,
        },
      });
      return { ...refreshedProfileData, ...refreshData };
    } else {
      return {};
    }
  } else {
    return profileData;
  }
}
