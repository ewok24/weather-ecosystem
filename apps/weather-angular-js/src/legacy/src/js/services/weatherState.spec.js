import mockData from '../../specs/mockData';

describe('weatherState', function() {
    let service, customEvents;    
    beforeEach(() => {
        angular.mock.module('app.services');
    });
    beforeEach(inject((_weatherState_, _customEvents_) => {
        service = _weatherState_;
        customEvents = _customEvents_;
    }));

    it('should start with injected customEvents service', () => {
        expect(service._customEvents).toBeDefined();
    });
    it('should start with a default _currentWeather value = {}', () => {
        expect(service._currentWeather).toEqual({});
    });
    it('should start with a default _currentForecast value = []', () => {
        expect(service._currentForecast).toEqual([]);
    });
    it('should start with a default _events value', () => {
        expect(service._events).toEqual(mockData.weatherStateEvents);
    });

    it(': on should populate customEvents._eventListeners object', () => {
        expect(customEvents._eventListeners).toEqual({});
        service.on('testEvent', () => {});
        expect(customEvents._eventListeners['testEvent']).toBeDefined();
    });
    it(': deregistering should update customEvents._eventListeners object', () => {
        service.on('testEvent', () => {});
        expect(customEvents._eventListeners['testEvent']).toBeDefined();
        service.deregister('testEvent');
        expect(customEvents._eventListeners['testEvent']).toBeUndefined();
    });
    it(': loadWeather should trigger "loadWeather" event', () => {
        service.on('loadWeather', () => {
            expect({}).toBeDefined();
        });
        service.loadWeather();
    });
    it(': updateCurrentWeather should trigger "updateCurrentWeather" event', () => {
        service.on('updateCurrentWeather', () => {
            expect(service._currentWeather).toEqual('newState');
        });
        service.updateCurrentWeather('newState');
    });
    it(': updateCurrentForecast should trigger "updateCurrentForecast" event', () => {
        service.on('updateCurrentForecast', () => {
            expect(service._currentForecast).toEqual('newForecast');
        });
        service.updateCurrentForecast('newForecast');
    });

});
