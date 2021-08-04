class yahooWeather {
    constructor ($log, $http) {
        this._$log = $log;
        this._$http = $http;
    }
    getWeatherByCity (city) {
        this._$log.debug('yahooWeather getWeatherByCity() > ', city);
        return this._$http({
            method: 'GET',
            params: {
                q: `select * from weather.forecast 
                    where woeid in 
                    (select woeid   from geo.places(1) 
                                    where text="` + city + `")`,
                format: 'json',
                env: 'store://datatables.org/alltableswithkeys',
            },
            url: `https://query.yahooapis.com/v1/public/yql`,
            cache: false,
        });
    }
    getWeatherIcon (code) {
        var weatherIcon = 'weather-icon-0'
        if (!isNaN(code)) {
            weatherIcon = 'weather-icon-' + code;
        }
        return weatherIcon;
    }
}

yahooWeather.$inject = ['$log', '$http'];

export default yahooWeather;
