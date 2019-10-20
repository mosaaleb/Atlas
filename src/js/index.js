import 'webpack-icons-installer';
import '../css/main.css';

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const getURL = (url) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';

  request.onload = () => {
    resolve(request.response);
  };

  request.onerror = () => {
    reject(Error('There was a network error'));
  };

  request.responseType = 'json';
  request.send();
});


getURL(requestURL).then((data) => {
  const header = document.querySelector('#test header');
  const textElement = document.createElement('p');
  textElement.textContent = data.squadName;
  header.appendChild(textElement);
});
