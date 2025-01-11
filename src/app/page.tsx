'use client';
import { useSignal, initData } from '@telegram-apps/sdk-react';

export default function Home() {
  const initDataState = useSignal(initData.state);
  console.log(initDataState)

  return (
    <>
      Привет {initDataState?.user?.username}!
    </>
  );
}
