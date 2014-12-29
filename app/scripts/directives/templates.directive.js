'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.directive:templatesDirective
 * @description
 * # templatesDirective
 * Directive of the handsometoadApp
 */
angular.module('handsometoadApp')
  .directive('templatesDirective', function () {
  	return {
    templateUrl: 'views/ptemplate.html',
    link:function($scope,element,attr){
    	//dom manipulation here
    	console.log($scope,element,attr);
    }
  };
  });
