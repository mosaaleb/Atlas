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
      } else {
        searchButton.animate([
          { transform: 'translate3d(-1px, 3px, 0)' },
          { transform: 'translate3d(2px, -3px, 0)' },
          { transform: 'translate3d(-2px, 3px, 0)' },
          { transform: 'translate3d(4px, -3px, 0)' }
        ], { duration: 400 });
      }
    });
    searchButton.addEventListener('click', search);
  };

  return { bindListeners };
})();

export default UI;
