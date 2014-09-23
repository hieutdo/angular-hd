'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rubySass = require('gulp-ruby-sass');
var autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('styles/sass/main.scss')
    .pipe(plumber())
    .pipe(rubySass({style: 'expanded'}))
    .pipe(autoPrefixer('last 3 version'))
    .pipe(gulp.dest('build/css/'));
});
