class WeatherForecastCtrl {
    constructor($log, weatherState) {
      'ngInject';
      this._$log = $log;
      this.weatherState = weatherState;
      this.isLoading = false;
      this.currentForecast = [];
    }
    $onInit () {
      this._$log.debug('WeatherForecastCtrl > this', this);
      // Setup State Listeners
      this.weatherState.on('loadWeather', () => {
        this._$log.debug('CurrentWeatherCtrl on.loadWeather');
        this.isLoading = true;
      });
      this.weatherState.on('updateCurrentForecast', (forecast) => {
        this.isLoading = false;
        this._$log.debug('WeatherForecastCtrl on.updateCurrentForecast > forecast', forecast);
        this.currentForecast = forecast;
      });
    }
    $onDestroy() {
      // Deregister State Listeners
      this._$log.debug('WeatherForecastCtrl $onDestroy > deregister all listeners');
      this.weatherState.deregister('updateCurrentForecast');
    }
  }
  
  let WeatherForecast = {
    bindings: {},
    controller: WeatherForecastCtrl,
    controllerAs: 'vm',
    templateUrl: 'weather-forecast/weather-forecast.html'
  };
  
  export default WeatherForecast;
  