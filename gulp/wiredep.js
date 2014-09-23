'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
  gulp.src('styles/sass/main.scss')
    .pipe(wiredep())
    .pipe(gulp.dest('styles/sass'));

  gulp.src('src/index.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass-official']
    }))
    .pipe(gulp.dest('src'));
});
