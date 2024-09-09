import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
  const token = await getToken({
    req: request,
    secret: secret,
  });

  const { pathname } = request.nextUrl;

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/information", "/search", "/playlist/:path*", "/liked"],
};
