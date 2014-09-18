'use strict';

var _ = require('lodash');

var buildConfig = {
  proxy: {
    target: 'http://localhost:8080',
    apiPrefix: 'api'
  },
  bower: {
    exclude: ['bootstrap-sass-official']
  }
};

buildConfig.bower.packageIds = _.difference(_.keys(require('../bower.json').dependencies), buildConfig.bower.exclude);

global.buildConfig = buildConfig;
