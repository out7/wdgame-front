"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Session = {
  user: {
    id: number;
    username: string;
    tg_id: number;
    tg_first_name: string;
    tg_last_name?: string;
    tg_username?: string;
    tg_photo_url?: string;
    tg_premium?: boolean | null;
    language_code: string;
  };
  accessToken: string;
  refreshToken?: string | null;
};

const secretKey = process.env.SESSION_SECRET_KEY!;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(payload: Session) {
  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  const nextCookies = await cookies();
  nextCookies.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession() {
  const nextCookies = await cookies();
  const cookie = nextCookies.get('session')?.value;

  if (!cookie) return null;

  try {
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ['HS256'],
    });
    console.log(payload)
    return payload as Session;
  } catch (err) {
    console.error('Failed to verify the session', err)
    // TODO: Редирект на страницу ошибки, перезапустите приложение
    redirect('/');
  }
}

export async function deleteSession() {
  const nextCookies = await cookies();
  nextCookies.delete("session");
}
