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
  $scope.title  = OrderService.order.templatetitle;
  $scope.breadcrumb ={
  	type:OrderService.order.producttype,
  	product:OrderService.order.producttitle,
  	template:OrderService.order.templatetitle
  };
  });
