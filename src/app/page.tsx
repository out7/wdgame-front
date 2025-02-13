'use client';

import {useEffect, useLayoutEffect} from "react";
import StartGame from "@/game/core/Game";
import {EventBus} from "@/game/core/EventBus";

export default function Game() {

  useLayoutEffect(() => {
    const game = StartGame('game-container');

  }, []);

  useEffect(() => {
    EventBus.on('current-scene-ready', () => {
      console.log('Anybody Scene Ready or Switch')
    });

    return () => {
      EventBus.removeListener('current-scene-ready');
    }
  }, []);

  return(
    <>
      <div id="game-container" key="game-container"></div>
    </>
  )
}
