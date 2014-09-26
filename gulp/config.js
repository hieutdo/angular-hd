'use strict';

var _ = require('lodash');
var path = require('path');
var slash = require('slash');
var bowerFiles = require('main-bower-files')();

function getVendorPackages(bowerFiles) {
  var packageMap = {}, packageId, requirePath;

  _.forEach(bowerFiles, function (filename) {
    if (path.extname(filename) === '.js') {
      packageId = filename.split(path.sep)[1];
      requirePath = './' + slash(filename);
      packageMap[packageId] = requirePath;
    }
  });

  return packageMap;
}

var buildConfig = {
  proxy: {
    target: 'http://localhost:8080',
    apiPrefix: 'api'
  },
  bowerFiles: bowerFiles,
  vendorPackages: getVendorPackages(bowerFiles)
};

if (global.useMockBackend) {
  buildConfig.vendorPackages['angular-mocks'] = './bower_components/angular-mocks/angular-mocks.js';
}

global.buildConfig = buildConfig;
