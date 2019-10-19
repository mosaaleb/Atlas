import 'webpack-icons-installer';
import '../css/main.css';

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const getURL = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      resolve(request.response);
    };

    request.onerror = () => {
      reject(Error(request.statusText));
    };

    request.responseType = 'json';
    request.send();
  });
};

getURL(requestURL).then((data) => {
  const header = document.querySelector('#test header');
  const textElement = document.createElement('p');
  textElement.textContent = data.squadName;
  header.appendChild(textElement);
});
// catch((error) => {
//   console.log('Error is:' + error.message);
// });

// const header = document.querySelector('#test header');

// const request = new XMLHttpRequest();

// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();

// const populateHeader = (obj) => {
//   const squadName = document.createElement('h1');
//   const info = document.createElement('h2');
//   squadName.textContent = obj.squadName;
//   info.textContent = `Hometown: ${obj.homeTown} & formed in ${obj.formed}`;
//   header.append(squadName);
//   header.append(info);
// };

// request.onload = () => {
//   const superHeroes = request.response;
//   populateHeader(superHeroes);
// };

// window.onload = () => {

// };
