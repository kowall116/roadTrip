'use strict';

angular.module('mean.roadtriphomepage').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('roadtriphomepage example page', {
      url: '/roadtriphomepage/example',
      templateUrl: 'roadtriphomepage/views/index.html'
    });
  }
]);
