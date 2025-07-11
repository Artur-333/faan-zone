import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Get the locale from the URL
  const locale = request.nextUrl.pathname.split('/')[1];
  
  // Set the locale in the response headers
  response.headers.set('X-Next-Intl-Locale', locale);
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
