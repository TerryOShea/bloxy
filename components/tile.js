import { BoxGeometry, MeshLambertMaterial, MeshBasicMaterial, Mesh, FaceColors, EdgesGeometry, LineBasicMaterial, LineSegments, CylinderGeometry } from '../lib/three.min.js';
import { SIDE_LENGTH, TILE_HEIGHT } from './constants';

class Tile {
  constructor(zPos, xPos, type, scene) {
    this.zPos = zPos;
    this.xPos = xPos;
    this.type = type;
    this.scene = scene;

    this.renderTile()
  }

  renderTile(activated) {

    const geometry = new BoxGeometry(SIDE_LENGTH, TILE_HEIGHT, SIDE_LENGTH);
    let material;

    // TODO: convert to switch statement

    const rand = (Math.random() + 1)/2;

    switch(this.type) {
      case "normal":
      case "activator":
        geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));
        material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
        break;
      case "empty":
        material = new MeshBasicMaterial({ transparent: true, opacity: 0 });
        break;
      case "goal":
        material = new MeshLambertMaterial({ transparent: true, opacity: 0 });
        break;
      case "fragile":
        material = new MeshLambertMaterial({ color: 0xffb84d, transparent: true, opacity: 0.7 });
        break;
      case "bridge":
        if (activated) {
          geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));
          material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
        } else {
          material = new MeshBasicMaterial({ transparent: true, opacity: 0 });
        }
      default:
        break;
    }

    this.tile = new Mesh(geometry, material);
    this.tile.position.x = this.xPos * SIDE_LENGTH;
    this.tile.position.z = this.zPos * SIDE_LENGTH;
    this.tile.position.y = -1 * TILE_HEIGHT;

    // add black edge lines to normal tiles
    if (this.type === "normal" || (activated && this.type === "bridge")) {
      const lineGeometry = new EdgesGeometry(this.tile.geometry);
      const lineMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 2 });
      const edges = new LineSegments(lineGeometry, lineMaterial);
      this.tile.add(edges);
    }

    // add button to activator tiles
    if (this.type === "activator") {
      const radius = SIDE_LENGTH * 0.4;
      const buttonGeometry = new CylinderGeometry(radius, radius, TILE_HEIGHT, 32);
      buttonGeometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));
      const button = new Mesh(buttonGeometry, material);
      button.position.y = TILE_HEIGHT;

      this.tile.add(button);
    }
  }

  addTileToScene() {
    this.scene.add(this.tile);
  }

  removeTileFromScene() {
    this.scene.remove(this.tile);
  }
}

export default Tile;
