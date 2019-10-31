import View from '../view';
import APIService from './apiService';
import LocationApi from './locationApi';

const WeatherApi = (() => {
  const appId = '0c63e66e39bfd78722433b4fbbd6c19b';
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

  const loadWeatherData = (searchedCity = null) => {
    LocationApi.loadCityData()
      .then((cityData) => {
        const city = searchedCity || cityData.city;
        const weatherApiEndPoint = `${baseURL}?q=${city}&APPID=${appId}`;
        return APIService.getData(weatherApiEndPoint);
      }).then((weatherData) => {
        View.hidePreloader();
        View.receive(weatherData);
      }).catch(() => {
        View.alertMessage('Not Found');
      });
  };

  return { loadWeatherData };
})();

export default WeatherApi;
