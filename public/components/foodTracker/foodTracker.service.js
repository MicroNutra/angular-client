(function() {
  'use strict'

  angular.module('app')
    .service('foodTrackerService', foodTrackerService)

    function foodTrackerService ($http, $state, APP_CONFIG) {
      const vm = this
      vm.foodResults = []
      vm.groups = []
      vm.measuresArray = []
      vm.nutrientObject = {}
      vm.userId = localStorage.getItem('user')

      vm.getFoodMeasures = getFoodMeasures;
      vm.getGroups = getGroups;
      vm.getSearchResults = getSearchResults;
      vm.getUserInfo = getUserInfo
      vm.postNutrients = postNutrients
      vm.sendToS3 = sendToS3

      function getFoodMeasures (ndbno) {
        return $http
          .get('https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + ndbno + '&type=b&format=json&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
          .then(res => {
            vm.nutrientObject = res
            return vm.nutrientObject
            })
            .catch(err => console.log(err))
      }

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
            return vm.groups
          })
          .catch(err => console.log(err))
      }

      function getSearchResults (group, query) {
        return $http
        .get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + query + '&offset=0&ds=Standard%20Reference&fg=' + group + '&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
        .then(res => res)
        .catch(err => console.log(err))
      }

      function getUserInfo (id) {
        return $http
          .get(APP_CONFIG.API_BASE_URL + 'users/' + id)
          .then(res => res)
          .catch(err => console.log(err))
      }

      function postNutrients(macro, micro, name, quantity, measurement){
        return $http
          .post(APP_CONFIG.API_BASE_URL + 'api/food_log/' + vm.userId, {macro, micro, name, quantity, measurement})
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
      }

      function sendToS3 (img) {
        return $http
          .post('http://ec2-54-71-205-18.us-west-2.compute.amazonaws.com/image', {img})
      }
    }
}());
