document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#current-temperature').innerText = thermostat.temperature;
  };

  const updatePowerSavingMode = () => {
    let powerSaving = document.querySelector('#power-saving-mode-status');
    powerSaving.innerHTML = thermostat.powerSavingMode ? 'On' : 'Off';
  };

  const updateCurrentEnergyUsage = () => {
    let energyUsage = document.querySelector('#current-energy-usage-status');
    energyUsage.innerHTML = thermostat.currentEnergyUsage();
  };

  const updateThermostat = () => {
    updateTemperature();
    updatePowerSavingMode();
    updateCurrentEnergyUsage();
  }

  const thermostat = new Thermostat();
  updateThermostat();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateThermostat();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateThermostat();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.reset();
    updateThermostat();
  });

  document.querySelector('#power-saving-mode-toggle').addEventListener('click', () => {
    thermostat.togglePowerSavingMode();
    updateThermostat();
  });
});
