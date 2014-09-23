'use strict';

/*@ngInject*/
function UserFactory($resource) {
  var User = $resource('/users/:userId', null, {
    login: {
      method: 'POST',
      url: '/login'
    }
  });
  return User;
}

module.exports = UserFactory;
