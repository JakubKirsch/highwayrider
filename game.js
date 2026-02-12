import * as THREE from 'three';

function createRoad() {
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x374151 });
  road = new THREE.Mesh(new THREE.PlaneGeometry(20, 200), roadMat);
  road.rotation.x = -Math.PI / 2;
  road.position.z = -80;
  scene.add(road);
}

function animate() {
  requestAnimationFrame(animate);

  // ovládání
  if (keys["a"]) player.position.x -= 0.15;
  if (keys["d"]) player.position.x += 0.15;
  if (keys["w"]) player.position.z -= 0.3;
  if (keys["s"]) player.position.z += 0.2;

  // omezení pruhů
  player.position.x = Math.max(-4, Math.min(4, player.position.x));

  // natáčení kol
  player.wheels.forEach(w => w.rotation.x += 0.3);

  // kamera sleduje hráče
  camera.position.z = player.position.z + 8;
  camera.position.x += (player.position.x - camera.position.x) * 0.05;
  camera.lookAt(player.position);

  updateEnemies();

  // počítání kol
  if (player.position.z < -100) {
    laps++;
    player.position.z = 0;
    console.log("🏁 Kolo:", laps);
  }

  renderer.render(scene, camera);
}
