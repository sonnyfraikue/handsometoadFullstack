'use strict';

/**
 * @ngdoc function
 * @name handsometoadApp.service:TemplatesService
 * @description
 * # TemplatesService
 * Controller of the handsometoadApp
 */
angular.module('handsometoadApp')
.factory('TemplatesService',function(){
	 this.templates =  [
    { parentid:1, name:'custom cards 1', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 2', description: 'danger', count:3 },
    { parentid:2, name:'custom calendars 1', description: 'success' , count:4},
    { parentid:2, name:'custom calendars 2', description: 'success' , count:4},
    { parentid:3, name:'custom brochures', description: 'warning' , count:1},
    { parentid:4, name:'custom t-shirts', description: 'info' , count:2},
    { parentid:5, name:'custom wall-paper', description: 'info' , count:4},
    { parentid:6, name:'custom posters', description: 'info' , count:4},
  ];
  	
	return this;
});