(function () {
  'use strict'
  angular
    .module("app.dashboard")
    .controller('DashboardController', DashboardController)

  DashboardController.$inject = ['$http', '$state', 'dashboardService']

  function DashboardController($http, $state, dashboardService) {
    const vm = this

    vm.$onInit = $onInit;
    vm.addFood = addFood;
    vm.getFoodTracker = getFoodTracker;
    vm.testLog = testLog
    vm.firstName = ""
    vm.lastName = ""
    vm.userId = localStorage.getItem('user')
    vm.foodId = null
    vm.foodData = null
    vm.microData = []

    vm.getUser = getUser
    vm.getFood = getFood

    console.log(vm.userId);

    function $onInit () {
      getUser()
      getFood()
      vm.showAddFoodComponent = false;
    }

    function addFood (e) {
      e.preventDefault()
      vm.showAddFoodComponent = !vm.showAddFoodComponent
      console.log(vm.showAddFoodComponent);
    }

    function getFood(){
      return dashboardService.getFoodInfo(vm.userId)
      .then(res =>{
        vm.foodData = res.data.data
        console.log(vm.foodData);
        console.log(res.data.data[0].id)
        vm.foodId = res.data.data[0].id
        console.log(vm.foodId);
          vm.foodData.forEach(food=>{
             dashboardService.getMicroInfo(food.id)
            .then(data=>{
              console.log(data);
              vm.microData.push(data.data.data[0])
              console.log(vm.microData);
            })
          })
      }).then(res=>{
        console.log('microData', vm.microData);
      })
    }


    // function getMacro(){
    //   return dashboardService.getMacroInfo(vm.foodId)
    //   .then(res =>{
    //     console.log(res);
    //
    //   })
    // }



    function getUser(){
      return dashboardService.getUserInfo(vm.userId)
      .then(res=>{

        console.log(res);
        vm.firstName = res.data.data[0].first_name
        vm.lastName = res.data.data[0].last_name
      })
    }

    function getFoodTracker(e) {
      e.preventDefault()
      $state.go('dashboard')
    }
    function testLog(e) {
      e.preventDefault()
      console.log('clicked');
      $state.go('test')
    }
  }

})();
