(function () {
  'use strict'
  angular
    .module("app.dashboard.d3")
    .controller('D3Controller', D3Controller)

  D3Controller.$inject = ['$http', '$state', 'D3Service']

  function D3Controller($http, $state, D3Service) {
    const vm = this

    vm.$onInit = $onInit;

    function $onInit () {
      
    }
  }

})();
