'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:SellCtrl
 * @description
 * # SellCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('SellCtrl', function ($scope,$location,ProductsService,TemplatesService, ngProgress, ConfigService) {
	ConfigService.init.progress();
  $scope.showmodal        = $location.host().match(/local/)?true:false;
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
