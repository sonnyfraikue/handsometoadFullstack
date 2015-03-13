'use strict';

/**
 * @ngdoc overview
 * @name handsometoadApp
 * @description
 * # handsometoadApp
 *
 * Main module of the application.
 */
angular
  .module('handsometoadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngProgress'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/canvas', {
        templateUrl: 'views/canvas.html',
        controller: 'CanvasCtrl'
      })
      .when('/customise', {
        templateUrl: 'views/customise.html',
        controller: 'CustomiseCtrl'
      })
      .when('/create/:productname/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sell', {
        templateUrl: 'views/sell.html',
        controller: 'SellCtrl'
      })
      .when('/sell/:productname/:id', {
        templateUrl: 'views/sell.html',
        controller: 'SellCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });
