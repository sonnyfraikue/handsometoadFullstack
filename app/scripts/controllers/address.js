'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:AddressCtrl
 * @description
 * # AddressCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('AddressCtrl', function ($scope, OrderService) {
  	$scope.title 	=	'Shipping';
	$scope.breadcrumb ={
  	type:OrderService.order.producttype,
  	product:OrderService.order.producttitle,
  	template:OrderService.order.templatetitle
  };
  });
