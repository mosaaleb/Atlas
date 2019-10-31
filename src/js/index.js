// TODO: - [x] implement search feature
// TODO: - [x] validate input from search
// TODO: - [x] Preloader
// TODO: - [x] Input
// TODO: - [x] Show error messages
// TODO: - [x] Handle conversion between temp units
// TODO: - [x] Background image changed based on weather condition
// TODO: - [x] Handle the case where location api is blocked by adblock
// TODO: - [ ] Add shake effect to search button when typing

import '../css/main.css';
import '../images/spinner.svg';
import 'webpack-icons-installer';
import UI from './lib/ui';
import WeatherApi from './lib/api/weatherApi';

UI.bindListeners();
WeatherApi.loadWeatherData();
