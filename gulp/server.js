'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');
var proxyConf = require('./proxy');

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
      target: proxyConf.target
    });
    config.server.middleware = function (req, res, next) {
      if (req.url.indexOf(proxyConf.apiPrefix) !== -1) {
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
    'build/css/*.css',
    'build/js/*.js',
    'src/index.html',
    'src/assets/**/*'
  ];
  initBrowserSync(baseDir, files, false);
});

gulp.task('server:dist', function () {
  initBrowserSync('dist');
});
