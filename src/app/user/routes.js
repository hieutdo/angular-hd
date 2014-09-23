'use strict';

/*@ngInject*/
function LoginRoutes($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      views: {
        'content@': {
          templateUrl: 'app/user/views/login.html',
          controller: 'LoginController'
        }
      }
    });
}

module.exports = LoginRoutes;
