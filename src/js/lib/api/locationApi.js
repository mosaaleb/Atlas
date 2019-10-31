import APIService from './apiService';

const LocationApi = (() => {
  const accessKey = '34b475c51c290415bbbbd96de61fb8d0';
  const baseURL = 'http://api.ipstack.com/check';
  const cityApiEndPoint = `${baseURL}?access_key=${accessKey}`;

  const loadCityData = () => new Promise((resolve, reject) => {
    APIService.getData(cityApiEndPoint)
      .then((cityData) => {
        resolve(cityData);
      })
      .catch((error) => {
        // TODO: blocked by adblock
        reject(Error(error));
      });
  });

  return { loadCityData };
})();

export default LocationApi;
