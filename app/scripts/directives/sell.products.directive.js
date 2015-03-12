'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:sellProductsDirective
 * @description
 * # sellProductsDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('sellProductsDirective', function (OrderService) {
  	return {
    templateUrl: 'views/sell.product.html',
    link:function($scope){
      console.log($scope,OrderService);
    }
  };
  });
