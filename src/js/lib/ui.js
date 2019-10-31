import View from './view';
import WeatherApi from './api/weatherApi';
import Temp from './temperatureUtil';

const UI = (() => {
  const searchInput = document.getElementById('search');
  const closeMessage = document.getElementById('close-message');
  const checkBoxTempUnit = document.getElementById('switch');

  const init = () => {
    checkBoxTempUnit.addEventListener('click', () => {
      const isCelsuis = checkBoxTempUnit.checked === false;
      Temp.setActiveTempUnit(isCelsuis);
      View.changeTempUnit(isCelsuis);
    });
    closeMessage.addEventListener('click', View.hideMessage);
    searchInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        View.showPreloader();
        WeatherApi.loadWeatherData(searchInput.value);
        searchInput.value = '';
      }
    });
  };

  return { init };
})();

export default UI;
