function DeskLamp(color, power, brightness) {
  this.name = `${color} Desk Lamp`;
  this.power = power;
  this.color = color;
  this.brightness = brightness;
  this.isPluggedIn = false;
}

DeskLamp.prototype = new ElectricalAppliance();

DeskLamp.prototype.changeBrightness = function (level) {
  this.brightness = level;
  console.log(`${this.name}: яркость установлена на уровень ${level}`);
};

function Computer(brand, power, processor) {
  this.name = `${brand} Computer`;
  this.power = power;
  this.processor = processor;
  this.isPluggedIn = false;
}

// Устанавливаем прототип
Computer.prototype = new ElectricalAppliance();

Computer.prototype.displaySpecs = function () {
  console.log(`Характеристики: ${this.name}, процессор: ${this.processor}`);
};
