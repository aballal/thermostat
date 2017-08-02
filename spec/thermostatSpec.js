describe('Thermostat', function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function () {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('the temperature can be increased with up', function() {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('the temperature can be decreased with down', function() {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });
});
