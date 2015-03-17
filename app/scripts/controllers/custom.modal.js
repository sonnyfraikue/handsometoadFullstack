'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:CustomModalCtrl
 * @description
 * # CustomModalCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('CustomModalCtrl', function ($scope,$location) {
    $scope.showmodal        = $location.host().match(/local/)?true:false;
   
  });
