import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const selectedTheme = request.cookies.get("selectedTheme")?.value;
  if (!selectedTheme && !request.nextUrl.pathname.startsWith('/uitheme')) {
    return NextResponse.redirect(new URL('/uitheme', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
