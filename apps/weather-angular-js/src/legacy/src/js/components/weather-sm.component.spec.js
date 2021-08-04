import mockData from '../../specs/mockData';

describe('WeatherSm', function() {
    let controller;

    beforeEach(angular.mock.module('app.layout'));
    beforeEach(inject(($componentController) => {
        controller = $componentController('weatherSm',
            null, mockData.weatherSmBindings);
    }));

    it('should have mock bindings bound', () => {
        expect(controller.day).toEqual(mockData.weatherSmBindings.day);
        expect(controller.date).toEqual(mockData.weatherSmBindings.date);
        expect(controller.icon).toEqual(mockData.weatherSmBindings.icon);
        expect(controller.high).toEqual(mockData.weatherSmBindings.high);
        expect(controller.low).toEqual(mockData.weatherSmBindings.low);
        expect(controller.condition).toEqual(mockData.weatherSmBindings.condition);
    });

});
