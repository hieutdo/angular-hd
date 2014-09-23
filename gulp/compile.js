'use strict';

var gulp = require('gulp');
var filter = require('gulp-filter');
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var rev = require('gulp-rev');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var csso = require('gulp-csso');
var revReplace = require('gulp-rev-replace');

gulp.task('compile', function () {
  var jsFilter = filter('**/*.js');
  var cssFilter = filter('**/*.css');

  return gulp.src('src/index.html')
    .pipe(useref.assets())
    .pipe(rev())

    // process js
    .pipe(jsFilter)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(jsFilter.restore())

    // process css
    .pipe(cssFilter)
    .pipe(replace('../../bower_components/bootstrap-sass-official/assets/fonts/bootstrap', '../fonts'))
    .pipe(csso())
    .pipe(cssFilter.restore())

    .pipe(useref.restore())
    .pipe(useref())
    .pipe(revReplace())

    .pipe(gulp.dest('dist'));
});
