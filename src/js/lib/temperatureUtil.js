const Temp = (() => {
  const TempUnits = {
    CELSIUS: 'c',
    FAHRENHEIT: 'f'
  };

  let activeTempUnit = TempUnits.CELSIUS;

  const setActiveTempUnit = (isCelsius) => {
    activeTempUnit = isCelsius ? TempUnits.CELSIUS : TempUnits.FAHRENHEIT;
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

  const toCel = (fahrenheit) => Math.round((fahrenheit - 32) * (5 / 9));

  const toFah = (celsius) => Math.round(celsius * (9 / 5) + 32);

  return {
    currentTemp, TempUnits, setActiveTempUnit, toFah, toCel
  };
})();

export default Temp;
