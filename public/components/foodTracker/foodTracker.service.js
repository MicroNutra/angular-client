(function() {
  'use strict'

  angular.module('app')
    .service('foodTrackerService', foodTrackerService)

    function foodTrackerService($http, $state) {
      const vm = this
      vm.groups = []
      vm.measurements = []
      vm.measuresArray = []
      vm.foodResults = []

      vm.getGroups = getGroups;
      vm.getSearchResults = getSearchResults;
      vm.getFoodMeasures = getFoodMeasures;

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

      function getSearchResults (group, query) {
        return $http
          .get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + query + '&offset=0&ds=Standard%20Reference&fg=' + group + '&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
          .then(res => res)
          .catch(err => console.log(err))
      }

      function getFoodMeasures(ndbno) {
        return $http
          .get('https://api.nal.usda.gov/ndb/V2/reports?ndbno=' + ndbno + '&type=b&format=json&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
          .then(res => {
            console.log(res)
            vm.measuresArray = res.data.foods[0].food.nutrients[0].measures
            console.log(vm.measuresArray);
            vm.measuresArray.forEach(item => {
              vm.measurements.push(item.label)
            })
            console.log(vm.measurements);
          })
          .catch(err => console.log(err))
      }
    }

}());


// searchGroups() {
//     axios.get('https://api.nal.usda.gov/ndb/search/?format=json&max=200&q=apple&offset=0&api_key=pDeYeSa2iqRqPrmEd6n6IIxoCz9rnLjZweeSR0JF')
//     .then(res => {
//       let foodResults = res.data.list.item
//       let newGroups = []
//       foodResults.forEach(item => {
//         if (!newGroups.includes(item.group)) {
//           newGroups.push(item.group)
//         }
//       })
//       this.setState({groups: newGroups})
//       console.log(this.state.groups);
//     })
//     .catch(err => console.log(err))
//   }
