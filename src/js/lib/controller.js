import Temp from './temperatureUtil';

const Controller = (() => {
  let tempUnit = Temp.TempUnits.CELSIUS;

  const getSelectedTempUnit = () => tempUnit;

  const setSelectedTempUnit = (checkBoxValue) => {
    if (checkBoxValue === true) {
      tempUnit = Temp.TempUnits.CELSIUS;
    } else {
      tempUnit = Temp.TempUnits.FAHERNHEIT;
    }
  };

  return { getSelectedTempUnit, setSelectedTempUnit };
})();

export default Controller;
