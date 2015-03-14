'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:productsDirective
 * @description
 * # productsDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('productsDirective', function (OrderService,ConfigService) {
  	return {
    templateUrl: 'views/product.html',
    link:function($scope){
      //lazily catching bubbled event from child link
     /* ele.bind('click', function(){
        console.log('heard click');
      });*/
      $scope.chooseProduct  = function(id,title){
      OrderService.order.chooseProduct(id,title);
      ConfigService.ui.hideproduct = true;
      ConfigService.ui.hidetemplate = false;
    };
    
    }
  };
  });
