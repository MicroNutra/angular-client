(function () {
  'use strict'
  angular
    .module("app.about")
    .controller('AboutController', AboutController)

  AboutController.$inject = ['$http', '$state']

  function AboutController($http, $state) {
    const vm = this

    vm.$onInit = $onInit;

    function $onInit () {
    }
  }

})();
