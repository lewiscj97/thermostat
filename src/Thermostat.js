class Thermostat {
  constructor() {
    this.temperature = 20;
  };

  up() {
    this.temperature += 1;
  };

  down() {
    this.temperature -= 1;
  };
};
