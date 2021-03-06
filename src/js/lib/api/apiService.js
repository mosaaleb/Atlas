const APIService = (() => {
  const getData = (ApiEndPoint) => new Promise((resolve, reject) => {
    fetch(ApiEndPoint, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(Error(error));
      });
  });

  return { getData };
})();

export default APIService;
