import { Scene } from "phaser";

export default class BattleScene extends Scene {
  constructor() {
    super('BattleScene');
  }

  preload() {
    // Load assets for the battle scene
    this.load.setPath('assets');
  }

  create() {
    this.add.text(100, 100, 'Welcome to the Battle Scene', { fontSize: '32px', color: '#000000' });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('plane', { start: 0, end: 59 }),
      frameRate: 60
    });



    for (let i = 0; i < 20; i++) {
      // Example usage for a 1170x2196 area
      const randomCoords = getRandomCoordinates(1170, 2196);
      console.log(randomCoords);  // Outputs something like { x: 583, y: 1527 }

      const charSprite = this.add.sprite(randomCoords.x, randomCoords.y, 'plane');
      charSprite.play({ key: 'idle', repeat: -1 });
    }


  }
}

function getRandomCoordinates(maxWidth: number, maxHeight: number): { x: number, y: number } {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  return { x, y };
}

