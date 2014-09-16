'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor');
var browserSync = require('browser-sync');

// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);
gulp.task('webdriver-standalone', protractor.webdriver_standalone);

function initProtractor() {
  var testFiles = [
    'test/e2e/**/*.js'
  ];

  gulp.src(testFiles)
    .pipe(protractor.protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function (err) {
      throw err;
    })
    .on('end', function () {
      browserSync.exit();
    });
}

gulp.task('protractor', ['server:dev'], function () {
  initProtractor();
});

gulp.task('protractor:dist', ['server:dist'], function () {
  initProtractor();
});
