'use strict';

var _ = require('lodash');
var path = require('path');
var mainBowerFiles = require('main-bower-files');

function getBowerPackageIds() {
  var jsFiles = mainBowerFiles({
    filter: function (filename) {
      return path.extname(filename) === '.js' ? filename : null;
    }
  });
  return _.map(jsFiles, function (filename) {
    return filename.split(path.sep)[1];
  });
}

var buildConfig = {
  proxy: {
    target: 'http://localhost:8080',
    apiPrefix: 'api'
  },
  browserify: {
    vendorPackageIds: getBowerPackageIds()
  }
};

if (global.useMockBackend) {
  buildConfig.browserify.vendorPackageIds.push('angular-mocks');
}

global.buildConfig = buildConfig;
