'use strict';

describe('Home Controller', function () {
  var scope;

  beforeEach(module('app'));
  beforeEach(module('app.home'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function ($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('HomeController', {
      $scope: scope
    });

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length === 8).toBeTruthy();
  }));
});
