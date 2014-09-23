'use strict';

/*@ngInject*/
function SessionFactory() {
  var data = {};

  function Session() {
    this.put = function (key, value) {
      data[key] = value;
    };
    this.get = function (key) {
      return data[key];
    };
  }

  return new Session();
}

module.exports = SessionFactory;
