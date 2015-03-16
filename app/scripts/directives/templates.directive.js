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
      //this method here allows me to abstract filtering preferences to allow conditional filters
      $scope.checkFilter  = function(){
        return ($scope.productid)?{parentid:$scope.productid}:null;
      };
      $scope.chooseTemplate = function(id,name){
        OrderService.order.templatetitle = name.charAt(0).toUpperCase()+name.substr(1).toLowerCase();
      };
    }
  };
  });
