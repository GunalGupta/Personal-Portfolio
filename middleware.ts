import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const selectedTheme = request.cookies.get("selectedTheme")?.value;
  if (!selectedTheme && !request.nextUrl.pathname.startsWith('/ui-theme')) {
    return NextResponse.redirect(new URL('/ui-theme', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
