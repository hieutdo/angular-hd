'use strict';

var gulp = require('gulp');

gulp.task('scripts', [
  'jshint',
  'bundle:vendor',
  'bundle:app',
  'bundle:templates'
]);

gulp.task('scripts:dist', [
  'jshint',
  'bundle:vendor:dist',
  'bundle:app:dist',
  'bundle:templates'
]);
