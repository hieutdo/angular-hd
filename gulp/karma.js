'use strict';

var gulp = require('gulp');
var path = require('path');
var karma = require('gulp-karma');

function initKarma(singleRun) {
  function Config() {
    var config = this;
    this.set = function (newConfig) {
      Object.keys(newConfig).forEach(function (key) {
        config[key] = newConfig[key];
      });
    };
  }

  var configFile = 'karma.conf.js';
  var configModule = require(path.resolve(configFile));
  var config = new Config();

  configModule(config);

  return gulp.src(config.files, {read: false})
    .pipe(karma({
      configFile: configFile,
      action: singleRun ? 'run' : 'watch'
    }))
    .on('error', function (err) {
      throw err;
    });
}

gulp.task('karma:watch', function () {
  initKarma(false);
});

gulp.task('karma:run', function () {
  return initKarma(true);
});
