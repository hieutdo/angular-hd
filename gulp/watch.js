'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('src/styles/sass/**/*.scss', ['sass']);
  gulp.watch('src/app/**/*.js', ['jshint']);
  gulp.watch('src/app/**/*.html', ['bundle:templates']);
  gulp.watch('bower.json', ['wiredep']);
});
