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
});
