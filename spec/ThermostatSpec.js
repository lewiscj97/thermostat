describe('Thermostat', function() {
  describe('has a starting temperature', function() {
    it('of 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toBe(20);
    });
  });
});
