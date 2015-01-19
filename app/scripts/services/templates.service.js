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
    { parentid:1, name:'custom cards 3', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 4', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 5', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 6', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 7', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 8', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 9', description: 'danger', count:3 },
    { parentid:1, name:'custom cards 10', description: 'danger', count:3 },
    { parentid:2, name:'custom calendars 1', description: 'success' , count:4},
    { parentid:2, name:'custom calendars 2', description: 'success' , count:4},
    { parentid:3, name:'custom brochures', description: 'warning' , count:1},
    { parentid:4, name:'custom t-shirts', description: 'info' , count:2},
    { parentid:4, name:'custom t-shirts1', description: 'info' , count:2},
    { parentid:4, name:'custom t-shirts2', description: 'info' , count:2},
    { parentid:4, name:'custom t-shirts3', description: 'info' , count:2},
    { parentid:5, name:'custom wall-paper', description: 'info' , count:4},
    { parentid:5, name:'custom wall-paper1', description: 'info' , count:4},
    { parentid:5, name:'custom wall-paper2', description: 'info' , count:4},
    { parentid:5, name:'custom wall-paper3', description: 'info' , count:4},
    { parentid:5, name:'custom wall-paper4', description: 'info' , count:4},
    { parentid:5, name:'custom wall-paper5', description: 'info' , count:4},
    { parentid:6, name:'custom posters', description: 'info' , count:4},
  ];
  	
	return this;
});