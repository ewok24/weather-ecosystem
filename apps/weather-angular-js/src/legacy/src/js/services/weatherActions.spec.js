import mockData from '../../specs/mockData';

describe('weatherActions', function() {
    let service, weatherState, $httpBackend;    
    beforeEach(() => {
        angular.mock.module('app.services');
    });
    beforeEach(inject((_weatherActions_, _weatherState_, _$httpBackend_) => {
        service = _weatherActions_;
        weatherState = _weatherState_;
        $httpBackend = _$httpBackend_;
    }));

    it('should start with injected appStore service', () => {
        expect(service._appStore).toBeDefined();
    });
    it('should start with injected yahooWeather service', () => {
        expect(service._yahooWeather).toBeDefined();
    });
    it('should start with injected weatherState service', () => {
        expect(service._weatherState).toBeDefined();
    });

    it(': getWeatherByCity should trigger "loadWeather" event', () => {
        weatherState.on('loadWeather', () => {
            expect(service.getWeatherByCity).toBeDefined();
        });
        service.getWeatherByCity();
    });
    
});
