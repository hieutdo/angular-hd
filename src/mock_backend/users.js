'use strict';

/*@ngInject*/
function UsersMock($httpBackend) {
  $httpBackend.whenGET('/users').respond(function () {
    return [200, [
      {
        id: 1,
        firstName: 'Hieu',
        lastName: 'Do'
      }
    ]];
  });
}

module.exports = UsersMock;
