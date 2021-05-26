import * as THREE from "three";

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
scene.add(camera);

// Initialize Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(size.width, size.height);

// Clock
const clock = new THREE.Clock();

// Animations
const tick = () => {
  // Rotate the cube
  // cube.rotation.y += 0.01;

  const elapsedTime = clock.getElapsedTime();
  // 1 Revolution per second
  // cube.rotation.y = elapsedTime * Math.PI * 2;

  // Circular Animation
  // cube.position.y = Math.sin(elapsedTime);
  // cube.position.x = Math.cos(elapsedTime);

  // Animating the camera
  camera.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(cube.position);

  // Render the scene
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
