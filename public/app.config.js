(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'posts',
        url: '/',
        component: 'posts'
      })
      .state({
        name: 'editPost',
        url: '/posts/:id/edit',
        component: 'editPost'
      })
  }

}());
