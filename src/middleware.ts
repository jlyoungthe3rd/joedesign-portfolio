import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware() {
  // Allow all requests to pass through normally
  return NextResponse.next();
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
