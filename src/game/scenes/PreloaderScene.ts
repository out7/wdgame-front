import { Scene } from 'phaser';
import { EventBus } from "@/game/core/EventBus";

export default class PreloaderScene extends Scene {
  constructor() {
    super({ key: 'Preloader' });
  }

  preload() {
    this.load.setPath('assets');
    this.load.pack("map-pack", "city/city-pack.json");
    this.load.pack("flag-pack", "flags/flag-pack.json");
    this.load.spritesheet("plane", "characters/char-test.png", { frameWidth: 450, frameHeight: 450 });
  }

  create() {
    EventBus.emit('current-scene-ready', this);
    this.scene.start('City'); // После загрузки ресурсов, сразу стартуем следующую сцену
  }
}