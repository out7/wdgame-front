'use client';

import { useLayoutEffect } from "react";
import StartGame from "@/game/core/game";

export default function Game() {

  useLayoutEffect(() => {
    const game = StartGame('game-container');

  }, []);

  return(
    <>
      <div id="game-container" key="game-container"></div>
    </>
  )
}
