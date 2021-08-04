function AppConfig(
  $httpProvider, 
  $stateProvider, 
  $locationProvider, 
  $urlRouterProvider,

  $logProvider,
  $mdGestureProvider,
  $mdThemingProvider, 
  $mdIconProvider) {
  'ngInject';

  $logProvider.debugEnabled(false);
  
  // Handle ngMaterial Mobile Gestures
  $mdGestureProvider.skipClickHijack();
  // Configure Angular Material Theme
  $mdThemingProvider.theme('weatherTheme')
    .primaryPalette('blue-grey', {
        'default': '700',
    })
    .accentPalette('red', {
        'default': '900',
    })
    .warnPalette('indigo')
    .backgroundPalette('grey')
    .dark();

  $mdThemingProvider.setDefaultTheme('weatherTheme');

  // Configure Material Icons
  
  $mdIconProvider
    // Weather Icons
    //0	tornado
    .icon('weather-icon-0', 'images/weather-icons/wi-tornado.svg')
    // 1	tropical storm
    .icon('weather-icon-1', 'images/weather-icons/wi-hurricane.svg')
    // 2	hurricane
    .icon('weather-icon-2', 'images/weather-icons/wi-hurricane.svg')
    // 3	severe thunderstorms
    .icon('weather-icon-3', 'images/weather-icons/wi-thunderstorm.svg')
    // 4	thunderstorms
    .icon('weather-icon-4', 'images/weather-icons/wi-thunderstorm.svg')
    // 5	mixed rain and snow
    .icon('weather-icon-5', 'images/weather-icons/wi-rain-mix.svg')
    // 6	mixed rain and sleet
    .icon('weather-icon-6', 'images/weather-icons/wi-rain-mix.svg')
    // 7	mixed snow and sleet
    .icon('weather-icon-7', 'images/weather-icons/wi-rain-mix.svg')
    // 8	freezing drizzle
    .icon('weather-icon-8', 'images/weather-icons/wi-sprinkle.svg')
    // 9	drizzle
    .icon('weather-icon-9', 'images/weather-icons/wi-sprinkle.svg')
    // 10	freezing rain
    .icon('weather-icon-10', 'images/weather-icons/wi-rain.svg')
    // 11	showers
    .icon('weather-icon-11', 'images/weather-icons/wi-showers.svg')
    // 12	showers
    .icon('weather-icon-12', 'images/weather-icons/wi-showers.svg')
    // 13	snow flurries
    .icon('weather-icon-13', 'images/weather-icons/wi-snow.svg')
    // 14	light snow showers
    .icon('weather-icon-14', 'images/weather-icons/wi-snow.svg')
    // 15	blowing snow
    .icon('weather-icon-15', 'images/weather-icons/wi-snow-wind.svg')
    // 16	snow
    .icon('weather-icon-16', 'images/weather-icons/wi-snow.svg')
    // 17	hail
    .icon('weather-icon-17', 'images/weather-icons/wi-hail.svg')
    // 18	sleet
    .icon('weather-icon-18', 'images/weather-icons/wi-sleet.svg')
    // 19	dust
    .icon('weather-icon-19', 'images/weather-icons/wi-dust.svg')
    // 20	foggy
    .icon('weather-icon-20', 'images/weather-icons/wi-fog.svg')
    // 21	haze
    .icon('weather-icon-21', 'images/weather-icons/wi-day-haze.svg')
    // 22	smoky
    .icon('weather-icon-22', 'images/weather-icons/wi-smoke.svg')
    // 23	blustery
    .icon('weather-icon-23', 'images/weather-icons/wi-windy.svg')
    // 24	windy
    .icon('weather-icon-24', 'images/weather-icons/wi-windy.svg')
    // 25	cold
    .icon('weather-icon-25', 'images/weather-icons/wi-snowflake-cold.svg')
    // 26	cloudy
    .icon('weather-icon-26', 'images/weather-icons/wi-cloudy.svg')
    // 27	mostly cloudy (night)
    .icon('weather-icon-27', 'images/weather-icons/wi-night-alt-cloudy.svg')
    // 28	mostly cloudy (day)
    .icon('weather-icon-28', 'images/weather-icons/wi-day-cloudy.svg')
    // 29	partly cloudy (night)
    .icon('weather-icon-29', 'images/weather-icons/wi-night-alt-cloudy-high.svg')
    // 30	partly cloudy (day)
    .icon('weather-icon-30', 'images/weather-icons/wi-day-cloudy-high.svg')
    // 31	clear (night)
    .icon('weather-icon-31', 'images/weather-icons/wi-night-clear.svg')
    // 32	sunny
    .icon('weather-icon-32', 'images/weather-icons/wi-day-sunny.svg')
    // 33	fair (night)
    .icon('weather-icon-33', 'images/weather-icons/wi-night-alt-cloudy-high.svg')
    // 34	fair (day)
    .icon('weather-icon-34', 'images/weather-icons/wi-day-cloudy-high.svg')
    // 35	mixed rain and hail
    .icon('weather-icon-35', 'images/weather-icons/wi-rain-mix.svg')
    // 36	hot
    .icon('weather-icon-36', 'images/weather-icons/wi-hot.svg')
    // 37	isolated thunderstorms
    .icon('weather-icon-37', 'images/weather-icons/wi-thunderstorm.svg')
    // 38	scattered thunderstorms
    .icon('weather-icon-38', 'images/weather-icons/wi-thunderstorm.svg')
    // 39	scattered thunderstorms
    .icon('weather-icon-39', 'images/weather-icons/wi-thunderstorm.svg')
    // 40	scattered showers
    .icon('weather-icon-40', 'images/weather-icons/wi-showers.svg')
    // 41	heavy snow
    .icon('weather-icon-41', 'images/weather-icons/wi-snow-wind.svg')
    // 42	scattered snow showers
    .icon('weather-icon-42', 'images/weather-icons/wi-snow.svg')
    // 43	heavy snow
    .icon('weather-icon-43', 'images/weather-icons/wi-snow-wind.svg')
    // 44	partly cloudy
    .icon('weather-icon-44', 'images/weather-icons/wi-cloud.svg')
    // 45	thundershowers
    .icon('weather-icon-45', 'images/weather-icons/wi-thunderstorm.svg')
    // 46	snow showers
    .icon('weather-icon-46', 'images/weather-icons/wi-snow.svg')
    // 47	isolated thundershowers
    .icon('weather-icon-47', 'images/weather-icons/wi-thunderstorm.svg')
    
    // App Icons
    .icon('search', 'images/material-design-icons/ic_search_24px.svg')
    .icon('app_icon', 'images/weather-icons/wi-day-cloudy.svg');

  //*/
  
  /*
  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');
  //*/

}

export default AppConfig;
