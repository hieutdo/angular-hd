'use strict';

var gulp = require('gulp');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var bowerFiles = require('main-bower-files');

gulp.task('fonts', function () {
  return gulp.src(bowerFiles().concat('fonts/**/*'))
    .pipe(filter('**/*.{eot,svg,ttf,woff}'))
    .pipe(flatten())
    .pipe(gulp.dest('dist/fonts'));
});
