import Tile from './tile';

const X_DIM = 10;
const Z_DIM = 5;

class Board {
  constructor() {
    this.tiles = [];
    for (let i = 0; i < X_DIM; i++) {
      for (let j = 0; j < Z_DIM; j++) {
        this.tiles.push(new Tile(i, j, "normal"));
      }
    }
  }
}

export default Board;
