import Tile from './tile';
import { LEVEL_ONE, LEVEL_TWO, LEVEL_THREE, LEVEL_FOUR, LEVEL_FIVE } from './constants';

// calculate dynamically
const X_DIM = 10;
const Z_DIM = 6;

class Board {
  constructor(scene) {
    this.tiles = this.createTiles(scene);
  }

  createTiles(scene) {
    const tiles = [[]];

    for (let i = -1; i <= X_DIM; i++) {
      tiles[0].push(new Tile(-1, i, "empty", scene));
    }

    for (let i = 0; i < Z_DIM; i++) {
      const row = [new Tile(i, -1, "empty", scene)];
      for (let j = 0; j < X_DIM; j++) {
        row.push(new Tile(i, j, LEVEL_ONE[i][j], scene));
        // row.push(new Tile(i, j, "normal", scene));
      }
      row.push(new Tile(i, X_DIM, "empty", scene))
      tiles.push(row);
    }

    const lastRow = [];
    for (let i = -1; i <= X_DIM; i++) {
      lastRow.push(new Tile(Z_DIM, i, "empty", scene));
    }
    tiles.push(lastRow);

    // goal tile
    const goalX = Math.floor(Math.random() * (X_DIM - 2)) + 1;
    const goalZ = Math.floor(Math.random() * (Z_DIM - 2)) + 1;
    tiles[goalZ + 1][goalX + 1] = new Tile(goalZ, goalX, "goal", scene);

    return tiles;
  }

  addBoardToScene() {
    this.tiles.forEach(row => row.forEach(tile => tile.addTileToScene()));
  }
}

export default Board;
