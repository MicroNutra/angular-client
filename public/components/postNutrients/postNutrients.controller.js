(function () {
  'use strict'
  angular
    .module("app.postNutrients")
    .controller('PostNutrientsController', PostNutrientsController)

  PostNutrientsController.$inject = ['$http', '$state', 'postNutrientsService']

  function PostNutrientsController($http, $state, postNutrientsService) {
    const vm = this

    vm.$onInit = $onInit;
    vm.getTest = getTest


    function $onInit () {
    }

    function getTest(e){
      e.preventDefault
      console.log("controller Check");
      postNutrientsService.getTestData()
    }

  }

})();
