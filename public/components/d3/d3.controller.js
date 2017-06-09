(function () {
  'use strict'
  angular
    .module("app.dashboard.d3")
    .controller('D3Controller', D3Controller)

  D3Controller.$inject = ['$http', '$state', 'dashboardService']

  function D3Controller($http, $state, dashboardService) {
    const vm = this

    vm.$onInit = $onInit;
    
  }

})();
