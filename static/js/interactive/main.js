import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.IcosahedronGeometry(1, 2)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const texture = new THREE.TextureLoader().load('/textures/test.jpg')
const sphere = new THREE.Mesh(geometry, material)
sphere.material.map = texture   
scene.add(sphere)


const controls = new OrbitControls(camera, renderer.domElement)

camera.position.z = 5

const animate = function () {
  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)
