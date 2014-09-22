'use strict';

require('angular-mocks');

angular.module('app')
  .config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .run(require('./users'));
