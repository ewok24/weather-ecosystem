class WeatherSmCtrl {
    constructor() {
        'ngInject';
    }
}
    
let WeatherSm = {
    bindings: {
        day: '@',
        date: '@',
        icon: '@',
        high: '@',
        low: '@',
        condition: '@'
    },
    controller: WeatherSmCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/weather-sm.html'
};

export default WeatherSm;
