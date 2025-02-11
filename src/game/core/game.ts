import { AUTO, Game, Types } from 'phaser';
import Scale = Phaser.Scale;
import City from "@/game/scenes/city";
import Preloader from "@/game/scenes/preloader";

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 1170,
  height: 2196,
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
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  backgroundColor: '#ccc',
  scene: [
    Preloader,
    City
  ]
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
}

export default StartGame;
