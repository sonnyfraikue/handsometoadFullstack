'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('MainCtrl', function ($scope, ProductsService, TemplatesService, OrderService) {
    
    $scope.home = function(){
    	OrderService.order.productid	=	false;
    };
    $scope.products   			= ProductsService.products;
    $scope.templates  			= TemplatesService.templates;
    $scope.urlPrefix			=	'create';
    
  });
