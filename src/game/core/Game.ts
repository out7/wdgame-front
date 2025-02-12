import { AUTO, Game, Types } from 'phaser';
import Scale = Phaser.Scale;
import CityScene from "@/game/scenes/CityScene";
import PreloaderScene from "@/game/scenes/PreloaderScene";

const config: Types.Core.GameConfig = {
  type: AUTO,
  // width: 1170,
  // height: 2196,
  parent: 'game-container',
  scale: {
    width: 1170,
    height: 2196,
    min: {
      width: 200,
      height: 300
    },
    max: {
      width: 1170,
      height: 2196
    },
    mode: Scale.WIDTH_CONTROLS_HEIGHT,
    autoCenter: Scale.CENTER_VERTICALLY,
  },
  backgroundColor: '#ccc',
  canvasStyle: `display: block; width: 100%;`,
  scene: [
    PreloaderScene,
    CityScene
  ]
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
}

export default StartGame;
