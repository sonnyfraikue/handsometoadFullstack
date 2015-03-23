'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('handsometoadApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach all scope vars and methods for about ctrl here', inject(function () {

    
  }));
});
