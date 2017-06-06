(function () {
  'use strict'
  angular
    .module("reddit.posts")
    .controller('PostsController', PostsController)

  PostsController.$inject = ['$http', '$state']

  function PostsController($http, $state) {
    const vm = this

    vm.$onInit = $onInit;
    vm.addComment = addComment;
    vm.addPost = addPost;
    vm.deletePost = deletePost;
    vm.downVote = downVote;
    vm.getPosts = getPosts;
    vm.getComments = getComments;
    vm.showComments = showComments;
    vm.upVote = upVote;

    function $onInit () {
      vm.showPostComments = false
      vm.showNewPostForm = false
      vm.items = []
      getPosts()
    }

    function addComment (item, comment) {
      let itemIndex = vm.items.indexOf(item)
      let itemId = vm.items[itemIndex].id
      let e
      $http
        .post('/api/posts/' + itemId + '/comments', {content: comment})
        .then(() => getComments(itemIndex, itemId))
        .catch(err => console.log(err))
    }

    function addPost() {
      vm.item.comments = []
      vm.item.vote_count = 0
      vm.item.created_at = new Date().getTime()
      vm.showNewPostForm = false
      vm.postForm.$setPristine()
      vm.postForm.$setUntouched()
      $http
        .post('/api/posts', vm.item)
        .then(res => {
          vm.item.id = res.data.id
          getPosts()
        })
        .catch(err => console.log(err))
    }

    function deletePost (e, item) {
      e.preventDefault()
      let itemIndex = vm.items.indexOf(item)
      let itemId = vm.items[itemIndex].id
      $http
        .delete('/api/posts/' + itemId)
        .then(() => getPosts())
        .catch(err => console.log(err))
    }

    function downVote (e, item){
      e.preventDefault()
      let itemIndex = vm.items.indexOf(item)
      let itemId = vm.items[itemIndex].id
      $http
        .delete('/api/posts/' + itemId + '/votes')
        .then(() => getPosts())
        .catch(err => console.log(err))
    }

    function editRouter (e, item) {
      e.preventDefault()
      let itemIndex = vm.items.indexOf(item)
      let itemId = vm.items[itemIndex].id
      $state.go('editPost', {id: itemId})
    }

    function getComments (index, id) {
      $http
        .get('/api/posts/' + id + '/comments')
        .then(res => vm.items[index].comments = res.data)
        .catch(err => console.log(err))
    }

    function getPosts () {
      $http
        .get('/api/posts')
        .then(res => vm.items = res.data)
        .catch(err => console.log(err))
    }

    function showComments (e, item) {
      let itemIndex = vm.items.indexOf(item)
      let itemId = vm.items[itemIndex].id
      getComments(itemIndex, itemId)
    }

    function upVote (e, item) {
      e.preventDefault()
      let itemIndex = vm.items.indexOf(item)
      let itemId = vm.items[itemIndex].id
      $http
        .post('/api/posts/' + itemId + '/votes')
        .then(() => getPosts())
        .catch(err => console.log(err))
    }
  }
})();
