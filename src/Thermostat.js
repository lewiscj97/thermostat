class Thermostat {
  constructor() {
    this.temperature = 20;
  };

  up() {
    this.temperature += 1;
  };

  down(num = 1) {
    for(let i = 0; i < num; i++) {
      this.temperature == 10 ? this.temperature = 10 : this.temperature -= 1;
    };
  };
};
