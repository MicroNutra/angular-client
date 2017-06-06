(function() {
  'use strict'

  angular.module('reddit')
    .service('postsService', postsService)

    function postsService($http, $state) {
      this.addCommentService = addCommentService


      function addCommentService (id, item) {
        return $http
          .patch('/api/posts/' + id, item)
          .then(res => $state.go('posts'))
          .catch(err => console.log(err))
      }
    }

}());
