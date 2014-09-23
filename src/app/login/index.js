'use strict';

module.exports = angular.module('app.login', [])
  .config(require('./routes'))
  .controller('LoginController', require('./controllers/LoginController'));
