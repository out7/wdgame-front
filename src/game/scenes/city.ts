import Phaser from "phaser";

export default class City extends Phaser.Scene {
  constructor() {
    super({ key: 'City' });
  }

  create() {
    this.add.text(10, 10, 'Добро пожаловать в город!', {
      fontSize: '16px',
      color: '#fff'
    });
  }

  update() {
    // Логика для обновления игры
  }
}