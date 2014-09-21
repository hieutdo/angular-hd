'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'build/js/vendor.bundle.js',
      'build/js/app.bundle.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'test/unit/**/*.js'
    ],
    reporters: ['progress'],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]
  });
};
