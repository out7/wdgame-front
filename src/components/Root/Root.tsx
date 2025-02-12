'use client';

import { PropsWithChildren, useEffect } from "react";
import { init, initData } from '@telegram-apps/sdk-react';
import { useDidMount } from "@/hooks/useDidMount";
import { useClientOnce } from "@/hooks/useClientOnce";
import { authTMA } from "@/lib/auth";
import { useRouter } from "next/navigation";

function RootInner({ children }: PropsWithChildren) {
  const router = useRouter();

  useClientOnce(() => {
    init();
    initData.restore()
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await authTMA(initData.raw());
      } catch (error) {
        // При ошибке перенаправляем на страницу ошибок
        router.push('/error');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      { children }
    </>
  )
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount();
  return didMount ? (
    <RootInner {...props}/>
  ) : <div className="">Загрузка...</div>;
}
