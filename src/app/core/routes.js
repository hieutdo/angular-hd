'use strict';

/*@ngInject*/
function CoreRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    abstract: true,
    views: {
      'header@': {
        templateUrl: 'app/core/views/header.html'
      },
      'footer@': {
        templateUrl: 'app/core/views/footer.html'
      }
    }
  });
}

module.exports = CoreRoutes;
