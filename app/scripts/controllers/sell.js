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
	
	ProductsService.then(function(response){
    $scope.products   			= response.data;
     }); 

    TemplatesService.then(function(response){
    $scope.templates   			= response.data;
     }); 
	$scope.urlPrefix			=	'sell';
  
  });
