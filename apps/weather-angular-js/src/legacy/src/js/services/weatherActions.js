class weatherActions {
    constructor ($log, 
        appStore, yahooWeather,
        weatherState) {
        this._$log = $log;
        this._appStore = appStore;
        this._yahooWeather = yahooWeather;
        this._weatherState = weatherState;
    }
    getWeatherByCity (city) {
        this._$log.debug('weatherActions getWeather() > city:', city);
        this._weatherState.loadWeather();
        
        this._yahooWeather.getWeatherByCity(city)
            .then((response) => {
                this._$log.debug('weatherActions getWeather() > response.data', response.data);
                var results = response.data.query.results.channel;
                var currentWeather = {
                    city: results.location.city,
                    country: results.location.country,
                    icon: this._yahooWeather.getWeatherIcon(results.item.condition.code),
                    temp: results.item.condition.temp,
                    tempUnit: results.units.temperature,
                    condition: results.item.condition.text,
                    date: results.item.condition.date,
                };
                
                this._$log.debug('weatherActions getWeather() > currentWeather', currentWeather);
                var newWeatherState = this._appStore.setCurrentWeather(currentWeather);
                this._weatherState.updateCurrentWeather(newWeatherState);

                var currentForecast = results.item.forecast.map((item) => {
                    item.icon = this._yahooWeather.getWeatherIcon(item.code);
                    return item;
                });

                this._$log.debug('weatherActions getWeather() > currentForecast', currentForecast);
                var newForecastState = this._appStore.setForecast(currentForecast);
                this._weatherState.updateCurrentForecast(newForecastState);
            });
    }
}

weatherActions.$inject = [
    '$log', 
    'appStore', 'yahooWeather',
    'weatherState'];

export default weatherActions;
