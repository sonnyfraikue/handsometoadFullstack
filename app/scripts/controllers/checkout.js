'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('CheckoutCtrl', function ($scope,OrderService) {
 $scope.title  = 'Checkout';
  $scope.breadcrumb = {
    type:OrderService.order.producttype,
    product:OrderService.order.producttitle,
    template:OrderService.order.templatetitle
  };
    
  });
