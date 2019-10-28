import Temp from './temperatureUtil';
import Controller from './controller';

const View = (() => {
  const city = document.querySelector('#city');
  const humidity = document.querySelector('#humidity');
  const pressure = document.querySelector('#pressure');
  const windSpeed = document.querySelector('#wind-speed');
  const cloudValue = document.querySelector('#cloud-value');
  const currentDate = document.querySelector('#date');
  const temperature = document.querySelector('#temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const weatherCondition = document.querySelector('#weather-condition');

  const receive = (weatherData) => {
    const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const unit = Controller.getSelectedTempUnit();

    city.textContent = weatherData.name;
    weatherIcon.src = iconUrl;
    weatherIcon.height = '200';
    pressure.textContent = weatherData.main.pressure;
    humidity.textContent = weatherData.main.humidity;
    windSpeed.textContent = weatherData.wind.speed;
    cloudValue.textContent = weatherData.clouds.all;
    currentDate.textContent = new Date(Number(weatherData.dt) * 1000).toDateString();
    temperature.textContent = Temp.currentTemp(weatherData.main.temp, unit);
    weatherCondition.textContent = weatherData.weather[0].description;
  };

  return { receive };
})();

export default View;
