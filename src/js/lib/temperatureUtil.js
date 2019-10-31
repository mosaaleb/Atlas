const Temp = (() => {
  const TempUnits = {
    CELSIUS: 'c',
    FAHRENHEIT: 'f'
  };

  let activeTempUnit = TempUnits.CELSIUS;

  const setActiveTempUnit = (isCelsuis) => {
    activeTempUnit = (isCelsuis === true) ? TempUnits.CELSIUS : TempUnits.FAHRENHEIT;
  };

  const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

  const toFahrenheit = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * (9 / 5) + 32);
  };

  const currentTemp = (kelvin) => {
    if (activeTempUnit === TempUnits.FAHRENHEIT) {
      return toFahrenheit(kelvin);
    }
    return toCelsius(kelvin);
  };
  // TODO: check values
  const toFah = (celsuis) => Math.round((celsuis - 32) * (5 / 9));

  const toCel = (fahrenheit) => Math.round(fahrenheit * (9 / 5) + 32);

  return {
    currentTemp, TempUnits, setActiveTempUnit, toFah, toCel
  };
})();

export default Temp;
