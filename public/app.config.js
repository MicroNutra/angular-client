(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'about',
        url: '/',
        component: 'about'
      })
      .state({
        name: 'dashboard',
        url: '/dashboard',
        component: 'dashboard'
      })
      .state({
        name: 'foodTracker',
        url: '/dashboard/foodTracker',
        component: 'foodTracker'
      })
  }

})();
