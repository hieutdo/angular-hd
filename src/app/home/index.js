'use strict';

module.exports = angular.module('app.home', [])
  .config(require('./routes'))
  .controller('HomeController', require('./controllers/HomeController'));
