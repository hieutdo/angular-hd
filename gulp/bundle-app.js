'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var unpathify = require('gulp-unpathify');
var gulpIf = require('gulp-if');

gulp.task('bundle:app', function () {
  return bundleApp(true);
});

gulp.task('bundle:app:dist', function () {
  return bundleApp(false);
});

function bundleApp(watch) {
  var opts = watch ? _.extend(watchify.args, {debug: true}) : {};
  var bundler = browserify(['./src/app/app.js', './src/app/mock_backend'], opts);

  if (watch) {
    bundler = watchify(bundler);
  }

  buildConfig.browserify.vendorPackageIds.forEach(function (lib) {
    bundler.external(lib);
  });

  function rebundle() {
    return bundler.bundle()
      .on('error', function (error) {
        gutil.log(gutil.colors.red('Error while bundling app scripts: ' + error.message));
        gutil.beep();
        this.end();
      })
      .pipe(source('app.bundle.js'))
      .pipe(gulpIf(!watch, unpathify()))
      .pipe(gulp.dest('build/js/'));
  }

  if (watch) {
    bundler.on('update', rebundle);
  }

  return rebundle();
}
