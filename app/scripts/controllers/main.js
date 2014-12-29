'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
  .controller('MainCtrl', function ($scope, ProductsService, TemplatesService) {
    $scope.products   = ProductsService.products;
    $scope.templates  = TemplatesService.templates;
  });
