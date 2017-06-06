(function () {
  'use strict'
  angular
    .module("reddit.editPost")
    .controller('EditPostController', EditPostController)

  EditPostController.$inject = ['$http', '$state', '$stateParams']

  function EditPostController($http, $state, $stateParams) {
    const vm = this
    let postId = $stateParams.id

    vm.$onInit = onInit;
    vm.editPost = editPost;

    function onInit () {
      findById(postId)
    }

    function findById (id) {
      $http
        .get('/api/posts/' + id)
        .then(res => {
          console.log(res)
          console.log(res.data.title)
          vm.item = res.data
        })
        .catch(err => console.log(err))
    }

    function editPost (item) {
      $http
        .patch('/api/posts/' + postId, item)
        .then(res => {
          console.log(res)
          $state.go('posts')
        })
        .catch(err => console.log(err))
    }
  }
})();
