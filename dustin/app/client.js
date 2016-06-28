'use strict'
const angular = require('angular');
//const ngRoute = require('angular-router');



//const app = angular.module('mainApp', [require('angular-route')]);

var app = angular.module("mainApp", [require('angular-route')]);
       app.config(['$routeProvider', function($routeProvider) {
          $routeProvider.

          when('/cowsay', {
             templateUrl: 'cowsay.htm',
             controller: 'CowSayController'
          }).

          when('/nyancat', {
             templateUrl: 'nyancat.htm',
             controller: 'NyanCatController'
          }).
          when('/homer', {
             templateUrl: 'homer.htm',
             controller: 'HomerController'
          }).

          otherwise({
             redirectTo: '/cowsay'
          });
       }]);

       app.controller('CowSayController', function($scope) {
          $scope.message = "This page will be used to display add student form";
       });

       app.controller('NyanCatController', function($scope) {
          $scope.message = "This page will be used to display all the students";
       });
       app.controller('HomerController', function($scope) {
          $scope.message = "This page will be used to display all the students";
       });
