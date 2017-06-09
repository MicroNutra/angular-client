(function() {
  'use strict'
  angular
    .module("app.dashboard.d3")
    .component('d3Dashboard', {
      controller: 'D3Controller',
      templateUrl: './components/dashboard/d3.html'
    })
  })
();

$location.path('/dashboard')
