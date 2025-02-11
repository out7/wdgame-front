import { Scene } from 'phaser';

export default class City extends Scene {
  constructor() {
    super({ key: 'City' });
  }

  create() {
    this.add.text(10, 10, 'Добро пожаловать в город!', {
      fontSize: '36px',
      color: '#fff'
    });
  }

  update() {
    // Логика для обновления игры
  }
}