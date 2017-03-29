import Board from './board';
import Block from './block';

import * as THREE from '../lib/three.min.js';

class Game {
  constructor() {
    this.board = new Board;
    this.block = new Block;
    this.level = 1;
    this.moves = 0;
    this.scoreboard = document.querySelector(".scoreboard");

    this.renderGame();
    this.listenKeydown();
  }

  renderGame() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1500;
    this.camera.position.y = 1000;
    this.camera.position.x = 600;
    this.camera.rotation.x = -Math.PI/6;

    const light1 = new THREE.PointLight(0xffffff, 1.5);
    light1.position.set(600, 800, 800);
    this.scene.add(light1);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(1000, 500);

    this.board.tiles.forEach(row => row.forEach(tile => this.scene.add(tile.render())));
    this.scene.add(this.block.render());

    document.body.appendChild(this.renderer.domElement);

    this.renderer.render(this.scene, this.camera);
  }

  updateScore() {
    this.moves += 1;
    this.scoreboard.innerHTML = this.moves;
    console.log(this.block.coords);
  }

  listenKeydown() {
    document.addEventListener('keydown', e => {
      switch(e.keyCode) {
        case 37: // left
          this.block.rotate(0, 0, Math.PI/2);
          this.block.move(-1, 0, 0);
          this.updateScore();
          break;
        case 38: // up
          this.block.rotate(Math.PI/2, 0, 0);
          this.block.move(0, 0, -1);
          this.updateScore();
          break;
        case 39: // right
          this.block.rotate(0, 0, -Math.PI/2);
          this.block.move(1, 0, 0);
          this.updateScore();
          break;
        case 40: // down
          this.block.rotate(-Math.PI/2, 0, 0);
          this.block.move(0, 0, 1);
          this.updateScore();
          break;
        default:
          return;
      }

      this.scene.add(this.block.render());
      this.renderer.render(this.scene, this.camera);
    });
  }

  receiveMove(x, z) {
    const tile = this.board.tiles[x][z];
    switch(tile.type) {
      case "normal":
        break;
      case "empty":
        this.lose();
        break;
      case "goal":
        if (this.block.alignment === "y") this.win();
        break;
      default:
        return;
    }
  }

  reset() {
    this.moves = 0;
    this.block.reset();
  }

  win() {
    alert("you won!");
    this.level += 1;
  }

  lose() {
    alert("you lost :(");
    this.reset();
  }
}

export default Game;
