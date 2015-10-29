'use strict';

/* jshint -W098 */
angular.module('mean.roadtriplayout').controller('RoadtriplayoutController', ['$scope', 'Global', 'Roadtriplayout',
  function($scope, $http, Global, Roadtriplayout) {
    $scope.global = Global;
    $scope.package = {
      name: 'roadtriplayout'
    };
  }
])
.config(['$viewPathProvider', function($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'roadtriplayout/views/index.html');
}]);
