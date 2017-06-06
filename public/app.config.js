(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'dashboard',
        url: '/',
        component: 'dashboard'
      })
  }

})();
