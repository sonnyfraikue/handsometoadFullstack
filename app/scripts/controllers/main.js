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
        $scope.chooseProduct($route.current.params.id);
      }
    });
    $scope.showmodal  = $location.host().match(/local/)?true:false;
    $scope.home = function(){
    	OrderService.order.productid	=	false;
    };
    $scope.chooseProduct  = function(id,title){
      OrderService.order.productid =  id;
      OrderService.order.producttitle = title;
    };
    
    ProductsService.then(function(response){
    $scope.products   			= response.data;
     }); 

    TemplatesService.then(function(response){
    $scope.templates   			= response.data;
     }); 

    $scope.urlPrefix			=	'create';
    
  });
