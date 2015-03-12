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
	var orderObj	=	{};
	 orderObj.order =  { 
	 	productid:false, 
	 	producttitle:'product title',
	 	templateid:false, 
	 	templatetitle:'template title',
	 	templatedescription:null,
	 	address: 'danger' 
	 };
	 orderObj.order.chooseProduct	=	function(id,title){
	  orderObj.order.productid =  id;
      orderObj.order.producttitle = title;
	 };

	 orderObj.order.settings	=	{hideproduct:false,hidetemplate:false};
  	
	return orderObj;
});