'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:SellCtrl
 * @description
 * # SellCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('SellCtrl', function ($scope,ProductsService,TemplatesService) {
	
	$scope.products   			= ProductsService.products;
    $scope.templates  			= TemplatesService.templates;
	$scope.urlPrefix			=	'sell';
  
  });
