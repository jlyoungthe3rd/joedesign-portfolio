import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the request is for the under-construction page, allow it
  if (pathname.startsWith('/under-construction')) {
    return NextResponse.next();
  }

  // Rewrite all other paths to the under-construction page
  const url = request.nextUrl.clone();
  url.pathname = '/under-construction';
  return NextResponse.rewrite(url);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - and other static assets in the public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|j-icon.svg|file.svg|globe.svg|window.svg|eva-01.gif).*)',
  ],
};
