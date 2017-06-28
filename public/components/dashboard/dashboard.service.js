(function() {
  'use strict'

  angular.module('app')
    .service('dashboardService', dashboardService)

    function dashboardService($http, $state, APP_CONFIG) {
      const vm = this

      vm.getUserInfo = getUserInfo
      vm.getFoodInfo = getFoodInfo
      vm.getMicroInfo = getMicroInfo


      function getUserInfo(id){
        return $http
        .get('http://ec2-54-148-52-85.us-west-2.compute.amazonaws.com/users/'+id)
        .then(res=>{
          console.log(res);
          return res
        })
      }

      function getFoodInfo(id){
        return $http
        .get('http://ec2-54-148-52-85.us-west-2.compute.amazonaws.com/api/food_log/'+id)
        .then(res=>{
          console.log(res);
          return res
        })
      }

      function getMicroInfo(id){
        console.log(id);
         return $http
        .get('http://ec2-54-148-52-85.us-west-2.compute.amazonaws.com/api/micro/'+id)
        // .then(res=>{
        //   console.log(res);
        //   return res.data.data[0]
        // })

      }



    }

}());
