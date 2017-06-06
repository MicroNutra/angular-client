(function () {
  'use strict'
  angular
    .module("app.foodTracker")
    .controller('FoodTrackerController', FoodTrackerController)

  FoodTrackerController.$inject = ['$http', '$state', 'foodTrackerService']

  function FoodTrackerController($http, $state, foodTrackerService) {
    const vm = this;
    vm.foodQuery = "";
    vm.groupNotSelected = true;
    vm.showGroups = []
    vm.foodResults = []

    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.selectGroup = selectGroup;


    function $onInit () {
      vm.showGroups = false;
    }

    function searchInput (query) {
      return foodTrackerService.getGroups(query)
        .then(res => {
          console.log(res)
          vm.showGroups = res
        })
      // vm.showGroups = !vm.showGroups
      // console.log(vm.showGroups);
    }

    function selectGroup (group) {
      vm.groupNotSelected = !vm.groupNotSelected
    }
  }

})();
