import * as THREE from 'three'

export default class Core {
  constructor() {
    this.camera = new THREE.PerspectiveCamera()
    this.renderer = new THREE.WebGLRenderer()
    this.scene = new THREE.Scene()
    this.initScene()
    this.initRenderer()
    this.initCamera()
  }

  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  renderer: THREE.Renderer

  initCamera = () => {
    this.camera.fov = 50
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.near = 0.01
    this.camera.far = 500
    this.camera.updateProjectionMatrix()
    this.camera.position.set(8, 50, 8)

    this.camera.lookAt(100, 30, 100)

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    })
  }

  initScene = () => {
    // this.scene = new THREE.Scene()
  }

  initRenderer = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    const el = document.getElementById('simulate-things')!
    el.appendChild(this.renderer.domElement)

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }

  startAnimation = () => {
    const animate = ( ) => {
      requestAnimationFrame( animate );

      this.renderer.render( this.scene, this.camera );
    };

    animate();
  }
}
