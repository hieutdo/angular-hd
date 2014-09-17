'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
//var unpathify = require('gulp-unpathify');

var exclude = ['bootstrap-sass-official'];
var bowerPackageIds = _.difference(_.keys(require('../bower.json').dependencies), exclude);

gulp.task('scripts', ['jshint', 'js:vendor', 'js:templates', 'js:app']);

gulp.task('js:templates', function () {
  return gulp.src('src/app/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true
    }))
    .pipe(templateCache('templates.js', {
      root: 'app/',
      module: 'app'
    }))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('js:vendor', function () {
  var b = browserify({debug: true});

  bowerPackageIds.forEach(function (id) {
    b.require(bowerResolve.fastReadSync(id), {
       expose: id
    });
  });

  return b.bundle()
    .on('error', function (error) {
      gutil.log(gutil.colors.red('browserify: ' + error.message));
      gutil.beep();
      this.end();
    })
    .pipe(source('vendor.bundle.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('js:app', function() {
  var w = watchify(browserify('./src/app/app.js', _.extend(watchify.args, {debug: true, fullPaths: false})));

  bowerPackageIds.forEach(function (lib) {
    w.external(lib);
  });

  function rebundle() {
    return w.bundle()
      .on('error', function (error) {
        gutil.log(gutil.colors.red('watchify: ' + error.message));
        gutil.beep();
        this.end();
      })
      .pipe(source('app.bundle.js'))
//      .pipe(unpathify())
      .pipe(gulp.dest('build/js/'));
  }

  w.on('update', rebundle);

  return rebundle();
});
