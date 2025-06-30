function calculateTotalPower(...devices) {
  let total = 0;
  devices.forEach(device => {
    if (device.isPluggedIn) {
      total += device.power;
    }
  });
  return total;
}

console.log(`Общая потребляемая мощность: ${calculateTotalPower(myPC, myLamp)} Вт`);
