'use strict';

describe('Controller: CustommodalCtrl', function () {

  // load the controller's module
  beforeEach(module('handsometoadApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('CustommodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', inject(function () {

  }));
});
