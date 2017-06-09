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
    vm.firstName = ""
    vm.lastName = ""
    vm.userId = localStorage.getItem('user')

    console.log(vm.userId);

    function $onInit () {
      return dashboardService.getUserInfo(vm.userId)
      .then(res=>{

        console.log(res);
        vm.firstName = res.first_name
        vm.lastName = res.last_name
      })

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
