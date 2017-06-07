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
    vm.quantity = 1
    vm.unit =""
    vm.foodObject = {}
    vm.nutrientsArray = []
    vm.entry = ""
    vm.eqv = ""
    vm.unit =""
    vm.nutrientName = ""
    vm.nutrientGroup = ""


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
      e.preventDefault()
      console.log("checking get qunaity");
      foodTrackerService.getFoodMeasures(vm.ndbno)
        .then(res=> {
          console.log(res);
          vm.foodObject = res
          console.log(vm.foodObject);
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
      e.preventDefault()
      console.log(vm.foodObject)
      vm.nutrientsArray = vm.foodObject.data.foods[0].food.nutrients
      console.log(vm.nutrientsArray);
      vm.nutrientsArray.forEach(item => {
        console.log(item);
        vm.nutrientName = item.name;
        vm.nutrientGroup = item.group
        vm.eqv = +item.measures[vm.measurment].eqv
        vm.unit = item.measures[vm.measurment].eunit
        vm.entry = (+vm.eqv*vm.quantity)+vm.unit
        console.log(+item.measures[vm.measurment].eqv);
        console.log(item.measures[vm.measurment].eunit);
        console.log(vm.nutrientName);
        console.log(vm.nutrientGroup);
        console.log(vm.eqv);
        console.log(vm.unit);
        console.log(vm.entry);
      })


    }
  }

})();
