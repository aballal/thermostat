var Thermostat = function () {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
  this.LOW_USAGE_THRESHOLD = 18;
  this.MEDIUM_USAGE_THRESHOLD = 25;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this._powerSavingModeOn = true;
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.isAtMinimumTemperature = function() {
  return (this._temperature === this.MINIMUM_TEMPERATURE) ? true : false;
};

Thermostat.prototype.isAtMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() && this._temperature === this.MAXIMUM_TEMPERATURE_PSM_ON) return true;
  if (!this.isPowerSavingModeOn() && this._temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF) return true;
  return false;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this._powerSavingModeOn;
};

Thermostat.prototype.togglePowerSavingMode = function () {
  this._powerSavingModeOn = !this._powerSavingModeOn;
};

Thermostat.prototype.up = function () {
  if (!this.isAtMaximumTemperature()) this._temperature += 1;
};

Thermostat.prototype.down = function () {
  if (!this.isAtMinimumTemperature()) this._temperature -= 1;
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this._temperature < this.LOW_USAGE_THRESHOLD) {
    return 'low-usage';
  } else if (this._temperature < this.MEDIUM_USAGE_THRESHOLD) {
    return 'medium-usage';
  }
  return 'high-usage';
};
