var argv = require('yargs').argv;
var gutil = require('gulp-util');

global.useMockBackend = argv['use-mock-backend'] ? true : false;

gutil.log('Using mock backend: ' + gutil.colors.green(global.useMockBackend));

require('require-dir')('./gulp');
