import Board from './board';
import Block from './block';
import * as BLOXY from './constants';

import * as THREE from '../lib/three.min.js';

const KEYDOWN_EVENTS = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown"
];

const LEVEL_REF = [
  { boardLayout: BLOXY.LEVEL_ZERO, blockPos: BLOXY.START_POS_ZERO },
  { boardLayout: BLOXY.LEVEL_ONE, blockPos: BLOXY.START_POS_ONE },
  { boardLayout: BLOXY.LEVEL_TWO, blockPos: BLOXY.START_POS_TWO },
  { boardLayout: BLOXY.LEVEL_THREE, blockPos: BLOXY.START_POS_THREE },
  { boardLayout: BLOXY.LEVEL_FOUR, blockPos: BLOXY.START_POS_FOUR }
];

class Game {
  constructor() {
    // 3D rendering
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    // this.camera.position.z = 1600; // for first three levels
    // this.camera.position.z = 2000; // for fourth level
    this.camera.position.z = 2500; // for fifth level
    // this.camera.position.y = 1100; for first four levels;
    this.camera.position.y = 1400;

    // this.camera.position.x = 600; // for first three levels
    this.camera.position.x = 1000; // for fourth and fifth levels
    this.camera.rotation.x = -Math.PI/5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(1000, 500);
    document.body.appendChild(this.renderer.domElement);

    // Game statistics
    this.level = 0;
    this.moves = 0;
    this.movesThisLevel = 0;
    this.scoreboard = document.querySelector(".scoreboard");
    this.modal = document.querySelector(".modal-container");

    // if one coord of the block has already won/lost the level, the other coord
    // will not be checked
    this.checkNextCoord = true;

    // Game components
    this.board = new Board(this.scene, LEVEL_REF[this.level].boardLayout);
    this.block = new Block(this.scene, LEVEL_REF[this.level].blockPos);

    // store hit activators so their bridges can be reset on a level reset
    this.activators = [];

    this.handleKeydown = this.handleKeydown.bind(this);

    const modalBtn = document.querySelector(".modal-btn");
    modalBtn.addEventListener('click', () => this.reset());

    this.renderGame();
  }

  renderGame() {
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(600, 800, 800);
    this.scene.add(light);

    this.renderLevel();
  }

  renderLevel() {
    this.board.addBoardToScene();

    this.renderer.render(this.scene, this.camera);

    this.dropBlock(140);
  }

  dropBlock(height) {
    if (this.block.block.position.y > height) {
      requestAnimationFrame(() => this.dropBlock(height));
      this.block.drop();
      this.block.addBlockToScene();
      this.renderer.render(this.scene, this.camera);
    } else {
      this.listenKeydown(); // event listeners
    }
  }

  updateScore(newScore) {
    this.movesThisLevel = typeof newScore === "number" ? newScore : this.movesThisLevel + 1;
    this.scoreboard.innerHTML = this.moves + this.movesThisLevel;

    if (typeof newScore === "undefined") {
      this.block.coords.forEach(coord => this.receiveMove(...coord));
    }
  }

  unlistenKeydown() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  listenKeydown() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  handleKeydown(e) {
    switch(e.key) {
      case "ArrowLeft":
        this.block.rotate(0, 0, Math.PI/2);
        this.block.move(-1, 0, 0);
        break;
      case "ArrowUp":
        this.block.rotate(Math.PI/2, 0, 0);
        this.block.move(0, 0, -1);
        break;
      case "ArrowRight":
        this.block.rotate(0, 0, -Math.PI/2);
        this.block.move(1, 0, 0);
        break;
      case "ArrowDown":
        this.block.rotate(-Math.PI/2, 0, 0);
        this.block.move(0, 0, 1);
        break;
      default:
        return;
    }

    if (KEYDOWN_EVENTS.includes(e.key)) {
      this.updateScore();
      this.block.addBlockToScene();
      this.renderer.render(this.scene, this.camera);
    }
  }

  receiveMove(x, z) {
    if (!this.checkNextCoord) {
      this.checkNextCoord = true;
      return;
    }

    const tiles = this.board.tiles;
    const tile = (tiles[z] && tiles[z][x]) ? tiles[z][x] : tiles[1][1];

    switch(tile.type) {
      case "normal":
        break;
      case "empty":
        this.lose();
        break;
      case "goal":
        if (this.block.alignment === "y") this.win();
        break;
      case "bridge":
        if (!tile.isActivated) this.lose();
        break;
      case "activator":
        this.activators.push(tile);
        tile.bridgeCoords.forEach(coord => {
          const bridgeTile = this.board.tiles[coord[0]][coord[1]];
          bridgeTile.removeTileFromScene();

          const wasActivated = bridgeTile.isActivated;
          bridgeTile.isActivated = !wasActivated;
          bridgeTile.renderTile(!wasActivated);
          bridgeTile.addTileToScene();
        });
        this.renderer.render(this.scene, this.camera);

        if (this.block.alignment === "y") this.checkNextCoord = false;
        break;
      case "fragile":
        if (this.block.alignment === "y") this.lose();
        break;
      default:
        return;
    }
  }

  win() {
    this.checkNextCoord = false;
    this.unlistenKeydown();
    this.dropBlock(-1600);
    this.moves += this.movesThisLevel;
    this.activators = [];
    this.updateScore(0);
    setTimeout(this.startNextLevel.bind(this), 1500);
  }

  startNextLevel() {
    this.checkNextCoord = true;

    // next level
    this.level += 1;

    if (this.level === 5) {
      this.modal.style.display = "flex";
    } else {
      this.block.initialPos = LEVEL_REF[this.level].blockPos;
      this.block.startLevel();
      this.board.removeBoardFromScene();

      this.board.tiles = this.board.createTiles(this.scene, LEVEL_REF[this.level].boardLayout);
      this.renderLevel();
    }
  }

  lose() {
    this.checkNextCoord = false;
    this.unlistenKeydown();
    this.dropBlock(-1600);
    setTimeout(() => {
      this.updateScore(0);
      this.block.reset();
      this.block.addBlockToScene();
      this.checkNextCoord = true;

      this.activators.forEach(activator => {
        activator.bridgeCoords.forEach(coord => {
          const bridgeTile = this.board.tiles[coord[0]][coord[1]];
          bridgeTile.isActivated = false;
          bridgeTile.removeTileFromScene();
        });
      });

      this.renderer.render(this.scene, this.camera);
    }, 1500);
  }

  reset() {
    this.modal.style.display = "none";
    this.level = -1;
    this.moves = 0;
    this.movesThisLevel = 0;
    this.scoreboard.innerHTML = this.moves;
    this.startNextLevel();
  }
}

export default Game;
