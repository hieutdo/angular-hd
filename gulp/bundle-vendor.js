'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('bundle:vendor', function () {
  return bundleVendor(true);
});

gulp.task('bundle:vendor:dist', function () {
  return bundleVendor(false);
});

function bundleVendor(debug) {
  var basedir = process.cwd();
  var bundler = browserify({
    noparse: true,
    debug: debug
  });

  _.forEach(buildConfig.vendorPackages, function (requirePath, packageId) {
    bundler.require(requirePath, {
      expose: packageId,
      basedir: basedir
    });
  });

  return bundler.bundle()
    .on('error', function (error) {
      gutil.log(gutil.colors.red('bundle:vendor >>> ' + error.message));
      gutil.beep();
      this.end();
    })
    .pipe(source('vendor.bundle.js'))
    .pipe(gulp.dest('build/js/'));
}
