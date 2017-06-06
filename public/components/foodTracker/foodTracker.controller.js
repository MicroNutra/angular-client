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
    vm.selectedGroup = ""
    vm.searchResults = []

    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.selectGroup = selectGroup;
    vm.activateSearchButton = activateSearchButton;

    function $onInit () {

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

    function activateSearchButton () {
      vm.groupNotSelected = !vm.groupNotSelected
    }

    function selectGroup (group, query) {

      vm.selectedGroup = group
      foodTrackerService.getSearchResults(group, query)
        .then(res => {
          console.log(res)
          vm.searchResults = res.data.list.item
        })
        .catch(err => console.log(err))
    }
  }

})();
