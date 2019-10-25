const Temp = (() => {
  const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

  const toFahrenheit = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * (9 / 5) + 32);
  };

  const currentTemp = (kelvin, unit) => {
    return (unit === 'f') ? toFahrenheit(kelvin) : toCelsius(kelvin);
  };

  return { toCelsius, toFahrenheit, currentTemp };
})();

export default Temp;
