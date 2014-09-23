'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');

function initBrowserSync(baseDir, files, useProxy, browser) {
  var config = {
    server: {
      baseDir: baseDir
    },
    browser: browser ? browser : 'default',
    open: false,
    notify: false
  };

  if (useProxy) {
    var proxy = httpProxy.createProxyServer({
      target: buildConfig.proxy.target
    });

    config.server.middleware = function (req, res, next) {
      if (req.url.indexOf(buildConfig.proxy.apiPrefix) !== -1) {
        proxy.web(req, res);
      } else {
        next();
      }
    };
  }

  browserSync.instance = browserSync.init(files, config);
}

gulp.task('server:dev', function () {
  var baseDir = ['.', 'src'];
  var files = [
    'src/index.html',
    'build/**/*',
    'images/**/*',
    'fonts/**/*'
  ];
  initBrowserSync(baseDir, files, false);
});

gulp.task('server:dist', function () {
  initBrowserSync('dist');
});
