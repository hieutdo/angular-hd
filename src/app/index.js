'use strict';

require('angular');
require('angular-resource');
require('angular-bootstrap');
require('angular-ui-router');

module.exports = angular.module('app', [
  require('./core').name,
  require('./user').name,
  require('./home').name
]);
