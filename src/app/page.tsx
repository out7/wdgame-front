'use client';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import Link from "next/link";

export default function Home() {
  const initDataState = useSignal(initData.state);
  console.log(initDataState)

  return (
    <>
      Привет {initDataState?.user?.username}!
      <Link href={"/profile"}>profile</Link>
    </>
  );
}
