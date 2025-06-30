function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function () {
  this.isPluggedIn = true;
  console.log(`${this.name} включен в розетку.`);
};

ElectricalAppliance.prototype.unplug = function () {
  this.isPluggedIn = false;
  console.log(`${this.name} выключен из розетки.`);
};

function Computer(brand, power, processor) {
  this.name = `${brand} Computer`;
  this.power = power;
  this.processor = processor;
  this.isPluggedIn = false;
}
Computer.prototype = new ElectricalAppliance();

Computer.prototype.displayInfo = function () {
  console.log(`${this.name} с процессором ${this.processor}`);
};

function DeskLamp(color, power, brightnessLevel) {
  this.name = `${color} Desk Lamp`;
  this.power = power;
  this.brightnessLevel = brightnessLevel;
  this.isPluggedIn = false;
}
DeskLamp.prototype = new ElectricalAppliance();

DeskLamp.prototype.adjustBrightness = function (level) {
  this.brightnessLevel = level;
  console.log(`${this.name}: уровень яркости установлен на ${level}`);
};

const myPC = new Computer('Dell', 400, 'Intel i7');
const myLamp = new DeskLamp('Синяя', 60, 3);

myPC.plugIn();
myLamp.plugIn();
myLamp.adjustBrightness(5);
myPC.displayInfo();

// Расчет общей мощности
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