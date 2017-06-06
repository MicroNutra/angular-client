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
    vm.testLog = testLog

    function $onInit () {
    }

    function getFoodTracker(e) {
      e.preventDefault()
      $state.go('foodTracker')
    }
    function testLog(e) {
      e.preventDefault()
      console.log('clicked');
      $state.go('test')
    }
  }

})();
