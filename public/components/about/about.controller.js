(function () {
  'use strict'
  angular
    .module("app.about")
    .controller('AboutController', AboutController)

  AboutController.$inject = ['$http', '$state', "$window", "$auth", "$rootScope", "$location"]

  function AboutController($http, $state, $window, $auth, $rootScope, $location) {
    const vm = this

    vm.$onInit = $onInit;
    vm.getDashboard = getDashboard;
    vm.facebookLogin = facebookLogin

    function $onInit () {
        // if(localStorage.getItem('user')){
        //     $location.path('/dashboard');
        // }
    }

    function facebookLogin(e){
      e.preventDefault()
      $auth.authenticate('facebook', )
        .then(function(response) {
          console.log("hellow");
          console.log(response.data);
          localStorage.setItem("user", response.data.id);
          $location.path('/dashboard');
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
