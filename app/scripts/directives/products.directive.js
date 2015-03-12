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
      //lazily catching bubbled event from child link
     /* ele.bind('click', function(){
        console.log('heard click');
      });*/
      $scope.chooseProduct  = function(id,title){
      OrderService.order.chooseProduct(id,title);
      OrderService.order.settings.hideproduct = true;
      OrderService.order.settings.hidetemplate = false;
      console.log('hideproduct set to true in products directive');
    };
    
    }
  };
  });
