'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:templatesDirective
 * @description
 * # templatesDirective
 * Directive of the handsometoadApp
 */
 angular.module('handsometoadApp')
 .directive('sellTemplatesDirective', function (OrderService) {
   return {
    templateUrl: 'views/sell.ptemplate.html',
    link:function($scope){
    	//dom manipulation here
    	$scope.productid	=	OrderService.order.productid;
      //this method here allows me to abstract filtering preferences to allow conditional filters
      $scope.checkFilter  = function(){
        return ($scope.productid)?{parentid:$scope.productid}:null;
      };
      $scope.chooseSellTemplate  = function(id,title){
        OrderService.order.settings.hideproduct = true;
        OrderService.order.settings.hidetemplate = false;
        OrderService.order.templatetitle  = title;
        console.log('hideproduct set to true in products directive');
      };
    }
  };
});
