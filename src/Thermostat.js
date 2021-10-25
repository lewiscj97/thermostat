class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  togglePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
  };

  reset() {
    this.temperature = 20;
  };

  up(num = 1) {
    if (this.powerSavingMode == true) {
      for (let x = 0; x < num; x++) {
        this.temperature == 25 ? this.temperature = 25 : this.temperature += 1;
      };
    } else {
      for (let y = 0; y < num; y++) {
        this.temperature == 32 ? this.temperature = 32 : this.temperature += 1;
      };
    };
  };

  down(num = 1) {
    for (let i = 0; i < num; i++) {
      this.temperature == 10 ? this.temperature = 10 : this.temperature -= 1;
    };
  };
};
