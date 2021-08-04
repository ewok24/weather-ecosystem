import mockData from '../../specs/mockData';

describe('WeatherSearch', function() {
    let controller, weatherActions;

    beforeEach(angular.mock.module('app.services'));
    beforeEach(angular.mock.module('app.layout'));

    beforeEach(inject(($componentController, _weatherActions_) => {
        weatherActions = _weatherActions_;
        controller = $componentController('weatherSearch',
            null, {});
    }));

    it('should start with injected weatherActions service', () => {
        expect(controller.weatherActions).toBeDefined();
    });

});
