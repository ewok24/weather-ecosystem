describe('InputForm', function() {
    let controller;

    beforeEach(angular.mock.module('app.layout'));

    beforeEach(inject(($componentController) => {
        controller = $componentController('inputForm',
            null, {});
    }));

    it('should start with a default placeholder value = Enter City', () => {
        expect(controller.placeholder).toEqual('Enter City');
    });
    it('should start with a default search button label value = Search', () => {
        expect(controller.searchText).toEqual('Search');
    });

});
