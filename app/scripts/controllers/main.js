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
    
    ProductsService.then(function(response){
    $scope.products   			= response.data;
     }); 

    TemplatesService.then(function(response){
    $scope.templates   			= response.data;
     }); 

    $scope.urlPrefix			=	'create';
    
  });
