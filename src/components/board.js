import Tile from './tile';
import { LEVEL_ONE, LEVEL_TWO, LEVEL_THREE, LEVEL_FOUR, LEVEL_FIVE } from './constants';

class Board {
  constructor(scene, layout) {
    this.tiles = this.createTiles(scene, layout);
  }

  createTiles(scene, layout) {
    const tiles = [[]];
    const Z_DIM = layout.length;
    const X_DIM = layout[0].length;

    for (let i = -1; i <= X_DIM; i++) {
      tiles[0].push(new Tile(-1, i, "empty", scene));
    }

    for (let i = 0; i < Z_DIM; i++) {
      const row = [new Tile(i, -1, "empty", scene)];
      for (let j = 0; j < X_DIM; j++) {
        if (typeof layout[i][j] === "object") { // for bridge activators
          const tile = new Tile(i, j, "activator", scene);
          tile.bridgeCoords = layout[i][j].bridgeCoords;
          row.push(tile);
        } else {
          row.push(new Tile(i, j, layout[i][j], scene));
        }
      }
      row.push(new Tile(i, X_DIM, "empty", scene))
      tiles.push(row);
    }

    const lastRow = [];
    for (let i = -1; i <= X_DIM; i++) {
      lastRow.push(new Tile(Z_DIM, i, "empty", scene));
    }
    tiles.push(lastRow);

    return tiles;
  }

  addBoardToScene() {
    this.tiles.forEach(row => row.forEach(tile => tile.addTileToScene()));
  }

  removeBoardFromScene() {
    this.tiles.forEach(row => row.forEach(tile => tile.removeTileFromScene()));
  }
}

export default Board;
