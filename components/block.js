import { BoxGeometry, MeshLambertMaterial, Mesh, FaceColors, Vector3, Quaternion } from '../lib/three.min.js';
import { SIDE_LENGTH } from './constants';

class Block {
  constructor(scene, initialPos) {
    // from the larger game view
    this.scene = scene;

    // create the 3D box
    const geometry = new BoxGeometry(SIDE_LENGTH, SIDE_LENGTH * 2, SIDE_LENGTH);
    const rand = (Math.random() + 1)/2;
    geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));

    const material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
    this.block = new Mesh(geometry, material);

    this.initialPos = initialPos;
    this.startLevel();
  }

  startLevel() {
    this.reset();
    this.block.position.y = 800; // to be dropped in
  }

  reset() {
    const xPos = (this.initialPos[0] - 1) * SIDE_LENGTH;
    const zPos = (this.initialPos[1] - 1) * SIDE_LENGTH;

    this.block.position.x = xPos;
    this.block.position.y = 140;
    this.block.position.z = zPos;
    this.block.rotation.x = 0;
    this.block.rotation.y = 0;
    this.block.rotation.z = 0;

    this.alignment = "y"; // vertical (y-axis) alignment

    // the x-z coordinates of each cube of the block
    this.coords = [[...this.initialPos], [...this.initialPos]];
  }

  // TODO: simplify logic
  updateCoords(x, y, z) {
    if (x) {
      switch(this.alignment) {
        case "x":
          if (x > 0) {
            this.coords[0][0] += 2 * x;
            this.coords[1][0] += x;
          } else {
            this.coords[1][0] += 2 * x;
            this.coords[0][0] += x;
          }
          break;
        case "y":
          if (x > 0) {
            this.coords[0][0] += x;
            this.coords[1][0] += 2 * x;
          } else {
            this.coords[1][0] += x;
            this.coords[0][0] += 2 * x;
          }
          break;
        case "z":
          this.coords.forEach(coord => coord[0] += x);
          break;
        default:
          return;
      }
    } else if (z) {
      switch(this.alignment) {
        case "x":
          this.coords.forEach(coord => coord[1] += z);
          break;
        case "y":
          if (z > 0) {
            this.coords[0][1] += z;
            this.coords[1][1] += 2 * z;
          } else {
            this.coords[1][1] += z;
            this.coords[0][1] += 2 * z;
          }
          break;
        case "z":
          if (z > 0) {
            this.coords[0][1] += 2 * z;
            this.coords[1][1] += z;
          } else {
            this.coords[1][1] += 2 * z;
            this.coords[0][1] += z;
          }
          break;
        default:
          return;
      }
    }

    this.coords.sort((a, b) => a[0] <= b[0] && a[1] <= b[1] ? -1 : 1);
  }

  addBlockToScene() {
    this.scene.add(this.block);
  }

  drop() {
    this.block.position.y -= 20;
  }

  height() {
    return this.block.position.y;
  }

  move(x, y, z) {
    this.updateCoords(x, y, z);

    if (x) {
      if (this.alignment === "z") {
        this.block.position.x += x * SIDE_LENGTH;
      } else {
        this.block.position.x += x * SIDE_LENGTH * 1.5;
        const multiplier = (x > 0 && this.alignment === "x") || (x < 0 && this.alignment === "y") ? 1 : -1;
        this.block.position.y += x * SIDE_LENGTH * 0.5 * multiplier;
        this.alignment = this.alignment === "y" ? "x" : "y";
      }
    } else if (z) {
      this.block.position.z += this.alignment === "x" ? z * SIDE_LENGTH : z * SIDE_LENGTH * 1.5;
      if (this.alignment !== "x") {
        const multiplier = (z > 0 && this.alignment === "z") || (z < 0 && this.alignment === "y") ? 1 : -1;
        this.alignment = this.alignment === "y" ? "z" : "y";
        this.block.position.y += z * SIDE_LENGTH * 0.5 * multiplier;
      }
    }
  }

  rotate(xdeg, ydeg, zdeg) {
    if (zdeg && this.alignment !== "z" || xdeg && this.alignment !== "x") {
      this.block.rotation.x += xdeg;
      this.block.rotation.y += ydeg;
      this.block.rotation.z += zdeg;
    }
  }
}

export default Block;
