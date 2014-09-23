'use strict';

/*@ngInject*/
function LoginController($scope, User, Session) {
  $scope.login = function (user) {
    $scope.loginStatus = {
      message: null,
      type: null
    };

    User.login(user).$promise.then(function (res) {
      $scope.loginStatus.message = 'Login successfully!';
      $scope.loginStatus.type = 'success';

      // store user in session
      Session.put('user', res);
    }, function (error) {
      $scope.loginStatus.message = error.data.message;
      $scope.loginStatus.type = 'danger';
    });
  };
}

module.exports = LoginController;
