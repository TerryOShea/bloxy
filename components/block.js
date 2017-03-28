import { BoxGeometry, MeshLambertMaterial, Mesh, FaceColors } from '../lib/three.min.js';

const SHORT_DIM = 150;

class Block {
  constructor() {
    const geometry = new BoxGeometry(SHORT_DIM, SHORT_DIM * 2, SHORT_DIM);
    const rand = (Math.random() + 1)/2;
    geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));

    const material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
    this.block = new Mesh(geometry, material);

    this.block.position.y = 140;
    this.alignment = "y";
  }

  render() {
    return this.block;
  }

  move(x, y, z) {
    if (x) {
      this.block.position.x += this.alignment === "z" ? x * SHORT_DIM : x * SHORT_DIM * 2;
      if (this.alignment !== "z") {
        this.alignment = this.alignment === "y" ? "x" : "y";
      }
    } else if (z) {
      this.block.position.z += this.alignment === "x" ? z * SHORT_DIM : z * SHORT_DIM * 2;
      if (this.alignment !== "x") {
        this.alignment = this.alignment === "y" ? "z" : "y";
      }
    }
    console.log(this.alignment);
  }

  rotate(xdeg, ydeg, zdeg) {
    this.block.rotation.x += xdeg;
    this.block.rotation.y += ydeg;
    this.block.rotation.z += zdeg;
  }
}

export default Block;
