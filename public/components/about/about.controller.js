(function () {
  'use strict'
  angular
    .module("app.about")
    .controller('AboutController', AboutController)

  AboutController.$inject = ['$http', '$state']

  function AboutController($http, $state) {
    const vm = this

    vm.$onInit = $onInit;
    vm.getDashboard = getDashboard;

    function $onInit () {
    }

    function getDashboard(e) {
      e.preventDefault()
      $state.go('dashboard')
    }
  }

})();
