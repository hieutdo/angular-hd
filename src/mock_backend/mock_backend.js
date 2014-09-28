'use strict';

require('angular-mocks');

angular.module('app')
  .config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($q, $timeout, appConfig) {
      return {
        request: function (config) {
          return config;
        },
        response: function (response) {
          if (response.config.url.indexOf(appConfig.viewDir) === 0) {
            return response;
          }

          var deferred = $q.defer();

          $timeout(function () {
            deferred.resolve(response);
          }, 200);

          return deferred.promise;
        }
      };
    });
  })
  .run(require('./api/user'));
