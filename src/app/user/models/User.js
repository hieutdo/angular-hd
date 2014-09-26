'use strict';

/*@ngInject*/
function UserModel(DS, apiBaseUrl) {
  return DS.defineResource({
    name: 'user',
    endpoint: apiBaseUrl + 'users'
  });
}

module.exports = UserModel;
