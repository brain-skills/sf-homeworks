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