'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('NavCtrl', function ($scope,OrderService,$location,ConfigService) {
	$scope.home = function(){
	  OrderService.order.productid				=	false;
      ConfigService.ui.hideproduct	=	false;
      ConfigService.ui.hidetemplate	=	false;
      $location.path('/');
		};
      
    });
