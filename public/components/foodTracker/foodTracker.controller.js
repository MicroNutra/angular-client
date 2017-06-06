(function () {
  'use strict'
  angular
    .module("app.foodTracker")
    .controller('FoodTrackerController', FoodTrackerController)

  FoodTrackerController.$inject = ['$http', '$state', 'foodTrackerService']

  function FoodTrackerController($http, $state, foodTrackerService) {
    const vm = this

    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.foodQuery = ""

    function $onInit () {
    }

    function searchInput (query) {
      foodTrackerService.getGroups(query)
    }
  }

})();
