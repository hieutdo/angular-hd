'use strict';

module.exports = angular.module('app.core', [
  'angular-data.DSCacheFactory',
  'angular-data.DS',

  'ui.bootstrap',
  'ui.router'
])
  .config(require('./routes'))

  .constant('regexEscape', require('./utils/regexEscape'))

  .factory('appConfig', require('./config'))
  .factory('apiBaseUrl', function (appConfig) {
    return appConfig.api.protocol + '://' + appConfig.api.host + ':' + appConfig.api.port + appConfig.api.path + '/';
  });
