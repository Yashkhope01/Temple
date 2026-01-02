import { NextResponse } from 'next/server'
import { supportedLocales, defaultLocale, getLocaleFromPath } from '@/lib/i18n'

export function middleware(request) {
  const pathname = request.nextUrl.pathname
  const locale = getLocaleFromPath(pathname)

  // Extract locale from URL if present
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  const isLocaleSegment = supportedLocales.includes(firstSegment)
  
  // If locale is in URL, rewrite to remove it (Next.js will handle the rewrite)
  // Otherwise, just pass through
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)
  requestHeaders.set('x-pathname', pathname)
  requestHeaders.set('x-original-pathname', pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

