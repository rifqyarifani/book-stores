import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("token");

  if (pathname.startsWith("/signup") || pathname.startsWith("/signin")) {
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith("/profile")) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/user/detail",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token.value}` },
        }
      );

      const result = await response.json();

      if (!result.data.id) {
        const url = req.nextUrl.clone();
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    } catch (error) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
