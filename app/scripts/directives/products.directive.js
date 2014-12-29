'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:productsDirective
 * @description
 * # productsDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('productsDirective', function () {
  	return {
    templateUrl: 'views/product.html',
    link:function($scope,element,attr){
    	//dom manipulation here
    	console.log($scope,element,attr);
    }
  };
  });
