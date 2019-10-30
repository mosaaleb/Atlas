import Controller from './controller';
import View from './view';
import WeatherApi from './api/weatherApi';

const UI = (() => {
  const searchInput = document.getElementById('search');
  const closeMessage = document.getElementById('close-message');
  const checkBoxTempUnit = document.getElementById('myonoffswitch');

  const init = () => {
    checkBoxTempUnit.addEventListener('click', () => {
      const isChecked = checkBoxTempUnit.checked === true;
      Controller.setSelectedTempUnit(isChecked);
      // loadWeatherData();
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
