'use strict';

/*@ngInject*/
function UserListController($scope, User) {
  User.findAll().then(function (users) {
    $scope.users = users;
  });
}

module.exports = UserListController;
