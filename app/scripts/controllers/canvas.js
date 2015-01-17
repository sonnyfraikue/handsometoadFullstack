'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:CanvasCtrl
 * @description
 * # CanvasCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('CanvasCtrl', function ($scope,OrderService) {
$scope.title  = OrderService.order.tempatetitle;
console.log(OrderService.order.tempatetitle);
  });
