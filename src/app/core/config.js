'use strict';

/*@ngInject*/
function AppConfig($window) {
  return {
    viewDir: 'views/',
    api: {
      protocol: $window.location.protocol.split(':')[0],
      host: $window.location.hostname,
      port: String($window.location.port || 80),
      path: '/api'
    }
  };
}

module.exports = AppConfig;
