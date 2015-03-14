'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.service:OrderService
 * @description
 * # OrderService
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
.factory('ConfigService',function(ngProgress){
	//this method should track and maintain data inside the client and also send the collected data to the backend
	//this therefore needs an additional method
	var configObj	=	{};
	 configObj.progress =  { 
	 	color:'#a0b406', 
	 	height:'3px'
	 };
	 configObj.ui	=	{hideproduct:false,hidetemplate:false};
	 configObj.init	=	{
	 	progress:function(){
	 		ngProgress.color(configObj.progress.color);
    		ngProgress.height(configObj.progress.height);
		    ngProgress.start();

	 	}
	 };
  	
	return configObj;
});