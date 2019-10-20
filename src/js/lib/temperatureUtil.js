const Temp = (() => {
  const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

  const toFahrenheit = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * (9 / 5) + 32);
  };

  return { toCelsius, toFahrenheit };
})();

export default Temp;
