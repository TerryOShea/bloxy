import Board from './board';
import Block from './block';

import * as THREE from '../lib/three.min.js';

class Game {
  constructor() {
    this.board = new Board;
    this.block = new Block;
    this.level = 1;
    this.renderGame();
    this.listenKeydown();
  }

  renderGame() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1500;
    this.camera.position.y = 1250;
    this.camera.position.x = -600;
    this.camera.rotation.x = -Math.PI/8;
    this.camera.rotation.y = -Math.PI/8;

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(-400, 400, 500);
    this.scene.add(light);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(1000, 600);

    this.board.tiles.forEach(tile => this.scene.add(tile.render()));
    this.scene.add(this.block.render());

    document.body.appendChild(this.renderer.domElement);

    this.renderer.render(this.scene, this.camera);
  }

  listenKeydown() {
    document.addEventListener('keydown', e => {
      switch(e.keyCode) {
        case 37: // left
          this.block.rotate(0, 0, Math.PI/2);
          this.block.move(-1, 0, 0);
          break;
        case 38: // up
          this.block.rotate(Math.PI/2, 0, 0);
          this.block.move(0, 0, -1);
          break;
        case 39: // right
          this.block.rotate(0, 0, -Math.PI/2);
          this.block.move(1, 0, 0);
          break;
        case 40: // down
          this.block.rotate(-Math.PI/2, 0, 0);
          this.block.move(0, 0, 1);
          break;
        default:
          return;
      }

      this.scene.add(this.block.render());
      this.renderer.render(this.scene, this.camera);
    });
  }

  move(xPos, yPos) {

  }
}

export default Game;
