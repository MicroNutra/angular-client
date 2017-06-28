(function () {
  'use strict'
  angular
    .module("app.addFood")
    .controller('AddFoodController', AddFoodController)

  AddFoodController.$inject = ['$state', '$scope', 'addFoodService', '$location']

  function AddFoodController($state, $scope, addFoodService, $location) {
    const vm = this
    vm.$onInit = $onInit

    vm.activateSearchButton = activateSearchButton
    vm.cancelForm = cancelForm
    vm.chooseFile = chooseFile
    vm.getDashboard = getDashboard
    vm.getQuantity = getQuantity
    vm.getUser = getUser
    vm.searchInput = searchInput
    vm.selectGroup = selectGroup
    vm.selectFoodResult = selectFoodResult
    vm.selectMeasurement = selectMeasurement
    vm.selectMeasurmentOption = selectMeasurmentOption
    vm.showForm = showForm
    vm.uploadFoodImage = uploadFoodImage
    vm.userId = localStorage.getItem('user')

    function $onInit () {
      vm.addName = ""
      vm.entry = ""
      vm.firstName = ""
      vm.foodQuery = ""
      vm.foodResults = []
      vm.foodName = ""
      vm.foodNotSelected = true
      vm.foodObject = {}
      vm.groupNotSelected = true
      vm.img = {}
      vm.imgAvailable= false
      vm.isVitamin = false
      vm.isMineral = false
      vm.lastName = ""
      vm.macro = {}
      vm.measurment = ""
      vm.measurementNotSelected = true
      vm.micro = {}
      vm.ndbno = ""
      vm.nutrientCounter = 1
      vm.nutrientGroup = ""
      vm.nutrientName = ""
      vm.nutrientsArray = []
      vm.quantity = 1
      vm.searchResults = []
      vm.selectedGroup = ""
      vm.showGroups = []
      vm.showMeasurments = []
      vm.showAddForm = false
      vm.showMeasurmentsDiv = false
      vm.showResults = false
      vm.showManualSubmitButton = false
      vm.showImageUploadForm = false
      vm.the_url
      vm.unit = ""
      vm.value = ""
      vm.vidAvailable=false
      getUser()
    }

    function activateSearchButton (e) {
      vm.groupNotSelected = !vm.groupNotSelected
      vm.selectedGroup = e.target.value
    }

    function cancelForm (e) {
      e.preventDefault()
      vm.showAddForm = !vm.showAddForm;
      vm.foodQuery = ""
    }

    function chooseFile () {
      var el = document.getElementById('the-photo-file-field')
      angular.element(el).bind('change', evt => {
        $scope.$apply( () => {
          vm['img'] = evt.target.files;
          vm.imgAvailable = true;
          var reader = new FileReader();
          reader.onload = event => {
            $scope.$apply( () => {
              vm.the_url = event.target.result
              console.log(vm.the_url);
              addFoodService.sendToS3(vm.the_url)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            });
          };
          reader.readAsDataURL(evt.target.files[0]);
          console.log(evt.target.files);
          console.log(vm.the_url);
        });
      });
    }

    function getDashboard (e) {
        e.preventDefault()
        $state.go("dashboard")
    }


    function getQuantity (e) {
      e.preventDefault()
      vm.showMeasurmentsDiv = !vm.showMeasurmentsDiv
      addFoodService.getFoodMeasures(vm.ndbno)
        .then(res => {
          vm.foodObject = res
          vm.measuresArray =  res.data.foods[0].food.nutrients[0].measures
          vm.measuresArray.forEach(item => {
            vm.showMeasurments.push(item.label)
        })
      }).catch(err => console.log(err))
    }

    function getUser() {
      return addFoodService.getUserInfo(vm.userId)
      .then(res => {
        vm.firstName = res.data.data[0].first_name
        vm.lastName = res.data.data[0].last_name
      })
    }

    function searchInput (query) {
      vm.showManualSubmitButton = !vm.showManualSubmitButton
      return addFoodService.getGroups(query)
        .then(res => {
          vm.showGroups = res
        })
        .catch(err => console.log(err))
    }

    function selectGroup (query) {
      vm.showResults = !vm.showResults
      addFoodService.getSearchResults(vm.selectedGroup, query)
        .then(res => {
          vm.searchResults = res.data.list.item
        })
        .catch(err => console.log(err))
    }

    function selectFoodResult (e) {
      vm.foodNotSelected = !vm.foodNotSelected
      vm.ndbno = e.target.value
    }

    function selectMeasurement (e) {
      e.preventDefault()
      vm.nutrientsArray = vm.foodObject.data.foods[0].food.nutrients
      vm.foodName = vm.foodObject.data.foods[0].food.desc.name
      vm.nutrientsArray.forEach(item => {
        vm.value = +item.measures[0].value
        vm.unit = item.unit
        vm.entry = (+vm.value * vm.quantity) + vm.unit
        item.name = normalizeData(item)
        if (item.group === "Proximates") {
          vm.macro[item.name] = vm.entry
        } else if(item.group === "Vitamins") {
          vm.isVitamin = true
          vm.micro["is_vitamin"] = vm.isVitamin
          vm.micro[item.name] = vm.entry
        } else if(item.group === "Minerals") {
          vm.isMineral = true
          vm.micro["is_mineral"] = vm.isMineral
          vm.micro[item.name] = vm.entry
        }
      })
      addFoodService.postNutrients(vm.macro, vm.micro, vm.foodName, vm.quantity, vm.measurment)
      .then(res => toDashBoard())
    }

    function selectMeasurmentOption (e, label) {
      vm.measurementNotSelected = !vm.measurementNotSelected
      vm.measurment = label
    }

    function showForm (e) {
      e.preventDefault()
      vm.showAddForm = !vm.showAddForm;
    }

    function uploadFoodImage (e) {
      e.preventDefault()
      vm.showImageUploadForm = !vm.showImageUploadForm
    }


    function toDashBoard () {
      $location.path('/dashboard');
    }

    function normalizeData (item) {
      if (item.name.includes("Calcium")) {
        item.name = "calcium"
      }
      else if(item.name.includes("Chromium")) {
        item.name = "chromium"
       }
      else if(item.name.includes("Folate")) {
        item.name = "folate"
       }
      else if(item.name.includes("Flouride")) {
        item.name = "flouride"
       }
      else if(item.name.includes("Niacin")) {
        item.name = "niacin"
       }
      else if(item.name.includes("Iodine")) {
        item.name = "iodine"
       }
      else if(item.name.includes("Iron")) {
        item.name = "iron"
       }
      else if(item.name.includes("Magnesium")) {
        item.name = "magnesium"
       }
      else if(item.name.includes("Manganese")) {
        item.name = "manganese"
       }
      else if(item.name.includes("Molybdenum")) {
        item.name = "molybdenum"
       }
      else if(item.name.includes("Phosphorus")) {
        item.name = "phosphorus"
       }
      else if(item.name.includes("Selenium")) {
        item.name = "selenium"
       }
      else if(item.name.includes("Zinc")) {
        item.name = "zinc"
       }
      else if(item.name.includes("Potassium")) {
        item.name = "potassium"
       }
      else if(item.name.includes("Sodium")) {
        item.name = "sodium"
       }
      else if(item.name.includes("Chloride")) {
        item.name = "chloride"
       }
      else if(item.name.includes("Vitamin A")) {
        item.name = "vitamin_a"
       }
      else if(item.name.includes("Vitamin B-6")) {
        item.name = "vitamin_b12"
       }
      else if(item.name.includes("Vitamin B-12")) {
        item.name = "vitamin_b12"
       }
      else if(item.name.includes("Vitamin C")) {
        item.name = "vitamin_c"
       }
      else if(item.name.includes("Vitamin D")) {
        item.name = "vitamin_d"
       }
      else if(item.name.includes("Vitamin E")) {
        item.name = "vitamin_e"
       }
      else if(item.name.includes("Vitamin K")) {
        item.name = "vitamin_k"
       }
      else if(item.name.includes("Thiamin")) {
        item.name = "thiamin"
       }
      else if(item.name.includes("Riboflavin")) {
        item.name = "riboflavin"
       }
      else if(item.name.includes("Pathoethenic")) {
        item.name = "pathoethenic_acid"
       }
      else if(item.name.includes("Biotin")) {
        item.name = "biotin"
       }
      else if(item.name.includes("Choline")) {
        item.name = "choline"
       }
      else if(item.name.includes("Protein")) {
        item.name = "protein"
       }
      else if(item.name.includes("Total lipid")) {
        item.name = "fats"
       }
      else if(item.name.includes("Carbohydrate")) {
        item.name = "carbohydrates"
       }
      else if(item.name.includes("Energy")) {
        item.name = "calories"
       }
      else if(item.name.includes("Fiber")) {
        item.name = "fibers"
       }
      else if(item.name.includes("Sugars")) {
        item.name = "sugars"
       }
      else if(item.name.includes("Water")) {
        item.name = "water"
       }
      return item.name
    }
  }

})();
