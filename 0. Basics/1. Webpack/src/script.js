import * as THREE from "three";

// Create Scene
const scene = new THREE.Scene();

// Create Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "lime" });
const cube = new THREE.Mesh(geometry, material);

// Position
// cube.position.x = 1;
// cube.position.y = 1;
// cube.position.z = 1;

// Change position in a single step
// cube.position.set(0.5, -0.5, 1);

// Scale
// cube.scale.x = 2;
// cube.scale.y = 2;
// cube.scale.z = 2;

// Change scale in a single step
// cube.scale.set(1.1, 1.1, 1.1);

// Rotation
// cube.rotation.reorder("YXZ");
// cube.rotation.y = 0.75 * Math.PI;
// cube.rotation.x = 0.75 * Math.PI;

// scene.add(cube);

// Create a group
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -2;
// Add object to the group
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

// Transform the group
group.position.y = 1;
group.scale.y = 1.1;
group.rotation.y = 1;

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

// Make camera look at a particular object
// camera.lookAt(cube.position);

// Initialize Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(size.width, size.height);

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Render the scene
renderer.render(scene, camera);
