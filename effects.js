function createLights() {
  const ambient = new THREE.AmbientLight(0xffffff, night ? 0.3 : 0.8);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffffff, 1);
  sun.position.set(5, 10, 5);
  scene.add(sun);
}

function createRain() {
  const rainGeo = new THREE.BufferGeometry();
  const drops = [];

  for (let i = 0; i < 1000; i++) {
    drops.push(
      Math.random() * 40 - 20,
      Math.random() * 20,
      Math.random() * 40 - 20
    );
  }

  rainGeo.setAttribute("position", new THREE.Float32BufferAttribute(drops, 3));
  const rainMat = new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.1 });
  rain = new THREE.Points(rainGeo, rainMat);
  scene.add(rain);
}

function explode(pos) {
  const boom = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xf97316 })
  );
  boom.position.copy(pos);
  scene.add(boom);

  setTimeout(() => scene.remove(boom), 300);
}
