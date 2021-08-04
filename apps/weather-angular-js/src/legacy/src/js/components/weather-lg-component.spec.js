import mockData from '../../specs/mockData';

describe('WeatherLg', function() {
    let controller;

    beforeEach(angular.mock.module('app.layout'));
    beforeEach(inject(($componentController) => {
        controller = $componentController('weatherLg',
            null, mockData.weatherLgBindings);
    }));

    it('should have mock bindings bound', () => {
        expect(controller.city).toEqual(mockData.weatherLgBindings.city);
        expect(controller.country).toEqual(mockData.weatherLgBindings.country);
        expect(controller.icon).toEqual(mockData.weatherLgBindings.icon);
        expect(controller.temp).toEqual(mockData.weatherLgBindings.temp);
        expect(controller.unit).toEqual(mockData.weatherLgBindings.unit);
        expect(controller.condition).toEqual(mockData.weatherLgBindings.condition);
        expect(controller.date).toEqual(mockData.weatherLgBindings.date);
    });

});
