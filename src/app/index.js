'use strict';

require('angular');
require('angular-cache');
require('angular-data');
require('angular-bootstrap');
require('angular-ui-router');

module.exports = angular.module('app', [
  require('./core').name,
  require('./user').name,
  require('./home').name
]);
