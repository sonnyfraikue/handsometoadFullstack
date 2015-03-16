'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:SellCtrl
 * @description
 * # SellCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('SellCtrl', function ($scope,$location,ProductsService,TemplatesService, ngProgress, ConfigService, OrderService) {
	ConfigService.init.progress();
  OrderService.order.producttype = 'Sell';
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
  $scope.aesthetic        = ConfigService.ui;
  $scope.breadcrumb ={
    type:OrderService.order.producttype,
    product:OrderService.order.producttitle,
    template:OrderService.order.templatetitle
  };
  
  });
