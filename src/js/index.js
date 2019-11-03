import '../css/main.css';
import '../images/spinner.svg';
import 'webpack-icons-installer';
import UI from './lib/ui';
import WeatherApi from './lib/api/weatherApi';

UI.bindListeners();
WeatherApi.loadWeatherData();
