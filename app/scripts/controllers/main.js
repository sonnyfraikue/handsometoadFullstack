'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('MainCtrl', function ($location, $scope, ProductsService, TemplatesService, OrderService, $route, ngProgress, ConfigService) {
    ConfigService.init.progress();
    $scope.$on('$routeChangeSuccess', function () {
        if(!OrderService.order.productid){
          OrderService.order.chooseProduct($route.current.params.id);
      }
    });
    $scope.showmodal        = $location.host().match(/local/)?true:false;
    
    ProductsService.then(function(response){
    $scope.products   			= response.data;
    ngProgress.complete();
     }); 

    TemplatesService.then(function(response){
    $scope.templates   			= response.data;
    ngProgress.complete();
     }); 

    $scope.urlPrefix			  =	'create';
    $scope.aesthetic        = ConfigService.ui;
    
  });
