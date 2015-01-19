'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:templatesDirective
 * @description
 * # templatesDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('templatesDirective', function (OrderService) {
  	return {
    templateUrl: 'views/ptemplate.html',
    link:function($scope){
    	//dom manipulation here
    	$scope.productid	=	OrderService.order.productid;
    	$scope.chooseTemplate	=	function(id,title){
    		OrderService.order.templateid =  id;
    		OrderService.order.tempatetitle	=	title;
    	};
    }
  };
  });
