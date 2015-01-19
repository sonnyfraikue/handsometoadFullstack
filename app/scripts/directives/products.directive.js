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
    link:function($scope){
    	//dom manipulation here
      $scope.chooseProduct  = function(id,title){
      OrderService.order.productid =  id;
      OrderService.order.producttitle = title;
      console.log(OrderService.order.producttitle);
    };
    }
  };
  });
