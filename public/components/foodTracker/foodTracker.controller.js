(function () {
  'use strict'
  angular
    .module("app.foodTracker")
    .controller('FoodTrackerController', FoodTrackerController)

  FoodTrackerController.$inject = ['$http', '$state', '$scope',  'foodTrackerService']


  function FoodTrackerController($http, $state, $scope,  foodTrackerService) {
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
    vm.value = ""
    vm.unit =""
    vm.nutrientName = ""
    vm.nutrientGroup = ""
    vm.macro = {}
    vm.micro = {}
    vm.addName = ""
    vm.nutrientCounter = 1
    vm.img = vm.vid = {}
    vm.foodName = ""
    vm.isVitamin = false
    vm.isMineral = false

    vm.$onInit = $onInit;
    vm.searchInput = searchInput;
    vm.selectGroup = selectGroup;
    vm.activateSearchButton = activateSearchButton;
    vm.selectFoodResult = selectFoodResult;
    vm.getQuantity = getQuantity;
    vm.selectMeasurmentOption = selectMeasurmentOption;
    vm.getQuantity = getQuantity;
    vm.selectMeasurement = selectMeasurement;
    vm.showForm = showForm;
    vm.cancelForm = cancelForm;
    vm.uploadFoodImage = uploadFoodImage;
    vm.changed = changed;
    vm.getDashboard = getDashboard;

    function $onInit () {
      vm.showAddForm = false;
      vm.showMeasurmentsDiv = false;
      vm.showResults = false;
      vm.showManualSubmitButton = false;
      vm.showImageUploadForm = false;
      vm.imgAvailable=false;
      vm.vidAvailable=false;
    }

function getDashboard(e){
    e.preventDefault()
    $state.go("dashboard")
}

    function changed (){
        console.log('clicked')
    }
        var el = document.getElementById('the-photo-file-field')
        angular.element(el).bind('change', function( evt ) {
          $scope.$apply(function() {
            vm['img'] = evt.target.files;
            vm.imgAvailable=true;

            var reader = new FileReader();

            reader.onload = function(event) {
              $scope.$apply(function() {
                vm.the_url = event.target.result
              });
            };

            reader.readAsDataURL(evt.target.files[0]);
          });
        });


    function uploadFoodImage (e) {
      e.preventDefault()
      vm.showImageUploadForm = !vm.showImageUploadForm
    }

    function cancelForm (e) {
      e.preventDefault()
      vm.showAddForm = !vm.showAddForm;
      vm.foodQuery = ""
    }

    function showForm (e) {
      e.preventDefault()
      vm.showAddForm = !vm.showAddForm;
    }

    function searchInput (query) {
      vm.showManualSubmitButton = !vm.showManualSubmitButton
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
          console.log(res.data);
          vm.searchResults = res.data.list.item
          console.log(vm.searchResults);
          console.log("lkdnwlkdnwelknw");
        })
        .catch(err => console.log(err))
    }

    function getQuantity(e) {
      e.preventDefault()
      vm.showMeasurmentsDiv = !vm.showMeasurmentsDiv
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

    function selectMeasurmentOption(e, label){
      console.log(e.target);
      vm.measurementNotSelected = !vm.measurementNotSelected
      vm.measurment = label
      console.log(vm.measurment);
    }

    function selectMeasurement(e) {
      e.preventDefault()
      console.log(vm.foodObject)
      vm.nutrientsArray = vm.foodObject.data.foods[0].food.nutrients
      vm.foodName = vm.foodObject.data.foods[0].food.desc.name
      console.log(vm.nutrientsArray);
      vm.nutrientsArray.forEach(item => {
        console.log(item);
        console.log(normalizeData(item));

        vm.value = +item.measures[0].value
        vm.unit = item.unit
        vm.entry = (+vm.value*vm.quantity)+vm.unit
        item.name = normalizeData(item)
        console.log(vm.nutrientsArray);
        if (item.group === "Proximates"){
          vm.macro[item.name] = vm.entry
          console.log(vm.macro[item.name]);
        }else if(item.group === "Vitamins"){
          vm.isVitamin = true
          vm.micro["is_vitamin"] = vm.isVitamin
          vm.micro[item.name] = vm.entry
        }else if(item.group === "Minerals"){
          vm.isMineral = true
          vm.micro["is_mineral"] = vm.isMineral
          vm.micro[item.name] = vm.entry
        }
        // vm.nutrientCounter++
        console.log(vm.macro);
        console.log(vm.micro);
        console.log(vm.quantity);
        console.log(vm.measurment);
        foodTrackerService.postNutrients(vm.macro, vm.micro, vm.foodName, vm.quantity, vm.measurment)
      })

    }

    function normalizeData(item) {
      console.log(item);
      if (item.name.includes("Calcium")){
         item.name = "calcium"
      }
      else if(item.name.includes("Chromium")){
          item.name = "chromium"
       }
      else if(item.name.includes("Flouride")){
          item.name = "flouride"
       }
      else if(item.name.includes("Iodine")){
          item.name = "iodine"
       }
      else if(item.name.includes("Iron")){
          item.name = "iron"
       }
      else if(item.name.includes("Magnesium")){
          item.name = "magnesium"
       }
      else if(item.name.includes("Manganese")){
          item.name = "manganese"
       }
      else if(item.name.includes("Molybdenum")){
          item.name = "molybdenum"
       }
      else if(item.name.includes("Phosphorus")){
          item.name = "phosphorus"
       }
      else if(item.name.includes("Selenium")){
          item.name = "selenium"
       }
      else if(item.name.includes("Zinc")){
          item.name = "zinc"
       }
      else if(item.name.includes("Potassium")){
          item.name = "potassium"
       }
      else if(item.name.includes("Sodium")){
          item.name = "sodium"
       }
      else if(item.name.includes("Chloride")){
          item.name = "chloride"
       }
      else if(item.name.includes("Vitamin A")){
          item.name = "vitamin_a"
       }
      else if(item.name.includes("Vitamin B-12")){
          item.name = "vitamin_b12"
       }
      else if(item.name.includes("Vitamin C")){
          item.name = "vitamin_c"
       }
      else if(item.name.includes("Vitamin D")){
          item.name = "vitamin_d"
       }
      else if(item.name.includes("Vitamin E")){
          item.name = "vitamin_e"
       }
      else if(item.name.includes("Vitamin K")){
          item.name = "vitamin_k"
       }
      else if(item.name.includes("Thiamin")){
          item.name = "thiamin"
       }
      else if(item.name.includes("Riboflavin")){
          item.name = "riboflavin"
       }
      else if(item.name.includes("Pathoethenic")){
          item.name = "pathoethenic_acid"
       }
      else if(item.name.includes("Biotin")){
          item.name = "biotin"
       }
      else if(item.name.includes("Choline")){
          item.name = "choline"
       }
      else if(item.name.includes("Protein")){
          item.name = "protein"
       }
      else if(item.name.includes("Total lipid")){
          item.name = "fats"
       }
      else if(item.name.includes("Carbohydrate")){
          item.name = "carbohydrates"
       }
      else if(item.name.includes("Energy")){
          item.name = "calories"
       }
      else if(item.name.includes("Fiber")){
          item.name = "fibers"
       }
      else if(item.name.includes("Sugars")){
          item.name = "sugars"
       }
      else if(item.name.includes("Water")){
          item.name = "water"
       }
       return item.name
    }
  }

})();
