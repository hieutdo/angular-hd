'use strict';

require('angular');
require('angular-bootstrap');
require('angular-ui-router');

module.exports = angular.module('app', [
  require('./core').name,
  require('./home').name
]);
