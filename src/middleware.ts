import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeSession, SESSION_COOKIE_NAME } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const sessionUser = decodeSession(token);

  const response = NextResponse.next();

  if (sessionUser) {
    response.headers.set("x-user-role", sessionUser.role);
    response.headers.set("x-user-email", sessionUser.email);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
