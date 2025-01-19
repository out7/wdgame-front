'use client';

import {PropsWithChildren, useEffect} from "react";
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

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);

      const sleep = (ms: number): Promise<void> =>
        new Promise((resolve) => setTimeout(resolve, ms));
      console.log('Запрос начался');
      await sleep(5000); // Задержка на 5 секунд
      console.log('Прошло 5 секунд');
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
  ) : <div className="">Loading</div>;
}
