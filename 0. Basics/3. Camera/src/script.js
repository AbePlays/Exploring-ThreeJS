import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Monitoring mouse
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / size.width - 0.5;
  cursor.y = -(event.clientY / size.height - 0.5);
});

// Create Scene
const scene = new THREE.Scene();

// Create Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "lime" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create object for size
const size = {
  width: 800,
  height: 600,
};

// Initialize Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
// Position the Camera
camera.position.z = 3;
camera.lookAt(cube.position);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, document.querySelector(".webgl"));

// Add damping
controls.enableDamping = true;

// Initialize Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(size.width, size.height);

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const clock = new THREE.Clock();

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();
  // cube.rotation.y = elapsedTime;

  // camera.position.x = cursor.x * 3;
  // camera.position.y = cursor.y * 3;

  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;

  // camera.lookAt(cube.position);
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
