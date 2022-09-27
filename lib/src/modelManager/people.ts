import * as THREE from "three";

export default class People {
  width: number;
  height: number;
  mesh: THREE.Mesh;
  constructor(width: number, height: number) {
    this.width = 10;
    this.height = 10;
    this.mesh = this.initPeople();
  }
  private initPeople() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    return cube;
  }
  run() {}
}
