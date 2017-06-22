(function() {
  'use strict'

  angular.module('app')
    .service('foodTrackerService', foodTrackerService)

    function foodTrackerService($http, $state, APP_CONFIG) {
      const vm = this
      vm.groups = []
      vm.measuresArray = []
      vm.foodResults = []
      vm.nutrientObject = {}
      vm.userId = localStorage.getItem('user')


      vm.getGroups = getGroups;
      vm.getSearchResults = getSearchResults;
      vm.getFoodMeasures = getFoodMeasures;
      vm.postNutrients = postNutrients
      vm.getUserInfo = getUserInfo

      function getGroups (query) {
        return $http
          .get('https://api.nal.usda.gov/ndb/search/?format=json&max=200&q=' + query + '&offset=0&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
          .then(res => {
            vm.foodResults = res.data.list.item
            vm.groups = []
            vm.foodResults.forEach(food => {
              if (!vm.groups.includes(food.group)) {
                vm.groups.push(food.group)
              }
            })
            console.log(vm.groups);
            return vm.groups
          })
          .catch(err => console.log(err))
      }

      function getUserInfo(id){
        return $http
        .get('http://ec2-54-148-52-85.us-west-2.compute.amazonaws.com/users/'+id)
        .then(res=>{
          console.log(res);
          return res
        })
      }

      function getSearchResults (group, query) {
        return $http
          .get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + query + '&offset=0&ds=Standard%20Reference&fg=' + group + '&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
          .then(res => res)
          .catch(err => console.log(err))
      }

      function getFoodMeasures(ndbno) {
        console.log("Checking measures");
        return $http
          .get('https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + ndbno + '&type=b&format=json&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
          .then(res => {
            vm.nutrientObject = res
            return vm.nutrientObject
            })
            .catch(err => console.log(err))
      }

      function postNutrients(macro, micro, name, quantity, measurement){
        console.log(macro, micro, name, quantity, measurement);
        return $http
          .post(APP_CONFIG.API_BASE_URL+'api/food_log/'+vm.userId, {macro, micro, name, quantity, measurement})
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
      }


    }

}());
