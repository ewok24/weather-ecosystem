import mockData from '../../specs/mockData';

describe('weatherState', function() {
    let service, customEvents;    
    beforeEach(() => {
        angular.mock.module('app.services');
    });
    beforeEach(inject((_yahooWeather_) => {
        service = _yahooWeather_;
    }));

    it('should start with injected _$http service', () => {
        expect(service._$http).toBeDefined();
    });
    
    it(': getWeatherIcon should return weather-icon-#', () => {
        expect(service.getWeatherIcon(1)).toEqual(
            'weather-icon-1');
    });

    it(': getWeatherIcon should return weather-icon-0 if code isNaN', () => {
        expect(service.getWeatherIcon('NaN')).toEqual(
            'weather-icon-0');
    });

});
