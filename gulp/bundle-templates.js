'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');

gulp.task('bundle:templates', function () {
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
