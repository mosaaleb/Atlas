import Controller from './controller';

const UI = (() => {
  const checkBoxTempUnit = document.getElementById('myonoffswitch');

  const init = () => {
    checkBoxTempUnit.addEventListener('click', () => {
      const isChecked = checkBoxTempUnit.checked === true;
      Controller.setSelectedTempUnit(isChecked);
      // loadWeatherData();
    });
  };

  return { init };
})();

export default UI;
