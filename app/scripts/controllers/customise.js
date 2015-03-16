'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:CanvasCtrl
 * @description
 * # CanvasCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('CustomiseCtrl', function ($scope,OrderService) {
  	$scope.breadcrumb ={
    type:OrderService.order.producttype
  };
  });
