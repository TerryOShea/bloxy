import { BoxGeometry, MeshLambertMaterial, MeshBasicMaterial, Mesh, FaceColors, EdgesGeometry, LineBasicMaterial, LineSegments } from '../lib/three.min.js';
import { SIDE_LENGTH, TILE_HEIGHT } from './constants';

class Tile {
  constructor(zPos, xPos, type, scene) {
    this.type = type;
    this.scene = scene;

    const geometry = new BoxGeometry(SIDE_LENGTH, TILE_HEIGHT, SIDE_LENGTH);
    let material;

    // TODO: convert to switch statement

    if (type === "normal") {
      const rand = (Math.random() + 1)/2;
      geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));
      material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
    } else if (type === "empty") {
      material = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    } else if (type === "goal") {
      material = new MeshLambertMaterial({ transparent: true, opacity: 0 });
    } else if (type === "fragile") {
      material = new MeshLambertMaterial({ color: 0xffb84d, transparent: true, opacity: 0.7 });
    }

    this.tile = new Mesh(geometry, material);
    this.tile.position.x = xPos * SIDE_LENGTH;
    this.tile.position.z = zPos * SIDE_LENGTH;
    this.tile.position.y = -1 * TILE_HEIGHT;

    // add black edge lines to normal tiles
    if (type === "normal") {
      const lineGeometry = new EdgesGeometry(this.tile.geometry);
      const lineMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 2 });
      const edges = new LineSegments(lineGeometry, lineMaterial);
      this.tile.add(edges);
    }

    // add button to activator tiles
      // const button
  }

  activate() {
    this.state.activated = true; // for bridges
  }

  deactivate() {
    this.state.activated = false; // for bridges
  }

  receiveBridgeTiles(tiles) {
    this.bridgeTiles = tiles;
  }

  activateBridge() {
    this.bridgeTiles.forEach(tile => tile.activate());
  }

  deactivateBridge() {
    this.bridgeTiles.forEach(tile => tile.deactivate());
  }

  addTileToScene() {
    this.scene.add(this.tile);
  }
}

export default Tile;
