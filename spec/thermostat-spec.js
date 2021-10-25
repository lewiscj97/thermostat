describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a starting temperature', function() {
    it('of 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('has an up function', function() {
    it('increases the temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(21);
    });
  });

  describe('has a down function', function() {
    it('decreases the temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(19);
    });

    it('does not go lower than 10', function() {
      thermostat.down(11);
      expect(thermostat.temperature).toBe(10);
    });
  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('is on by default and can be turned off', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('if on, the maximum temperature is 25', function() {
      thermostat.up(20);
      expect(thermostat.temperature).toBe(25);
    });
  });
});
