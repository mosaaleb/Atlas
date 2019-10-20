import Temp from './temperatureUtil';

const View = (() => {
  const temperature = document.querySelector('#temp');
  const city = document.querySelector('#city');
  const weatherConditionIcon = document.querySelector('#weather-icon');
  const weatherCondition = document.querySelector('#weather-condition');
  const humidity = document.querySelector('#humidity');
  const pressure = document.querySelector('#pressure');
  const cloudValue = document.querySelector('#cloud-value');
  const windSpeed = document.querySelector('#wind-speed');

  const update = (weatherData) => {
    temperature.textContent = Temp.toCelsius(weatherData.main.temp);
    city.textContent = weatherData.name;
    weatherConditionIcon.textContent = weatherData.weather.icon;
    weatherCondition.textContent = weatherData.weather.description;
    humidity.textContent = weatherData.main.humidity;
    pressure.textContent = weatherData.main.pressure;
    cloudValue.textContent = weatherData.clouds.all;
    windSpeed.textContent = weatherData.wind.speed;
  };

  return { update };
})();

export default View;
