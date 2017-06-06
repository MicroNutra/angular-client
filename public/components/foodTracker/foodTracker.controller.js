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
    vm.showGroups = false;

    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.selectGroup = selectGroup;


    function $onInit () {
    }

    function searchInput (query) {
      foodTrackerService.getGroups(query)
      vm.showGroups = !vm.showGroups
      console.log(vm.showGroups);
    }

    function selectGroup (group) {
      vm.groupNotSelected = !vm.groupNotSelected
    }
  }

})();
