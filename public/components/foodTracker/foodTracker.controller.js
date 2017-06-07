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
          vm.showGroups = res
          $state.go($state.$current, null, { reload: true })
        })
        .catch(err => console.log(err))

      // vm.showGroups = !vm.showGroups
      // console.log(vm.showGroups);
    }

    function activateSearchButton (e) {
      vm.groupNotSelected = !vm.groupNotSelected
      vm.selectedGroup = e.target.value
    }

    function selectGroup (query) {
      console.log(vm.selectedGroup);
      foodTrackerService.getSearchResults(vm.selectedGroup, query)
        .then(res => {
          console.log(res)
          vm.searchResults = res.data.list.item
        })
        .catch(err => console.log(err))
    }
  }

})();
