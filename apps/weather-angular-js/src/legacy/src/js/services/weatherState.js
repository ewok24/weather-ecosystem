class weatherState {
    constructor ($log, 
        customEvents) {
        this._$log = $log;
        this._customEvents = customEvents;
        this._currentWeather = {};
        this._currentForecast = [];
        const events = {
            loadWeather: 'loadWeather',
            updateCurrentWeather: 'updateCurrentWeather',
            updateCurrentForecast: 'updateCurrentForecast',
        };
        this._events = events;
    }
    on (event, callback) {
        this._customEvents.listen(event, callback);
    }
    deregister (event) {
        this._customEvents.deregister(event);
    }
    loadWeather () {
        this._$log.debug('weatherState loadWeather() > ', this._events.loadWeather);
        this._customEvents.send(this._events.loadWeather);
    }
    updateCurrentWeather (newWeatherState) {
        this._currentWeather = newWeatherState;
        this._$log.debug('weatherState updateCurrentWeather() > ', this._events.updateCurrentWeather, this._currentWeather);
        this._customEvents.send(this._events.updateCurrentWeather, this._currentWeather);
    }
    updateCurrentForecast (newForecastState) {
        this._currentForecast = newForecastState;
        this._$log.debug('weatherState updateCurrentForecast() > ', this._events.updateCurrentForecast, this._currentForecast);
        this._customEvents.send(this._events.updateCurrentForecast, this._currentForecast);
    }
}

weatherState.$inject = [
    '$log',
    'customEvents'];

export default weatherState;
