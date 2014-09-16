exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['test/e2e/**/*.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
