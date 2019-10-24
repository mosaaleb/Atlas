// TODO: - [ ] implement search feature
// TODO: - [ ] validate input from search


import 'webpack-icons-installer';
import '../css/main.css';
import APIService from './lib/apiService';
import View from './lib/view';

const AppId = '0c63e66e39bfd78722433b4fbbd6c19b';
const defaultSearchCity = 'Cairo';
let weatherApiEndPoint = `http://api.openweathermap.org/data/2.5/weather?q=${defaultSearchCity}&APPID=${AppId}`;

const setWeatherApiEndPoint = (city) => {
  weatherApiEndPoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${AppId}`;
};

const loadWeatherData = (endpoint) => {
  APIService.getWeatherData(endpoint)
    .then((weatherData) => {
      View.update(weatherData);
    });
};

loadWeatherData(weatherApiEndPoint);

// UI implementation
const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    setWeatherApiEndPoint(searchInput.value);
    loadWeatherData(weatherApiEndPoint);
    searchInput.value.reset();
  }
});
