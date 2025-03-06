'use server';

import { createSession } from "@/lib/session";

export async function authTMA(initData: string | undefined) {
  try {
    console.log(`URL: ${process.env.BACKEND_URL}/auth/tma`)
    const response = await fetch(`${process.env.BACKEND_URL}/auth/tma`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: initData }),
    });

    if (response.ok) {
      const result = await response.json();
      await createSession({
        user: {
          id: result.id,
          username: result.username,
          tg_id: result.tg_id,
          tg_first_name: result.tg_first_name,
          tg_last_name: result.tg_last_name || undefined,
          tg_username: result.tg_username || undefined,
          tg_photo_url: result.tg_photo_url || undefined,
          tg_premium: result.tg_premium,
          language_code: result.language_code,
        },
        accessToken: result.accessToken,
        refreshToken: result.refresh_token,
      });
      return result;
    } else {
      // Если ответ не успешный, выбрасываем ошибку
      throw new Error('Failed to authenticate.');
    }
  } catch (error) {
    console.error('Authentication error:', error);

    // Здесь можем вернуть ошибку, которая затем будет обработана в компоненте
    throw new Error('An error occurred while authenticating. Redirecting to error page.');
  }
}
