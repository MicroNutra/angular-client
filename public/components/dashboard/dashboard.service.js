(function() {
  'use strict'

  angular.module('app')
    .service('dashboardService', dashboardService)

    function dashboardService($http, $state, APP_CONFIG) {

      vm.getUserInfo = getUserInfo


      getUserInfo(id){
        return $http
        .get('http://ec2-34-208-220-169.us-west-2.compute.amazonaws.com/user/'+id)
        .then(res=>{
          console.log(res);
        })
      }



    }

}());
