'use strict';

module.exports = angular.module('app.core', [
  'ui.bootstrap',
  'ui.router'
])
  .config(require('./routes'));
