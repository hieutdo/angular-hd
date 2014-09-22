'use strict';

/*@ngInject*/
function HomeRoutes($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '',
      views: {
        'content@': {
          templateUrl: 'app/home/views/home.html',
          controller: 'HomeController'
        }
      }
    });
}

module.exports = HomeRoutes;
