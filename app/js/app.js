'use strict';
var yachtumApp = angular.module('yachtumApp', [
    'ngRoute',
    'yachtumControllers',
    'yachtumDirectives'
  ]);
 
  yachtumApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/search', {
          templateUrl: 'partials/barco-search.html',
          controller: 'BarcoListCtrl'
        }).
       
        when('/barcos/:barcoId', {
          templateUrl: 'partials/barco-detail.html',
          controller: 'BarcoDetailCtrl'
        }).
        otherwise({
          redirectTo: '/search'
        });
    }]);
/* App Module */
