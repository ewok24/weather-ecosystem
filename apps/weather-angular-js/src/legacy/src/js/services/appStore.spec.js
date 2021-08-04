import mockData from '../../specs/mockData';

describe('weatherState', function() {
    let service;    
    beforeEach(() => {
        angular.mock.module('app.services');
    });
    beforeEach(inject((_appStore_) => {
        service = _appStore_;
    }));
    it('should start with a default _currentWeather value', () => {
        expect(service._currentWeather).toEqual(mockData.currentWeather);
    });
    it('should start with a default _forecast value', () => {
        expect(service._forecast).toEqual(mockData.currentForecast);
    });
    it(': getCurrentWeather should return a COPY of _currentWeather', () => {
        var copy = service.getCurrentWeather();
        expect(copy).toEqual(mockData.currentWeather);
        service._currentWeather.city = 'Melbourne';
        expect(copy).toEqual(mockData.currentWeather);
    });
    it(': setCurrentWeather should only replace _currentWeather if newWeatherObject is valid', () => {
        service.setCurrentWeather(mockData.newCurrentWeather);
        expect(service._currentWeather).toEqual(mockData.newCurrentWeather);

        service.setCurrentWeather({});
        expect(service._currentWeather).toEqual(mockData.newCurrentWeather);
    });

    it(': getForecast should return a COPY of _forecast', () => {
        var copy = service.getForecast();
        expect(copy).toEqual(mockData.currentForecast);
        service._forecast[0].city = 'Melbourne';
        expect(copy).toEqual(mockData.currentForecast);
    });
    it(': setCurrentWeather should only replace _forecast if newForecastArray is valid', () => {
        service.setForecast(mockData.currentForecast);
        expect(service._forecast).toEqual(mockData.currentForecast);

        service.setForecast('temp');
        expect(service._forecast).toEqual(mockData.currentForecast);
    });

});
