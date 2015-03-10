'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.service:productsService
 * @description
 * # productsService
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
.factory('ProductsService',function($http){
  return $http.get('/api/products', { cache: true });
});