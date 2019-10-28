import APIService from './apiService';
import LocationApi from './locationApi';
import View from './view';

const WeatherApi = (() => {
  const appId = '0c63e66e39bfd78722433b4fbbd6c19b';
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

  const loadWeatherData = () => {
    LocationApi.loadCityData()
      .then((cityData) => {
        const { city } = cityData;
        const weatherApiEndPoint = `${baseURL}?q=${city}&APPID=${appId}`;
        return APIService.getData(weatherApiEndPoint);
      }).then((weatherData) => {
        View.receive(weatherData);
      }).catch(() => {
        // error handling
      });
  };

  return { loadWeatherData };
})();

export default WeatherApi;
