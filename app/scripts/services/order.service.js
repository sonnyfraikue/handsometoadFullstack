'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.service:OrderService
 * @description
 * # OrderService
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
.factory('OrderService',function(){
	 this.order =  { 
	 	productid:false, 
	 	producttitle:'product title',
	 	templateid:false, 
	 	templatetitle:'template title',
	 	templatedescription:null,
	 	address: 'danger' 
	 };
  	
	return this;
});