import Temp from './temperatureUtil';

const View = (() => {
  const temperature = document.querySelector('#temp');
  const city = document.querySelector('#city');
  const weatherIcon = document.querySelector('#weather-icon');
  const weatherCondition = document.querySelector('#weather-condition');
  const humidity = document.querySelector('#humidity');
  const pressure = document.querySelector('#pressure');
  const cloudValue = document.querySelector('#cloud-value');
  const windSpeed = document.querySelector('#wind-speed');

  const update = (weatherData) => {
    const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    temperature.textContent = Temp.toCelsius(weatherData.main.temp);
    city.textContent = weatherData.name;
    weatherIcon.src = iconUrl;
    weatherIcon.height = '200';
    weatherCondition.textContent = weatherData.weather[0].description;
    humidity.textContent = weatherData.main.humidity;
    pressure.textContent = weatherData.main.pressure;
    cloudValue.textContent = weatherData.clouds.all;
    windSpeed.textContent = weatherData.wind.speed;
  };

  return { update };
})();

export default View;
