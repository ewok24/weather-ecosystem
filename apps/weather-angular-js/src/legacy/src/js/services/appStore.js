class appStore {
    constructor ($log) {
        this._$log = $log;
        this._currentWeather = {};
        this._forecast = [];
        
        this.init();
    }

    init () {
        this._currentWeather = {
            city: 'Sydney',
            country: 'Australia',
            icon: 'weather-icon-0',
            temp: '28',
            tempUnit: 'F',
            condition: 'Sunny',
            date: 'Sat, 16 Dec 2017 08:00 PM CST',
        };
        this._forecast = [
            { day: 'Sat', date: 'Sat, 16 Dec 2017 08:00 PM CST', code: 0, high: '28', low: '20', condition: 'Sunny', },
            { day: 'Sun', date: 'Sun, 17 Dec 2017 08:00 PM CST', code: 0, high: '25', low: '19', condition: 'Partly Cloudy', },
            { day: 'Mon', date: 'Mon, 18 Dec 2017 08:00 PM CST', code: 0, high: '28', low: '20', condition: 'Sunny', },
            { day: 'Tue', date: 'Tue, 19 Dec 2017 08:00 PM CST', code: 0, high: '25', low: '19', condition: 'Partly Cloudy', },
            { day: 'Wed', date: 'Wed, 20 Dec 2017 08:00 PM CST', code: 0, high: '24', low: '18', condition: 'Rain', },
            { day: 'Thu', date: 'Thu, 21 Dec 2017 08:00 PM CST', code: 0, high: '24', low: '18', condition: 'Rain', },
        ];
    }
    getCurrentWeather () {
        this._$log.debug('appStore getCurrentWeather() > _currentWeather', this._currentWeather);
        return angular.copy(this._currentWeather);
    }
    setCurrentWeather (newWeatherObject) {
        if (newWeatherObject
            && newWeatherObject.city
            && newWeatherObject.country
            && newWeatherObject.icon
            && newWeatherObject.temp
            && newWeatherObject.tempUnit
            && newWeatherObject.condition
            && newWeatherObject.date) {
            this._currentWeather = newWeatherObject;
        }
        return this.getCurrentWeather();
    }
    getForecast () {
        this._$log.debug('appStore getForecast() > _forecast', this._forecast);
        return angular.copy(this._forecast);
    }
    setForecast (newForecastArray) {
        if (angular.isArray(newForecastArray)) {
            this._forecast = newForecastArray;
        }
        return this.getForecast();
    }
}

appStore.$inject = [
    '$log'];

export default appStore;
