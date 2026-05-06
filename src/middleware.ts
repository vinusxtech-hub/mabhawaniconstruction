import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only protect /admin routes (except /admin/login and /api/auth)
  const { pathname } = request.nextUrl;
  
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';
  const isAuthApi = pathname.startsWith('/api/auth');

  // Don't interfere with auth API or login page
  if (!isAdminRoute || isLoginPage || isAuthApi) {
    return NextResponse.next();
  }

  // Check for session token cookie
  const sessionToken =
    request.cookies.get("authjs.session-token")?.value ||
    request.cookies.get("__Secure-authjs.session-token")?.value;

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
}
