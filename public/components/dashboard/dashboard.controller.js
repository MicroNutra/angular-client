(function () {
  'use strict'
  angular
    .module("app.dashboard")
    .controller('DashboardController', DashboardController)

  DashboardController.$inject = ['$http', '$state']

  function DashboardController($http, $state) {
    const vm = this

    vm.$onInit = $onInit;

    function $onInit () {
    }
  }

})();
