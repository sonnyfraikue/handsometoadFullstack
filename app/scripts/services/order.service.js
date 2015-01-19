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
	 	producttitle:'testtitle',
	 	templateid:false, 
	 	templatetitle:null,
	 	templatedescription:null,
	 	address: 'danger' 
	 };
  	
	return this;
});