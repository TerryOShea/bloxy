import Tile from './tile';

const X_DIM = 10;
const Z_DIM = 5;

class Board {
  constructor() {
    this.tiles = [[], []];

    for (let i = 0; i < X_DIM; i++) {
      this.tiles[0].push(new Tile(-2, i, "empty"));
      this.tiles[1].push(new Tile(-1, i, "empty"));
    }

    for (let i = 0; i < Z_DIM; i++) {
      const row = [new Tile(i, -2, "empty"), new Tile(i, -1, "empty")];
      for (let j = 0; j < X_DIM; j++) {
        row.push(new Tile(i, j, "normal"));
      }
      row.push(...[new Tile(i, X_DIM, "empty"), new Tile(i, X_DIM + 1, "empty")])
      this.tiles.push(row);
    }

    const lastRows = [[], []];
    for (let i = 0; i < X_DIM; i++) {
      lastRows[0].push(new Tile(Z_DIM, i, "empty"));
      lastRows[1].push(new Tile(Z_DIM + 1, i, "empty"));
    }
    this.tiles.push(...lastRows);
  }

  receiveMove(x, z) {
    switch(this.tiles[x][z].type) {
      case "normal":
        break;
      case "empty":

      default:
        return;
    }
  }
}

export default Board;
