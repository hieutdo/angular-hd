'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', function () {
  runSequence(
    ['scripts', 'styles', 'watch'],
    'karma:dev',
    'server:dev'
  );
});

gulp.task('serve:dist', function () {
  runSequence(
    'clean',
    ['scripts:dist', 'styles', 'assets'],
    'compile',
    'karma:dist',
    'server:dist'
  );
});
