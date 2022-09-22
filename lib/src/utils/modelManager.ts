import * as THREE from "three";

interface Model {
  name: string;
  imgSrc: string;
  mesh: THREE.Mesh;
}

export default class ModelManager {
  modelList: any[] = [];

  constructor() {
    this.initLocalModel();
  }
  initLocalModel() {
    const model:any = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        side: THREE.BackSide,
        opacity: 0.5,
      })
    );
    this.modelList.push(model);
  }
  getModels() {
    return this.modelList
  }
  importModel() {}
}
