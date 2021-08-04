import angular from 'angular';

let servicesModule = angular.module('app.services', []);

// Application SSOT
import AppStore from './appStore';
servicesModule.service('appStore', AppStore);
// Middleware / APIs
import YahooWeather from './yahooWeather';
servicesModule.service('yahooWeather', YahooWeather);
// State Layer
import CustomEvents from './customEvents';
servicesModule.service('customEvents', CustomEvents);
import WeatherState from './weatherState';
servicesModule.service('weatherState', WeatherState);
// Action Layer
import WeatherActions from './weatherActions';
servicesModule.service('weatherActions', WeatherActions);

export default servicesModule;
