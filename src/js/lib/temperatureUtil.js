const Temp = (() => {
  const TempUnits = {
    CELSIUS: 'c',
    FAHERNHEIT: 'f'
  };

  const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

  const toFahrenheit = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * (9 / 5) + 32);
  };

  const currentTemp = (kelvin, unit) => {
    if (unit === 'f') {
      return toFahrenheit(kelvin);
    }
    return toCelsius(kelvin);
  };

  return { currentTemp, TempUnits };
})();

export default Temp;
