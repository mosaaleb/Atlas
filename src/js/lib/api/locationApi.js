import APIService from './apiService';

const LocationApi = (() => {
  const appId = 'at_fufvD7JzW7vgJA7rJGY74D1PuYzyy';
  const baseURL = 'https://geoipify.whoisxmlapi.com/api';
  const cityApiEndPoint = `${baseURL}/v1?apiKey=${appId}`;

  const loadCityData = () => new Promise((resolve) => {
    APIService.getData(cityApiEndPoint)
      .then((cityData) => {
        resolve(cityData.location);
      })
      .catch(() => {
        resolve({ city: 'London' });
      });
  });

  return { loadCityData };
})();

export default LocationApi;
