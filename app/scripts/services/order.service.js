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
	//this method should track and maintain data inside the client and also send the collected data to the backend
	//this therefore needs an additional method
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