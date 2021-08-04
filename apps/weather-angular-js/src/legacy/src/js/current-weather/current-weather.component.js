class CurrentWeatherCtrl {
  constructor($log, weatherState) {
    'ngInject';
    this._$log = $log;
    this.weatherState = weatherState;
    this.isLoading = false;
    this.currentWeather = {};
  }
  $onInit () {
    //this._$log.debug('CurrentWeatherCtrl > this', this);
    // Setup State Listeners
    this.weatherState.on('loadWeather', () => {
      this._$log.debug('CurrentWeatherCtrl on.loadWeather');
      this.isLoading = true;
    });
    this.weatherState.on('updateCurrentWeather', (weather) => {
      this.isLoading = false;
      this._$log.debug('CurrentWeatherCtrl on.updateCurrentWeather > weather', weather);
      this.currentWeather = weather;
    });
  }
  $onDestroy() {
    // Deregister State Listeners
    this._$log.debug('CurrentWeatherCtrl $onDestroy > deregister all listeners');
    this.weatherState.deregister('updateCurrentWeather');
  }
}

let CurrentWeather = {
  bindings: {},
  controller: CurrentWeatherCtrl,
  controllerAs: 'vm',
  templateUrl: 'current-weather/current-weather.html'
};

export default CurrentWeather;
