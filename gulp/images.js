'use strict';

var gulp = require('gulp');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('src/assets/images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'));
});
