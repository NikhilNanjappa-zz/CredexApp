'use strict';

/**
 * @ngdoc overview
 * @name panthaProfileApp
 * @description
 * # panthaProfileApp
 *
 * Main module of the application.
 */
angular
  .module('panthaProfileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
