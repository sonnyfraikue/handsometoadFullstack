'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.service:productsService
 * @description
 * # productsService
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
.factory('ProductsService',function(){
	 this.products =  [
    { id:1, name:'greeting cards', description: 'danger', count:3 },
    { id:2, name:'calendars', description: 'success' , count:4},
    { id:3, name:'brochures', description: 'warning' , count:1},
    { id:4, name:'t-shirts', description: 'info' , count:2},
    { id:5, name:'wall-paper', description: 'info' , count:4},
    { id:6, name:'posters', description: 'info' , count:4},
  ];
  	
	return this;
});