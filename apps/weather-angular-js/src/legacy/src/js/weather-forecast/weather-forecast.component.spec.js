import mockData from '../../specs/mockData';

describe('WeatherForecast', function() {
    let controller, weatherState;

    beforeEach(angular.mock.module('app.services'));
    beforeEach(angular.mock.module('app.layout'));

    beforeEach(inject(($componentController, _weatherState_) => {
        weatherState = _weatherState_;
        controller = $componentController('weatherForecast',
            null, {});
    }));

    it('should start with injected weatherState service', () => {
        expect(controller.weatherState).toBeDefined();
    });
    it('should start with a default isLoading value = false', () => {
        expect(controller.isLoading).toEqual(false);
    });
    it('should start with a default currentForecast value = []', () => {
        expect(controller.currentForecast).toEqual([]);
    });
    it('should set isLoading = false when "loadWeather" event is triggered', () => {
        expect(controller.isLoading).toEqual(false);
        controller.$onInit();
        weatherState.loadWeather();
        expect(controller.isLoading).toEqual(true);
    });
    it('should set currentWeather when "updateCurrentForecast" event is triggered', () => {
        expect(controller.currentForecast).toEqual([]);
        controller.$onInit();
        weatherState.updateCurrentForecast(mockData.currentForecast);
        expect(controller.currentForecast).toEqual(mockData.currentForecast);
    });

});
