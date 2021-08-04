class WeatherLgCtrl {
    constructor() {
        'ngInject';
    }
}
  
let WeatherLg = {
    bindings: {
        city: '@',
        country: '@',
        icon: '@',
        temp: '@',
        unit: '@',
        condition: '@',
        date: '@',
    },
    controller: WeatherLgCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/weather-lg.html'
};

export default WeatherLg;
