'use strict';

module.exports = angular.module('app.user', [])
  .config(require('./routes'))
  .factory('User', require('./models/User'))
  .controller('LoginController', require('./controllers/LoginController'));
