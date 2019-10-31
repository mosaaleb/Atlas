// TODO: - [x] implement search feature
// TODO: - [x] validate input from search
// TODO: - [x] Preloader
// TODO: - [x] Input
// TODO: - [x] Show error messages
// TODO: - [ ] Background image changed based on weather condition
// document.body.style.backgroundImage = "url('img_tree.png')";
// TODO: - [ ] Handle the case where location api is blocked by adblock
// TODO: - [ ] Handle conversion between temp units

import '../css/main.css';
import '../images/spinner.svg';
import 'webpack-icons-installer';
import UI from './lib/ui';
import WeatherApi from './lib/api/weatherApi';

UI.init();
WeatherApi.loadWeatherData();
