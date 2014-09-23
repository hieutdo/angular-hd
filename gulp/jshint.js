'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('jshint', function () {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(plumber())
    .pipe(jscs())
    .pipe(plumber());
});
