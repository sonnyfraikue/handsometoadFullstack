'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:productsDirective
 * @description
 * # productsDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('productsDirective', function (OrderService) {
  	return {
    templateUrl: 'views/product.html',
    link:function($scope,element,attr){
    	//dom manipulation here
      $scope.chooseProduct  = function(id){
      console.log($scope,element,attr,OrderService.order.productid,id);
      OrderService.order.productid =  id;
    };
    }
  };
  });
