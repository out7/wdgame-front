import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from "@/lib/session";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (!session || !session.user)
    return NextResponse.redirect(new URL('/error', request.nextUrl))

  NextResponse.next();
}

export const config = {
  matcher: '/profile',
}