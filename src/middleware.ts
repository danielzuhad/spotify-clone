import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

const AUTHENTICATED_ROUTES = ["/", "/profile", "/search", "/playlist/:path*"];

export async function middleware(request: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
  const token = await getToken({
    req: request,
    secret: secret,
    cookieName: "next-auth.session-token",
  });
  const pathnameEndsWith = (searchString: string) => {
    return request.nextUrl.pathname.endsWith(searchString);
  };
  if (!pathnameEndsWith("/login")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }
  if (pathnameEndsWith("/login")) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/", "/profile", "/search", "/playlist/:path*"],
};
