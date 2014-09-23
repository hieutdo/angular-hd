'use strict';

module.exports = angular.module('app.core', [
  'ngResource',

  'ui.bootstrap',
  'ui.router'
])
  .config(require('./routes'))
  .factory('Session', require('./models/Session'));
