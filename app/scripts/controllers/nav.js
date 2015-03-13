'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('NavCtrl', function ($scope,OrderService,$location) {
	$scope.home = function(){
	  OrderService.order.productid				=	false;
      OrderService.order.settings.hideproduct	=	false;
      OrderService.order.settings.hidetemplate	=	false;
      $location.path('/');
		};
      
    });
