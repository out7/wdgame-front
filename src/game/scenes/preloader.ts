import { Scene } from 'phaser';

export default class Preloader extends Scene {
  constructor() {
    super({ key: 'Preloader' });
  }

  preload() {
    // this.load.image("sky", "path_to_your_image/sky.png");
    // Здесь можно загрузить другие ресурсы
  }

  create() {
    this.scene.start('City'); // После загрузки ресурсов, сразу стартуем следующую сцену
  }
}