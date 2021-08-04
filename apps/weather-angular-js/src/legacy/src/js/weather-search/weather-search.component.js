class WeatherSearchCtrl {
    constructor($log, weatherActions) {
      'ngInject';
      this._$log = $log;
      this.weatherActions = weatherActions;
    }
    searchByCity (search) {
        this._$log.debug('WeatherSearchCtrl search() > city:', search);
        this.weatherActions.getWeatherByCity(search);
    }
  }
  
  let WeatherSearch = {
    bindings: {},
    controller: WeatherSearchCtrl,
    controllerAs: 'vm',
    templateUrl: 'weather-search/weather-search.html'
  };
  
  export default WeatherSearch;
  