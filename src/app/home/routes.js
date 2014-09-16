'use strict';

/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider
    .state('root.home', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/home/views/home.html',
          controller: 'HomeController'
        }
      }
    });
};
