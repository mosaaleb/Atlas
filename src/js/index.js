// TODO: get city or region from location api because sometimes the search city is not working like 'zamalek'

import '../css/main.css';
import '../images/spinner.svg';
import 'webpack-icons-installer';
import UI from './lib/ui';
import WeatherApi from './lib/api/weatherApi';

UI.bindListeners();
WeatherApi.loadWeatherData();
