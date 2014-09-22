'use strict';

var _ = require('lodash');

function getBowerPackageIds(exclude) {
  return _.difference(_.keys(require('../bower.json').dependencies), exclude);
}

var buildConfig = {
  proxy: {
    target: 'http://localhost:8080',
    apiPrefix: 'api'
  },
  browserify: {
    exclude: ['bootstrap-sass-official']
  }
};

buildConfig.browserify.vendorPackageIds = getBowerPackageIds(buildConfig.browserify.exclude);

global.buildConfig = buildConfig;
