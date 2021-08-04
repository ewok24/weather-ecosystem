class InputFormCtrl {
    constructor() {
        'ngInject';
        this.placeholder = 'Enter City';
        this.searchText = 'Search';
    }
}
  
let InputForm = {
    bindings: {
        submitFn: '&',
    },
    controller: InputFormCtrl,
    controllerAs: 'vm',
    templateUrl: 'components/input-form.html'
};

export default InputForm;
