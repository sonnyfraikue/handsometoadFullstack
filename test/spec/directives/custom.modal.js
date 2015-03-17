'use strict';

describe('Directive: custom.modal', function () {

  // load the directive's module
  beforeEach(module('handsometoadApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom.modal></custom.modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the custom.modal directive');
  }));
});
