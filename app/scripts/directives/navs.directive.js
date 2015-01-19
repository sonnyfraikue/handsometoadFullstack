'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:navDirective
 * @description
 * # navDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('navsDirective', function (OrderService) {
  	return {
    templateUrl: 'views/nav.html',
    controller:'NavCtrl',
    link:function($scope){
    	$scope.products  = {
    title:OrderService.order.producttitle,
    template:OrderService.order.templatetitle
  };
  
    }
  };
  });
