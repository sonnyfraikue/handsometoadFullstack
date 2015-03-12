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
    link:function($scope,ele,attr){
    	//dom manipulation here
      //lazily catching bubbled event from child link
      console.log($scope,ele,attr);
     /* ele.bind('click', function(){
        console.log('heard click');
      });*/
      $scope.chooseProduct  = function(id,title){
      OrderService.order.chooseProduct(id,title);
      console.log('trying to choose product');
    };
    

    }
  };
  });
