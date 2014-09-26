'use strict';

/*@ngInject*/
function UserRoutes($stateProvider) {
  $stateProvider
    .state('app.user', {
      url: 'user',
      views: {
        'content@': {
          templateUrl: 'app/user/views/user.html',
          controller: 'UserListController'
        }
      },
      resolve: {
        users: function (User) {
          return User.findAll();
        }
      }
    });
}

module.exports = UserRoutes;
