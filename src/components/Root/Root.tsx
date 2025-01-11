'use client';

import { PropsWithChildren } from "react";
import { init, initData, useSignal } from '@telegram-apps/sdk-react';
import { useDidMount } from "@/hooks/useDidMount";
import { useClientOnce } from "@/hooks/useClientOnce";

function RootInner({ children }: PropsWithChildren) {

  useClientOnce(() => {
    init();
    initData.restore()
  });

  // const initDataUser = useSignal(initData.user);
  // console.log(initDataUser)

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
  ) : <div className="">Loading</div>;
}
