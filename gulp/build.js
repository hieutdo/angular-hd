'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function () {
  runSequence('clean', ['scripts', 'styles', 'assets'], 'karma:run', 'compile');
});
