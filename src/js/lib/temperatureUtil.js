const Temp = (() => {
  const TempUnits = {
    CELSIUS: 'c',
    FAHERNHEIT: 'f'
  };

  let activeTempUnit = TempUnits.CELSIUS;

  const setActiveTempUnit = (isCelsuis) => {
    activeTempUnit = (isCelsuis === true) ? TempUnits.CELSIUS : TempUnits.FAHERNHEIT;
  };

  const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

  const toFahrenheit = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * (9 / 5) + 32);
  };

  const currentTemp = (kelvin) => {
    if (activeTempUnit === TempUnits.FAHERNHEIT) {
      return toFahrenheit(kelvin);
    }
    return toCelsius(kelvin);
  };

  return { currentTemp, TempUnits, setActiveTempUnit };
})();

export default Temp;
