'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:templatesDirective
 * @description
 * # templatesDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('sellNewProductDirective', function () {
  	return {
    templateUrl: 'views/sell.new.product.html',
    link:function(){
    	//dom manipulation here
    	
    }
  };
  });
