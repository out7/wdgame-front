'use client';

import {PropsWithChildren, useEffect, useState } from "react";
import { init, initData } from '@telegram-apps/sdk-react';
import { useDidMount } from "@/hooks/useDidMount";
import { useClientOnce } from "@/hooks/useClientOnce";

function RootInner({ children }: PropsWithChildren) {
  const [authData, setAuthData] = useState(null);

  useClientOnce(() => {
    init();
    initData.restore()
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4444/auth/tma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: initData.raw() }),
      });

      const data = await response.json();
      setAuthData(data);
    };

    fetchData();
  }, []);

  console.log(authData);

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
