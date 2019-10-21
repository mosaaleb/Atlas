const APIService = (() => {
  const getWeatherData = (weatherApiEndPoint) => new Promise((resolve, reject) => {
    fetch(weatherApiEndPoint)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(Error(error));
      });
  });

  return { getWeatherData };
})();

export default APIService;
