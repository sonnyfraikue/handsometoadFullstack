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
  'ngProgress',
  'ngDraggable',
  'ui.router',
  'ncy-angular-breadcrumb'
  ])
 .config(function ($routeProvider,$urlRouterProvider,$locationProvider,$stateProvider) {

$stateProvider.state('/', {
  url: '/',
  templateUrl: 'views/main.html',
  controller: 'MainCtrl',
  ncyBreadcrumb: {
    label: '->Create'
  }
})
.state('contact', {
 url: '/contact',
 templateUrl: 'views/contact.html',
 controller: 'ContactCtrl',
 ncyBreadcrumb: {
   label: '->contact'
 }          
})
.state('canvas', {
 url: '/canvas',
 templateUrl: 'views/canvas.html',
 controller: 'CanvasCtrl',
 ncyBreadcrumb: {
   label: '->canvas'
 }          
})
.state('customise', {
 url: '/customise',
 templateUrl: 'views/customise.html',
 controller: 'CustomiseCtrl',
 ncyBreadcrumb: {
   label: '->customise'
 }          
})
.state('create', {
 url: '/create/:productname/:id',
 templateUrl: 'views/main.html',
 controller: 'MainCtrl',
 ncyBreadcrumb: {
   label: '->creating :productname'
 }          
})
.state('address', {
 url: '/address',
 templateUrl: 'views/address.html',
 controller: 'AddressCtrl',
 ncyBreadcrumb: {
   label: '->address'
 }          
})
.state('about', {
 url: '/about',
 templateUrl: 'views/about.html',
 controller: 'AboutCtrl',
 ncyBreadcrumb: {
   label: '->about'
 }          
})
.state('sell', {
 url: '/sell',
 templateUrl: 'views/sell.html',
 controller: 'SellCtrl',
 ncyBreadcrumb: {
   label: '->sell'
 }          
});

$locationProvider.html5Mode(true);
});
