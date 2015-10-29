'use strict';

/* jshint -W098 */
angular.module('mean.roadtriphomepage').controller('RoadtriphomepageController', ['$scope', 'Global', 'Roadtriphomepage',
  function($scope, Global, Roadtriphomepage) {
    $scope.global = Global;
    $scope.package = {
      name: 'roadtriphomepage'
    };
  }
]);
