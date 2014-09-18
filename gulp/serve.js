'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', function () {
  runSequence(['scripts', 'styles', 'watch'], 'karma:watch', 'server:dev');
});

gulp.task('serve:dist', function () {
  runSequence('clean', ['scripts:dist', 'styles', 'assets'], 'karma:run', 'compile', 'server:dist');
});
