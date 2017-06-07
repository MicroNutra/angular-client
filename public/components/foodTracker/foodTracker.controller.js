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
    vm.measurementNotSelected = true;
    vm.showGroups = []
    vm.foodResults = []
    vm.selectedGroup = ""
    vm.searchResults = []
    vm.ndbno = ""
    vm.measurment = ""
    // vm.measuresArray =[]
    vm.showMeasurments =[]
    vm.quantity =""
    vm.unit =""


    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.selectGroup = selectGroup;
    vm.activateSearchButton = activateSearchButton;
    vm.selectFoodResult = selectFoodResult;
    vm.getQuantity = getQuantity;
    vm.selectMeasurmentOption = selectMeasurmentOption;
    vm.getQuantity = getQuantity;
    vm.selectMeasurement = selectMeasurement


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
      console.log(query);
      console.log(vm.selectedGroup);
      foodTrackerService.getSearchResults(vm.selectedGroup, query)
        .then(res => {
          vm.searchResults = res.data.list.item
          console.log(vm.searchResults);
          console.log("lkdnwlkdnwelknw");
        })
        .catch(err => console.log(err))
    }

    function getQuantity(e) {
      console.log("checking get qunaity");
      foodTrackerService.getFoodMeasures(vm.ndbno)
        .then(res=> {
          vm.measuresArray =  res.data.foods[0].food.nutrients[0].measures
          console.log(vm.measuresArray);
          vm.measuresArray.forEach(item => {
            vm.showMeasurments.push(item.label)
        })
        console.log(vm.showMeasurments);
      }).catch(err => console.log(err))
      }

    function selectMeasurmentOption(e){
      console.log(e.target);
      vm.measurementNotSelected = !vm.measurementNotSelected
      vm.measurment = e.target.value
      console.log(vm.measurment);
      // console.log(vm.quantity);
      // console.log(vm.unit);
    }

    function selectMeasurement(e) {
      console.log("clicked");

    }
  }

})();
