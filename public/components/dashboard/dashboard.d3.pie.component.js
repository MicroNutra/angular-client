(function() {
  'use strict'
  angular
    .module("app.dashboard")
    .component('d3DashboardPie', {
      controller: 'D3PieController',
      templateUrl: './components/dashboard/dashboard.d3.pie.html'
    })
  })
();
