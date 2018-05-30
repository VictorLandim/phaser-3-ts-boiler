class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: 'MainScene' });
    }

    preload(): void {
        this.load.image('logo', 'assets/phaser.png');
    }

    create(): void {
        this.phaserSprite = this.add.sprite(100, 100, 'logo');

        this.tweens.add({
            targets: this.phaserSprite,
            y: 600,
            duration: 1500,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}

export default MainScene;
