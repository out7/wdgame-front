import { Scene } from 'phaser';
import { EventBus } from "@/game/core/EventBus";

export default class CityScene extends Scene {
  constructor() {
    super({ key: 'City' });
  }

  create() {
    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'map');
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);

    let buildingData = [
      { key: 'barracks', x: 887, y: 932 },
      { key: 'construct', x: 868, y: 1672 },
      { key: 'globe', x: 620, y: 1262 },
      { key: 'main', x: 569, y: 662 },
      { key: 'alliance', x: 282, y: 982 },
      { key: 'pvp', x: 342, y: 1559 }
    ];

    // Add buildings to the scene
    buildingData.forEach(data => {
      let building = this.add.image(data.x, data.y, data.key);

      // Scale the building according to the map's scale
      building.setScale(scale);
      building.setScrollFactor(0);

      // Make the building interactive with hover effects
      building.setInteractive();

      const fx = building.preFX?.addGlow(0xeaeaea, 6, 0, false);
      fx?.setActive(false);

      // Mouse over effect
      building.on('pointerover', () => {
        fx?.setActive(true);
      });

      // Mouse out effect
      building.on('pointerout', () => {
        fx?.setActive(false);
      });

      // Switch Scenes
      if (data.key === 'pvp') {
        building.on('pointerdown', () => {
          // this.scene.start('BattleScene');
        });
      }

    });

    const flagAnimation = this.anims.create({
      key: 'flag',
      frames: this.anims.generateFrameNumbers('flag-ru'),
      frameRate: 30
    });

    const flagSprite = this.add.sprite(778, 496, 'flag-ru').setScale(1);
    flagSprite.play({ key: 'flag', repeat: -1 });

    EventBus.emit('current-scene-ready', this);
  }

  update() {
    // Логика для обновления игры
  }
}