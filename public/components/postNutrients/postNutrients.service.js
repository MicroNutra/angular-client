(function() {
  'use strict'

  angular.module('app')
    .service('postNutrientsService', postNutrientsService)

    function postNutrientsService($http, APP_CONFIG) {
      const vm = this
      console.log("APP_CONFIG", APP_CONFIG);

      vm.getTestData = getTestData

      function getTestData () {
        console.log("service checker");
        return $http
          .get(APP_CONFIG.API_BASE_URL+'api/micro')
          .then(res => console.log(res.data))
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
