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
      $scope.chooseSellProduct  = function(id,title){
      OrderService.order.chooseProduct(id,title);
      OrderService.order.settings.hideproduct = true;
      OrderService.order.settings.hidetemplate = false;
      console.log('hideproduct set to true in products directive');
    };
    }
  };
  });
