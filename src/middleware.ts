import {NextResponse, type NextRequest} from 'next/server';
import {isAuthenticated} from "@/utils/auth";

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
