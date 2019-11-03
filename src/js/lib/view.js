import Temp from './temperatureUtil';

const View = (() => {
  const city = document.querySelector('#city');
  const errorBox = document.getElementById('error');
  const humidity = document.querySelector('#humidity');
  const pressure = document.querySelector('#pressure');
  const preloader = document.getElementById('preloader');
  const windSpeed = document.querySelector('#wind-speed');
  const cloudValue = document.querySelector('#cloud-value');
  const heroSection = document.querySelector('#hero');
  const currentDate = document.querySelector('#date');
  const temperature = document.querySelector('#temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const weatherCondition = document.querySelector('#weather-condition');

  const weatherImages = {
    Ash: 'mist.jpg',
    Fog: 'mist.jpg',
    Mist: 'mist.jpg',
    Rain: 'rainy.jpg',
    Snow: 'snow.jpg',
    Haze: 'mist.jpg',
    Dust: 'mist.jpg',
    Sand: 'mist.jpg',
    Smoke: 'mist.jpg',
    Clear: 'clear.jpeg',
    Squall: 'snow.jpg',
    Clouds: 'cloudy.jpg',
    Tornado: 'tornado.jpg',
    Drizzle: 'rainy.jpg',
    Thunderstorm: 'thunderstorm.jpg'
  };

  const receive = (weatherData) => {
    const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const currentTemp = Temp.currentTemp(weatherData.main.temp).toString();

    city.textContent = weatherData.name;
    weatherIcon.src = iconUrl;
    weatherIcon.height = '200';
    pressure.textContent = weatherData.main.pressure;
    humidity.textContent = weatherData.main.humidity;
    windSpeed.textContent = weatherData.wind.speed;
    cloudValue.textContent = weatherData.clouds.all;
    currentDate.textContent = new Date(Number(weatherData.dt) * 1000).toDateString();
    temperature.textContent = currentTemp.padStart(2, '0');
    weatherCondition.textContent = weatherData.weather[0].description;
    const mainCondition = weatherData.weather[0].main;
    import(`../../images/${weatherImages[mainCondition]}`)
      .then((image) => {
        heroSection.style.backgroundImage = `url(${image.default})`;
      });
  };

  const changeTempUnit = (isCelsiusChecked) => {
    const currentTemp = Number(temperature.textContent);
    temperature.textContent = isCelsiusChecked ? Temp.toCel(currentTemp) : Temp.toFah(currentTemp);
  };

  const hidePreloader = () => {
    preloader.classList.add('opacity-0', 'pointer-events-none');
  };

  const showPreloader = () => {
    preloader.classList.remove('opacity-0', 'pointer-events-none');
  };

  const alertMessage = (message) => {
    errorBox.firstChild.textContent = message;
    errorBox.classList.remove('invisible');
  };

  const hideMessage = () => {
    errorBox.classList.add('invisible');
  };

  return {
    receive,
    hidePreloader,
    showPreloader,
    alertMessage,
    hideMessage,
    changeTempUnit
  };
})();

export default View;
