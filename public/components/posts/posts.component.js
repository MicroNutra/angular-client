(function() {
  'use strict'
  angular
    .module("reddit.posts")
    .component('posts', {
      controller: 'PostsController',
      templateUrl: 'posts/posts.html'
    })
  })
();
