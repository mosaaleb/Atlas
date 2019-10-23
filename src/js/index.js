import 'webpack-icons-installer';
import '../css/main.css';
import APIService from './lib/apiService';
import View from './lib/view';

const weatherApiEndPoint = 'http://api.openweathermap.org/data/2.5/weather?q=Cairo,eg&APPID=0c63e66e39bfd78722433b4fbbd6c19b';

const loadWeatherData = (endpoint) => {
  APIService.getWeatherData(endpoint)
    .then((weatherData) => {
      View.update(weatherData);
    });
};

loadWeatherData(weatherApiEndPoint);
