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

  if (
    pathname.startsWith("/profile") ||
    pathname.startsWith("/payment") ||
    pathname.startsWith("/read")
  ) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
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
        url.pathname = "/signin";
        return NextResponse.redirect(url);
      }
    } catch (error) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith("/admin")) {
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

      if (!result.data.id || result.data.role !== "admin") {
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
