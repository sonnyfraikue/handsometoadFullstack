'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('MainCtrl', function ($location, $scope, ProductsService, TemplatesService, OrderService, $route) {
    $scope.$on('$routeChangeSuccess', function () {
        if(!OrderService.order.productid){
          OrderService.order.chooseProduct($route.current.params.id);
      }
    });
    $scope.showmodal  = $location.host().match(/local/)?false:false;
    
    ProductsService.then(function(response){
    $scope.products   			= response.data;
     }); 

    TemplatesService.then(function(response){
    $scope.templates   			= response.data;
     }); 

    $scope.urlPrefix			=	'create';
    $scope.aesthetic      = OrderService.order.settings;
    
  });
