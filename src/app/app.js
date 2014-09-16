'use strict';

require('angular');
require('angular-bootstrap');
require('angular-ui-router');

module.exports = angular.module('app', [
  'ui.bootstrap',
  'ui.router',

  require('./home').name
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('root', {
      url: '/',
      abstract: true,
      views: {
        'header@': {
          templateUrl: 'app/layout/header.html'
        },
        'footer@': {
          templateUrl: 'app/layout/footer.html'
        }
      }
    });
  });
