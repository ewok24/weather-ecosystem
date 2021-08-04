class customEvents {
    constructor ($log, $rootScope) {
        this._$log = $log;
        this._$rootScope = $rootScope;
        this._eventListeners = {};
    }
    send (event, data) {
        this._$rootScope.$emit(event, data);
    }
    listen (event, callback) {
        this._eventListeners[event] = this._$rootScope.$on(event, function (event, args) {
            callback(args);
        });
    }
    deregister (event) {
        //this._$log('customEvents deregistering listener > event', event);
        if (event && this._eventListeners[event]) {
            this._eventListeners[event]();
            delete this._eventListeners[event];
        }
    }
}

customEvents.$inject = ['$log', '$rootScope'];

export default customEvents;
