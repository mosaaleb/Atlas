const APIService = (() => {
  const getWeatherData = (weatherApiEndPoint) => new Promise((resolve, reject) => {
    fetch(weatherApiEndPoint)
      .then((res) => {
        res.json().then((data) => {
          resolve(data);
        });
      }).catch((error) => {
        reject(Error(error));
      });
  });

  return { getWeatherData };
})();

export default APIService;
