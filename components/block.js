import { BoxGeometry, MeshLambertMaterial, Mesh, FaceColors, Vector3, Quaternion } from '../lib/three.min.js';

const SHORT_DIM = 150;

class Block {
  constructor() {
    const geometry = new BoxGeometry(SHORT_DIM, SHORT_DIM * 2, SHORT_DIM);
    const rand = (Math.random() + 1)/2;
    geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));

    const material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
    this.block = new Mesh(geometry, material);

    this.coords = [[0, 0], [0, 0]];

    this.reset();
  }

  reset() {
    this.block.position.y = 140;
    this.alignment = "y";
  }

  updateCoords(x, y, z) {
    if (x) {
      switch(this.alignment) {
        case "x":
          this.coords[0][0] += 2 * x;
          this.coords[1][0] += x;
          break;
        case "y":
          this.coords[0][0] += x;
          this.coords[1][0] += 2 * x;
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
          this.coords[0][1] += 2 * z;
          this.coords[1][1] += z;
          break;
        case "y":
          this.coords[0][1] += z;
          this.coords[1][1] += 2 * z;
          break;
        case "z":
          this.coords.forEach(coord => coord[1] += z);
          break;
        default:
          return;
      }
    }

    this.coords.sort((a, b) => a[0] <= b[0] && a[1] <= b[1] ? -1 : 1);
  }

  render() {
    return this.block;
  }

  move(x, y, z) {
    this.updateCoords(x, y, z);

    if (x) {
      if (this.alignment === "z") {
        this.block.position.x += x * SHORT_DIM;
      } else {
        this.block.position.x += x * SHORT_DIM * 1.5;
        const multiplier = (x > 0 && this.alignment === "x") || (x < 0 && this.alignment === "y") ? 1 : -1;
        this.block.position.y += x * SHORT_DIM * 0.5 * multiplier;
        this.alignment = this.alignment === "y" ? "x" : "y";
      }
    } else if (z) {
      this.block.position.z += this.alignment === "x" ? z * SHORT_DIM : z * SHORT_DIM * 1.5;
      if (this.alignment !== "x") {
        const multiplier = (z > 0 && this.alignment === "z") || (z < 0 && this.alignment === "y") ? 1 : -1;
        this.alignment = this.alignment === "y" ? "z" : "y";
        this.block.position.y += z * SHORT_DIM * 0.5 * multiplier;
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
