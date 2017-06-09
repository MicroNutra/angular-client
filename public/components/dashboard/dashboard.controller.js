(function () {
  'use strict'
  angular
    .module("app.dashboard")
    .controller('DashboardController', DashboardController)

  DashboardController.$inject = ['$http', '$state', 'dashboardService']

  function DashboardController($http, $state, dashboardService) {
    const vm = this

    vm.$onInit = $onInit;
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



    }

    function getFood(){
      return dashboardService.getFoodInfo(vm.userId)
      .then(res =>{
        vm.foodData = res.data.data
        console.log(vm.foodData);
        console.log(res.data.data[0].id)
        vm.foodId = res.data.data[0].id
        console.log(vm.foodId);
        return true
      })
      .then(res=>{
          // vm.foodData.forEach(food=>{
          console.log(dashboardService.getMicroInfo(vm.foodData[0].id));
          //   vm.microData.push(dashboardService.getMicroInfo(food.id))
          // })
            console.log(vm.microData);
            return
      }).then(res=>{
        console.log("true");
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
      $state.go('foodTracker')
    }
    function testLog(e) {
      e.preventDefault()
      console.log('clicked');
      $state.go('test')
    }
  }

})();
