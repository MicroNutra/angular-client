(function() {
  'use strict'
  angular
    .module("app.dashboard")
    .component('dashboard', {
      controller: 'DashboardController',
      templateUrl: './components/dashboard/dashboard.html'
    })
  })
();
