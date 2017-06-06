(function() {
  'use strict';

  angular.module('app').config(config).constant('APP_CONFIG',{
    API_BASE_URL: 'http://ec2-34-208-220-169.us-west-2.compute.amazonaws.com/'
  })

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
      .state({
        name: 'test',
        url: '/dashboard/postNutrients',
        component: 'postNutrients'
      })
      .state({
          name: 'signIn',
          url: '/signIn',
          component: 'signIn'
        })
  }

})();
