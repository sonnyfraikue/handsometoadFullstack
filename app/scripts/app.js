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

$stateProvider.state('create', {
  url: '/',
  templateUrl: 'views/main.html',
  controller: 'MainCtrl',
  ncyBreadcrumb: {
    label: '{{breadcrumb.type}}'
  }
})
.state('contact', {
 url: '/contact',
 templateUrl: 'views/contact.html',
 controller: 'ContactCtrl',
 ncyBreadcrumb: {
   label: 'Contact'
 }          
})
.state('canvas', {
 url: '/canvas',
 templateUrl: 'views/canvas.html',
 controller: 'CanvasCtrl',
 ncyBreadcrumb: {
   label: 'Editing {{breadcrumb.template}}',
   parent:'productname'
 }          
})
.state('sellcanvas', {
 url: '/sell/canvas',
 templateUrl: 'views/canvas.html',
 controller: 'CanvasCtrl',
 ncyBreadcrumb: {
   label: 'Editing {{breadcrumb.template}}',
   parent:'sellproductname'
 }          
})
.state('customise', {
 url: '/customise',
 templateUrl: 'views/customise.html',
 controller: 'CustomiseCtrl',
 ncyBreadcrumb: {
   label: 'Customise',
   parent:'sell'
 }          
})
.state('productname', {
 url: '/create/:productname/:id/',
 templateUrl: 'views/main.html',
 controller: 'MainCtrl',
 ncyBreadcrumb: {
   label: '{{breadcrumb.type}} {{breadcrumb.product}}',
   parent:'create'
 }          
})
.state('address', {
 url: '/address',
 templateUrl: 'views/address.html',
 controller: 'AddressCtrl',
 ncyBreadcrumb: {
   label: 'Address',
   parent:'canvas'
 }          
})
.state('checkout', {
 url: '/checkout',
 templateUrl: 'views/checkout.html',
 controller: 'CheckoutCtrl',
 ncyBreadcrumb: {
   label: 'Checkout',
   parent:'address'
 }          
})
.state('about', {
 url: '/about',
 templateUrl: 'views/about.html',
 controller: 'AboutCtrl',
 ncyBreadcrumb: {
   label: 'About'
 }          
})
.state('sell', {
 url: '/sell',
 templateUrl: 'views/sell.html',
 controller: 'SellCtrl',
 ncyBreadcrumb: {
   label: '{{breadcrumb.type}}'
 }          
})
.state('sellproductname', {
 url: '/sell/:productname/:id/',
 templateUrl: 'views/sell.html',
 controller: 'SellCtrl',
 ncyBreadcrumb: {
   label: '{{breadcrumb.type}} {{breadcrumb.product}}',
   parent:'sell'
 }          
});

$locationProvider.html5Mode(true);
});
