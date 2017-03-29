import Tile from './tile';

const X_DIM = 10;
const Z_DIM = 5;

class Board {
  constructor() {
    this.tiles = this.createTiles();
  }

  createTiles() {
    const tiles = [[], []];

    for (let i = 0; i < X_DIM; i++) {
      tiles[0].push(new Tile(-2, i, "empty"));
      tiles[1].push(new Tile(-1, i, "empty"));
    }

    for (let i = 0; i < Z_DIM; i++) {
      const row = [new Tile(i, -2, "empty"), new Tile(i, -1, "empty")];
      for (let j = 0; j < X_DIM; j++) {
        row.push(new Tile(i, j, "normal"));
      }
      row.push(...[new Tile(i, X_DIM, "empty"), new Tile(i, X_DIM + 1, "empty")])
      tiles.push(row);
    }

    const lastRows = [[], []];
    for (let i = 0; i < X_DIM; i++) {
      lastRows[0].push(new Tile(Z_DIM, i, "empty"));
      lastRows[1].push(new Tile(Z_DIM + 1, i, "empty"));
    }
    tiles.push(...lastRows);

    // goal tile
    const goalX = Math.floor(Math.random() * (X_DIM - 1)) + 1;
    const goalZ = Math.floor(Math.random() * (Z_DIM - 1)) + 1;
    tiles[goalZ + 2][goalX + 2] = new Tile(goalZ, goalX, "goal");

    return tiles;
  }

  receiveMove(x, z) {
  }
}

export default Board;
