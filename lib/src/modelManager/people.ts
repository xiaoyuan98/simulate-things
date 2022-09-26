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
    return new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        side: THREE.BackSide,
        opacity: 0.5,
      })
    );
  }
  run() {}
}
