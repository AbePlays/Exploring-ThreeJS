import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import gsap from "gsap";

const gui = new dat.GUI();
gui.hide();
const parameters = {
  color: "#ff0000",
  spin: () => {
    gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + 2 * Math.PI });
  },
};
const canvas = document.querySelector(".webgl");

// Monitoring mouse
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / size.width - 0.5;
  cursor.y = -(event.clientY / size.height - 0.5);
});

// Handle browser resizing
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
});

// Handle fullscreen
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

// Create Scene
const scene = new THREE.Scene();

// Create Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: parameters.color });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add elements to debug
// gui.add(cube.position, "y", -3, 3, 0.01);
gui.add(cube.position, "y").min(-3).max(3).step(0.01).name("elevation");
gui.add(cube, "visible");
gui.add(material, "wireframe");
gui.addColor(parameters, "color").onChange(() => {
  material.color.set(parameters.color);
});
gui.add(parameters, "spin");

// Create object for size
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Initialize Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
// Position the Camera
camera.position.z = 3;
camera.lookAt(cube.position);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);

// Add damping
controls.enableDamping = true;

// Initialize Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

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
