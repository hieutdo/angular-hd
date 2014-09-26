'use strict';

/*@ngInject*/
function UserListController($scope, users) {
  $scope.users = users;
}

module.exports = UserListController;
