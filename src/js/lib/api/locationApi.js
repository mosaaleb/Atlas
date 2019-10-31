import APIService from './apiService';

const LocationApi = (() => {
  const appId = '3b0876ed-be58-4577-b790-bb73bd1fc0eb';
  const baseURL = 'https://api.ipfind.com';
  const cityApiEndPoint = `${baseURL}/me?auth=${appId}`;

  const loadCityData = () => new Promise((resolve) => {
    APIService.getData(cityApiEndPoint)
      .then((cityData) => {
        resolve(cityData);
      })
      .catch(() => {
        resolve({ city: 'London' });
      });
  });

  return { loadCityData };
})();

export default LocationApi;
