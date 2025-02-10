'use client';

import { initData } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { authTMA } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Loading() {
  const router = useRouter();

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

    const initPhaser = async () => {
      router.push('/game');
      const Phaser = await import('phaser');
      const { default: Preloader } = await import('../game/scenes/preloader');
      const { default: City } = await import('../game/scenes/city');

      const config = {
        type: Phaser.AUTO,
        width: 300,
        height: 400,
        parent: 'game-content',
        scene: [Preloader, City],
      };

      const game = new Phaser.Game(config);
      return () => {
        console.log('destroy')
        game.destroy(true);
      }
    }

    initPhaser();
  }, [router]);

  return <>
    <h1>Загрузка...</h1>
    <p></p>
  </>
}
