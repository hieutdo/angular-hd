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
  var entries = ['./src/app/app.js'];
  if (global.useMockBackend) {
    entries.push('./src/mock_backend/mock_backend.js');
  }
  var bundler = browserify(entries, opts);

  if (watch) {
    bundler = watchify(bundler);
  }

  _.forEach(buildConfig.vendorPackages, function (requirePath, packageId) {
    bundler.external(packageId);
  });

  function rebundle() {
    return bundler.bundle()
      .on('error', function (error) {
        gutil.log(gutil.colors.red('bundle:app >>> ' + error.message));
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
