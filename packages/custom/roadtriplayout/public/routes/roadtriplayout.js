'use strict';

angular.module('mean.roadtriplayout').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('roadtriplayout example page', {
      url: '/roadtriplayout/example',
      templateUrl: 'roadtriplayout/views/index.html'
    });
  }
]);
