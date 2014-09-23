'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('styles/sass/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['jshint']);
  gulp.watch('src/app/**/*.html', ['bundle:templates']);
  gulp.watch('bower.json', ['wiredep']);
});
