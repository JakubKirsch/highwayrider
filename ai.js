function spawnEnemies() {
  for (let i = 0; i < 6; i++) {
    const lane = [-3, 0, 3][Math.floor(Math.random() * 3)];
    const type = ["sport", "truck", "police"][Math.floor(Math.random() * 3)];
    createCar(type, lane, -20 - i * 15);
  }
}

function updateEnemies() {
  enemies.forEach(e => {
    e.position.z += 0.2;

    // náhodná změna pruhu
    if (Math.random() < 0.005) {
      const target = [-3, 0, 3][Math.floor(Math.random() * 3)];
      e.position.x += (target - e.position.x) * 0.05;
    }

    // kolize
    if (Math.abs(e.position.z - player.position.z) < 2 &&
        Math.abs(e.position.x - player.position.x) < 1.5) {
      explode(player.position);
      alert("💥 CRASH!");
      location.reload();
    }
  });
}
