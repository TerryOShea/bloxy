import { BoxGeometry, MeshLambertMaterial, Mesh, FaceColors, Vector3, Quaternion } from '../lib/three.min.js';

const SHORT_DIM = 150;

class Block {
  constructor() {
    const geometry = new BoxGeometry(SHORT_DIM, SHORT_DIM * 2, SHORT_DIM);
    const rand = (Math.random() + 1)/2;
    geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));

    const material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
    this.block = new Mesh(geometry, material);

    this.reset();
  }

  reset() {
    this.block.position.y = 140;
    this.alignment = "y";
  }

  render() {
    return this.block;
  }

  move(x, y, z) {
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
