'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var karma = require('gulp-karma');
var karmaConfigFile = 'karma.conf.js';

gulp.task('karma:dev', function () {
  function Config() {
    var config = this;
    this.set = function (newConfig) {
      Object.keys(newConfig).forEach(function (key) {
        config[key] = newConfig[key];
      });
    };
  }

  var configModule = require(path.resolve(karmaConfigFile));
  var config = new Config();

  configModule(config);

  initKarma(config.files, false);
});

gulp.task('karma:dist', function () {
  var files = [
    'dist/scripts/vendor*',
    'dist/scripts/app*',
    'bower_components/angular-mocks/angular-mocks.js',
    'test/unit/**/*.js'
  ];
  return initKarma(files,true);
});

function initKarma(files, singleRun) {
  return gulp.src(files, {read: false})
    .pipe(karma({
      configFile: karmaConfigFile,
      action: singleRun ? 'run' : 'watch'
    }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('UNIT TEST FAILED!'));
      throw err;
    });
}
