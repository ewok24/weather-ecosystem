describe('customEvents', function() {
    let service;    
    beforeEach(() => {
        angular.mock.module('app.services');
    });
    beforeEach(inject((_customEvents_) => {
        service = _customEvents_;
    }));

    it('should start with a default _eventListeners value = {}', () => {
        expect(service._eventListeners).toEqual({});
    });
    it(': starting a listener should populate _eventListeners object', () => {
        expect(service._eventListeners).toEqual({});
        service.listen('testEvent', () => {});
        expect(service._eventListeners['testEvent']).toBeDefined();
    });
    it(': deregistering a listener should update _eventListeners object', () => {
        service.listen('testEvent', () => {});
        expect(service._eventListeners['testEvent']).toBeDefined();
        service.deregister('testEvent');
        expect(service._eventListeners['testEvent']).toBeUndefined();
    });

});
