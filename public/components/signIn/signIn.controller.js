(function () {
  'use strict'
  angular
    .module('app.signIn')
    .controller('signInController', signInController)

  signInController.$inject = ['$http', '$state']

  function signInController($http, $state) {
    const vm = this

     vm.$onInit = $onInit;

     function $onInit () {
     }



  }

})();
