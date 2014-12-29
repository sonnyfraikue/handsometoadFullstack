'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('MainCtrl', function ($scope, ProductsService, TemplatesService, OrderService) {
    $scope.products   = ProductsService.products;
    $scope.templates  = TemplatesService.templates;
    $scope.templateVisibility = OrderService.order.productid;
  });
