import APIService from './apiService';

const LocationApi = (() => {
  const accessKey = '34b475c51c290415bbbbd96de61fb8d0';
  const baseURL = 'http://api.ipstack.com/check';
  const cityApiEndPoint = `${baseURL}?access_key=${accessKey}`;

  const defaultCity = { city: 'Cairo' };

  const loadCityData = () => new Promise((resolve) => {
    APIService.getData(cityApiEndPoint)
      .then((cityData) => {
        resolve(cityData);
      })
      .catch(() => {
        resolve(defaultCity);
      });
  });

  return { loadCityData };
})();

export default LocationApi;
