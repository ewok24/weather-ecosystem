import mockData from '../../specs/mockData';

describe('CurrentWeather', function() {
    let controller, weatherState;

    beforeEach(angular.mock.module('app.services'));
    beforeEach(angular.mock.module('app.layout'));

    beforeEach(inject(($componentController, _weatherState_) => {
        weatherState = _weatherState_;
        controller = $componentController('currentWeather',
            null, {});
    }));

    it('should start with injected weatherState service', () => {
        expect(controller.weatherState).toBeDefined();
    });
    it('should start with a default isLoading value = false', () => {
        expect(controller.isLoading).toEqual(false);
    });
    it('should start with a default currentWeather value = {}', () => {
        expect(controller.currentWeather).toEqual({});
    });
    it('should set isLoading = false when "loadWeather" event is triggered', () => {
        expect(controller.isLoading).toEqual(false);
        controller.$onInit();
        weatherState.loadWeather();
        expect(controller.isLoading).toEqual(true);
    });
    it('should set currentWeather when "updateCurrentWeather" event is triggered', () => {
        expect(controller.currentWeather).toEqual({});
        controller.$onInit();
        weatherState.updateCurrentWeather(mockData.currentWeather);
        expect(controller.currentWeather).toEqual(mockData.currentWeather);
    });

});
