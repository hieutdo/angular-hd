'use strict';

/*@ngInject*/
function UserApi($httpBackend, $log, appConfig, apiBaseUrl, regexEscape) {
  var collectionUrl = apiBaseUrl + 'users';

  var IdRegExp = /[\d\w-_]+$/.toString().slice(1, -1),
      QueryRegExp = /[\d\w-_\.%\s]*$/.toString().slice(1, -1);

  var UserRepository = {}, id = 1;

  UserRepository.data = [
    {
      id: id++,
      firstName: 'Hieu',
      lastName: 'Do'
    },
    {
      id: id++,
      firstName: 'John',
      lastName: 'Doe'
    }
  ];

  UserRepository.index = {};

  angular.forEach(UserRepository.data, function (item) {
    UserRepository.index[item.id] = item;
  });

  //GET users/
  $httpBackend.whenGET(collectionUrl).respond(function () {
    return [200, UserRepository.data];
  });

  //GET users/<id>
  $httpBackend.whenGET(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url) {
    var id = url.match(new RegExp(IdRegExp))[0],
        user = UserRepository.index[id];

    return user ? [200, user] : [404];
  });

  //POST users/
  $httpBackend.whenPOST(collectionUrl).respond(function (method, url, data) {
    var user = angular.fromJson(data);

    user.id = id++;
    UserRepository.data.push(user);
    UserRepository.index[user.id] = user;

    return [200, user];
  });

  //GET users/search?q=<query>
  $httpBackend.whenGET(new RegExp(regexEscape(collectionUrl + '/search?q=') + QueryRegExp)).respond(function (method, url) {
    var term = url.match(new RegExp(QueryRegExp))[0] || '';

    var hits = UserRepository.data.filter(function (user) {
      return user && typeof user.text === 'string' && user.text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    });

    return [200, hits];
  });

  //PUT users/<id>
  $httpBackend.whenPUT(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url, data) {
    var id = url.match(new RegExp(IdRegExp))[0];

    if (!UserRepository.index[id]) {
      return [404];
    }

    UserRepository.index[id] = angular.fromJson(data);
    return [200, UserRepository.index[id]];
  });

  //DELETE users/<id>
  $httpBackend.whenDELETE(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url) {
    var id = url.match(new RegExp(IdRegExp))[0],
        user = UserRepository.index[id],
        index;

    if (!user) {
      return [404];
    }

    delete UserRepository.index[user.id];

    index = UserRepository.data.indexOf(user);
    UserRepository.data.splice(index, 1);

    return [200, user];
  });
}

module.exports = UserApi;
