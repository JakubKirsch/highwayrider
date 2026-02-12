import * as THREE from 'three';

function createCar(type, x, z, isPlayer = false) {
  const car = new THREE.Group();

  // tělo
  let bodyColor = 0x22c55e;
  if (type === "truck") bodyColor = 0xf59e0b;
  if (type === "police") bodyColor = 0x3b82f6;

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2, 0.7, 4),
    new THREE.MeshStandardMaterial({ color: bodyColor })
  );
  body.position.y = 0.6;
  car.add(body);

  // kabina
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.6, 2),
    new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
  );
  cabin.position.set(0, 1, -0.3);
  car.add(cabin);

  // kola (uložíme pro otáčení)
  car.wheels = [];
  for (let i = -1; i <= 1; i += 2) {
    for (let j = -1; j <= 1; j += 2) {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16),
        new THREE.MeshStandardMaterial({ color: 0x020617 })
      );
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(i * 0.9, 0.3, j * 1.5);
      car.add(wheel);
      car.wheels.push(wheel);
    }
  }

  car.position.set(x, 0, z);
  scene.add(car);

  if (!isPlayer) enemies.push(car);
  return car;
}
