import { BoxGeometry, MeshLambertMaterial, Mesh, FaceColors } from '../lib/three.min.js';

const SQUARE_DIM = 150;
const HEIGHT = 20;

class Tile {
  constructor(xPos, zPos, type) {
    this.type = type;

    const geometry = new BoxGeometry(SQUARE_DIM, HEIGHT, SQUARE_DIM);
    const rand = (Math.random() + 1)/2;
    geometry.faces.forEach(face => face.color.setHex(rand * 0xffffff));

    const material = new MeshLambertMaterial({ color: 0xffffff, vertexColors: FaceColors });
    this.tile = new Mesh(geometry, material);
    this.tile.position.x = xPos * SQUARE_DIM;
    this.tile.position.z = zPos * SQUARE_DIM;
    this.tile.position.y = -1 * HEIGHT;
  }

  render() {
    return this.tile;
  }
}

export default Tile;
