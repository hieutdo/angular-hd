'use strict';

/*@ngInject*/
function UsersMock($httpBackend) {
  var users = [
    {
      id: 1,
      username: 'hieu',
      password: '123',
      firstName: 'Hieu',
      lastName: 'Do'
    }
  ];

  $httpBackend.whenGET('/users').respond(function () {
    return [200, users];
  });

  $httpBackend.whenPOST('/login').respond(function (method, url, data) {
    var i, user = angular.fromJson(data);
    for (i = 0; i < users.length; i++) {
      if (users[i].username === user.username && users[i].password === user.password) {
        return [200, users[i]];
      }
    }
    return [401, {message: 'Invalid username or password'}];
  });
}

module.exports = UsersMock;
