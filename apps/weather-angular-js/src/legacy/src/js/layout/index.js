import angular from 'angular';

let layoutModule = angular.module('app.layout', []);

import AppHeader from './header.component';
layoutModule.component('appHeader', AppHeader);

// Weather Search Components
import WeatherSearch from '../weather-search/weather-search.component';
layoutModule.component('weatherSearch', WeatherSearch);
import InputForm from '../components/input-form.component';
layoutModule.component('inputForm', InputForm);

// Current Weather Visualization Components
import CurrentWeather from '../current-weather/current-weather.component';
layoutModule.component('currentWeather', CurrentWeather);
import WeatherLg from '../components/weather-lg.component';
layoutModule.component('weatherLg', WeatherLg);

// Weather Forecast Visualization Components
import WeatherForecast from '../weather-forecast/weather-forecast.component';
layoutModule.component('weatherForecast', WeatherForecast);
import WeatherSm from '../components/weather-sm.component';
layoutModule.component('weatherSm', WeatherSm);

export default layoutModule;
