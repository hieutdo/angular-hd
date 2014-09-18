'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var gutil = require('gulp-util');
var slash = require('slash');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');

var exclude = ['bootstrap-sass-official'];
var bowerPackageIds = _.difference(_.keys(require('../bower.json').dependencies), exclude);

function bundleVendor(debug) {
  var basedir = process.cwd();
  var b = browserify({
    noparse: true,
    debug: debug
  });

  bowerPackageIds.forEach(function (id) {
    var packagePath = bowerResolve.fastReadSync(id);
    packagePath = slash(packagePath.replace(basedir, '.'));

    b.require(packagePath, {
      expose: id,
      basedir: basedir
    });
  });

  return b.bundle()
    .on('error', function (error) {
      gutil.log(gutil.colors.red('Browserify > Vendor: ' + error.message));
      gutil.beep();
      this.end();
    })
    .pipe(source('vendor.bundle.js'))
    .pipe(gulp.dest('build/js/'));
}

gulp.task('bundle:vendor', function () {
  return bundleVendor(true);
});

gulp.task('bundle:vendor:dist', function () {
  return bundleVendor(false);
});
