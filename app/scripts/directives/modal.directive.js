'use strict';

/**
 * @ngdoc directive
 * @name handsometoadApp.directive:custom.modal
 * @description
 * # custom.modal
 */
angular.module('handsometoadApp')
  .directive('modalDirective', function () {
    return {
      templateUrl: 'views/modal.html',
      controller: 'CustomModalCtrl',
      link: function () {
      	console.log('heard in modal directive');
      }
    };
  });
