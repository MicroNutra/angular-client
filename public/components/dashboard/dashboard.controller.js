(function () {
  'use strict'
  angular
    .module("app.dashboard")
    .controller('DashboardController', DashboardController)

  DashboardController.$inject = ['$http', '$state']

  function DashboardController($http, $state) {
    const vm = this

    vm.$onInit = $onInit;
    vm.getFoodTracker = getFoodTracker;

    function $onInit () {
    }

    function getFoodTracker(e) {
      e.preventDefault()
      $state.go('foodTracker')
    }
  }

})();
