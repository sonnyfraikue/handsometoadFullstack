'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:SellCtrl
 * @description
 * # SellCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('SellCtrl', function ($scope,ProductsService,TemplatesService, ngProgress, ConfigService) {
	ConfigService.init.progress();
	ProductsService.then(function(response){
    $scope.products   			= response.data;
    ngProgress.complete();
     }); 

    TemplatesService.then(function(response){
    $scope.templates   			= response.data;
    ngProgress.complete();
     }); 
	$scope.urlPrefix			=	'sell';
  
  });
