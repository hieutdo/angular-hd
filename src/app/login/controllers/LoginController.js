'use strict';

/*@ngInject*/
function LoginController($scope, $http) {
  $scope.loginStatus = {
    message: null,
    type: null
  };

  $scope.login = function (user) {
    $http.post('/login', user).then(function (res) {
      $scope.loginStatus.message = 'Login successfully!';
      $scope.loginStatus.type = 'success';
    }, function (error) {
      $scope.loginStatus.message = error.data.message;
      $scope.loginStatus.type = 'danger';
    });
  };
}

module.exports = LoginController;
