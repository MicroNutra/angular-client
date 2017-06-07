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
    vm.foodNotSelected = true;
    vm.showGroups = []
    vm.foodResults = []
    vm.selectedGroup = ""
    vm.searchResults = []
    vm.ndbno = ""

    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.selectGroup = selectGroup;
    vm.activateSearchButton = activateSearchButton;
    vm.selectFoodResult = selectFoodResult;
    vm.getQuantity = getQuantity;

    function $onInit () {

    }

    function searchInput (query) {
      return foodTrackerService.getGroups(query)
        .then(res => {
          console.log(res)
          vm.showGroups = res
        })
        .catch(err => console.log(err))

      // vm.showGroups = !vm.showGroups
      // console.log(vm.showGroups);
    }

    function activateSearchButton (e) {
      console.log(e.target);
      vm.groupNotSelected = !vm.groupNotSelected
      vm.selectedGroup = e.target.value
    }

    function selectFoodResult (e) {
      console.log(e.target.value);
      vm.foodNotSelected = !vm.foodNotSelected
      vm.ndbno = e.target.value
      console.log(vm.ndbno);
    }

    function selectGroup (query) {
      console.log(vm.selectedGroup);
      foodTrackerService.getSearchResults(vm.selectedGroup, query)
        .then(res => {
          vm.searchResults = res.data.list.item
        })
        .catch(err => console.log(err))
    }

    function getQuantity(e) {
      e.preventDefault()
      foodTrackerService.getFoodMeasures(vm.ndbno)
        .then(res => res)
        .catch(err => console.log(err))
    }
  }

})();
