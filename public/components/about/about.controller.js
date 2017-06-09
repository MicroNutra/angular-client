(function () {
  'use strict'
  angular
    .module("app.about")
    .controller('AboutController', AboutController)

  AboutController.$inject = ['$http', '$state', "$window", "$auth", "$rootScope"]

  function AboutController($http, $state, $window, $auth, $rootScope) {
    const vm = this

    vm.$onInit = $onInit;
    vm.getDashboard = getDashboard;
    vm.facebookLogin = facebookLogin

    function $onInit () {
    }

    function facebookLogin(e){
      e.preventDefault()
      $auth.authenticate('facebook')
        .then(function(response) {
          console.log("hellow");
          console.log(response);
          // $window.localStorage.currentUser = JSON.stringify(response.data.user);
          // $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
          console.log(response.data);
        });
    };

    function getDashboard(e) {
      e.preventDefault()
      $state.go('dashboard')
    }
  }

})();
