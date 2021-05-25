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

// Render the scene
renderer.render(scene, camera);
