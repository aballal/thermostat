describe('Thermostat', function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat;
  });

  describe('constructor', function () {
    it('starts at 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });

    it('starts in power saving mode', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('power saving mode can be turned', function () {
    beforeEach(function() {
      thermostat.togglePowerSavingMode(); //On -> Off
    });

    it('off', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('back on', function() {
      thermostat.togglePowerSavingMode(); //Off -> On
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('the temperature can be increased', function() {
    it('in steps of 1 degree', function() {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('up to a maximum of 25 degrees when PSM is on', function() {
      for(var i = 1; i <= 6; i++) thermostat.up();
      expect(thermostat.getTemperature()).toEqual(25);
    });

    it('up to a maximum of 32 degrees when PSM is off', function() {
      thermostat.togglePowerSavingMode();
      for(var i = 1; i <= 13; i++) thermostat.up();
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('the temperature can be decreased', function() {
    it('in steps of 1 degree', function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });

    it('up to a minimum of 10 degrees', function() {
      for(var i = 1; i <= 11; i++) thermostat.down();
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  it('the temperature can be reset', function() {
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('tells the current energy usage is', function() {
    it('low when temperature is < 18', function() {
      for(var i = 1; i <= 3; i++) thermostat.down();
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('medium when temperature is >= 18 and < 25', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('high when temperature is >= 25', function() {
      for(var i = 1; i <= 5; i++) thermostat.up();
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
