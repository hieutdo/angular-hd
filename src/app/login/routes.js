'use strict';

/*@ngInject*/
function LoginRoutes($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      views: {
        'content@': {
          templateUrl: 'app/login/views/login.html',
          controller: 'LoginController'
        }
      }
    });
}

module.exports = LoginRoutes;
