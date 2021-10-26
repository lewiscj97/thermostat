document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    let temperature = document.querySelector('#current-temperature');
    temperature.innerText = `${thermostat.temperature}ºC`;
    if(thermostat.currentEnergyUsage() == 'low-usage') {
      temperature.style.color = '#6EA4BB';
    } else if (thermostat.currentEnergyUsage() == 'medium-usage') {
      temperature.style.color = '#323D48';
    } else {
      temperature.style.color = ' #C04C4B';
    };
  };

  const loadCurrentCityTemperature = () => {
    const temp = document.querySelector('#current-location-temperature');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=f5efac56927da98c8a2581a6d1e09d41&units=metric`)
    .then(response => response.json())
    .then(data => temp.innerText = `${data.main.temp}ºC`);
  };

  const updatePowerSavingMode = () => {
    let powerSaving = document.querySelector('#power-saving-mode-status');
    powerSaving.innerHTML = thermostat.powerSavingMode ? 'On' : 'Off';
  };

  const updateThermostat = () => {
    updateTemperature();
    updatePowerSavingMode();
  }

  const thermostat = new Thermostat();
  updateThermostat();
  loadCurrentCityTemperature();

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

  document.querySelector('#current-location').addEventListener('change', (location) => {
    const temp = document.querySelector('#current-location-temperature');
    city = location.target.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5efac56927da98c8a2581a6d1e09d41&units=metric`)
    .then(response => response.json())
    .then(data => temp.innerText = `${data.main.temp}ºC`);
  });


});
