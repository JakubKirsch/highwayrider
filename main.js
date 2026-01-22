let scene, camera, renderer;
let player, road, enemies = [];
let keys = {};
let laps = 0;
let raining = true;
let night = true;

function startGame(type) {
  document.getElementById("menu").style.display = "none";

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  if (night) scene.background = new THREE.Color(0x020617);
  else scene.background = new THREE.Color(0x87ceeb);

  createLights();
  createRoad();
  player = createCar(type, 0, 0, true);

  spawnEnemies();
  if (raining) createRain();

  animate();
}

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);
