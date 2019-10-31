import View from './view';
import WeatherApi from './api/weatherApi';
import Temp from './temperatureUtil';

const UI = (() => {
  const searchInput = document.getElementById('search');
  const closeMessage = document.getElementById('close-message');
  const checkBoxTempUnit = document.getElementById('switch');
  const searchButton = document.getElementById('search-icon');

  const search = () => {
    View.hideMessage();
    View.showPreloader();
    WeatherApi.loadWeatherData(searchInput.value);
    searchInput.value = '';
  };

  const bindListeners = () => {
    checkBoxTempUnit.addEventListener('click', () => {
      const isCelsius = checkBoxTempUnit.checked === false;
      Temp.setActiveTempUnit(isCelsius);
      View.changeTempUnit(isCelsius);
    });
    closeMessage.addEventListener('click', View.hideMessage);
    searchInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        search();
      }
    });
    searchButton.addEventListener('click', search);
  };

  return { bindListeners };
})();

export default UI;
