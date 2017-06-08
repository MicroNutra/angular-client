(function () {
  'use strict'
  angular
    .module("app.foodTracker")
    .controller('FoodTrackerController', FoodTrackerController)

  FoodTrackerController.$inject = ['$http', '$state', 'foodTrackerService']


  function FoodTrackerController($http, $state, foodTrackerService) {
    const vm = this;
    vm.showResults = false;
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
    vm.value = ""
    vm.unit =""
    vm.nutrientName = ""
    vm.nutrientGroup = ""
    vm.macro = {}
    vm.micro = {minerals:{},vitamins:{}}
    vm.addName = ""
    vm.nutrientCounter = 1


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
        vm.showResults = !vm.showResults
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
        vm.value = +item.measures[vm.measurment].value
        vm.unit = item.unit
        vm.entry = (+vm.value*vm.quantity)+vm.unit
        console.log(vm.nutrientsArray);
        if (item.group === "Proximates"){
          let name = vm.addName
          vm.addName = item.name
          vm.macro[item.name] = vm.entry
          console.log(vm.macro[name]);
        }else if(item.group === "Vitamins"){
          let vname = vm.addName
          vm.addName = item.name
          vm.micro.vitamins[item.name] = vm.entry
        }else if(item.group === "Minerals"){
          let mname = vm.addName
          vm.addName = item.name
          vm.micro.minerals[item.name] = vm.entry
        }
        vm.nutrientCounter++
        console.log(vm.macro);
        console.log(vm.micro);
        console.log(item);
      })
    }
  }

})();
