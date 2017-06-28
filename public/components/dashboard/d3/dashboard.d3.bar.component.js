(function() {
  'use strict'
  angular
    .module("app.dashboard")
    .component('d3DashboardBar', {
      controller: 'D3BarController',
      templateUrl: './components/dashboard/d3/dashboard.d3.bar.html'
    })
  })
();
