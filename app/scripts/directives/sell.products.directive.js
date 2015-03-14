'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:sellProductsDirective
 * @description
 * # sellProductsDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('sellProductsDirective', function (OrderService,ConfigService) {
  	return {
    templateUrl: 'views/sell.product.html',
    link:function($scope){
      $scope.chooseSellProduct  = function(id,title){
      OrderService.order.chooseProduct(id,title);
      ConfigService.ui.hideproduct = true;
      ConfigService.ui.hidetemplate = false;
      console.log('chooseSellProduct');
    };
    }
  };
  });
