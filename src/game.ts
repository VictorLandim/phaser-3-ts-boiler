/// <reference path="./lib/phaser.d.ts" />

import * as Phaser from 'phaser';
import MainScene from './scenes/MainScene';

const config: GameConfig = {
    width: 900,
    height: 500,
    type: Phaser.AUTO,
    parent: 'game',
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    }
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => new Game(config);
