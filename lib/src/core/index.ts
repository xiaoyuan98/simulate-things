import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Core {
  constructor() {
    this.camera = new THREE.PerspectiveCamera();
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.scene = new THREE.Scene();
    this.initScene();
    this.initCamera();
    this.initRenderer();
  }

  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.Renderer;

  initCamera = () => {
    this.camera.fov = 50;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.near = 0.01;
    this.camera.far = 500;
    this.camera.updateProjectionMatrix();
    this.camera.position.set(0, 0, 8);

    // this.camera.lookAt(100, 30, 100);

    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  };

  initScene = () => {
    // this.scene = new THREE.Scene()
  };

  initRenderer = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const el = document.getElementById("simulate-things")!;
    const exitRenderElements = el.getElementsByTagName("canvas");
    if (exitRenderElements.length) {
      for (let i = 0; i < exitRenderElements.length; ) {
        el.removeChild(exitRenderElements[i]);
      }
    }
    el.appendChild(this.renderer.domElement);

    new OrbitControls(this.camera, this.renderer.domElement);

    window.addEventListener("resize", () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  startAnimation = () => {
    const animate = () => {
      requestAnimationFrame(animate);

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  };
}
