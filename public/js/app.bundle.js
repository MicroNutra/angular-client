webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'posts',
        url: '/',
        component: 'posts'
      })
      .state({
        name: 'editPost',
        url: '/posts/:id/edit',
        component: 'editPost'
      })
  }

}());


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  'use strict'
  angular
    .module("app", [
      "app.posts", "app.editPost", "app.about", "app.dashboard", "app.foodList", "app.foodSearch", "app.groupSearch", "app.header", "app.searchInput", "ui.router", "angularMoment"
    ])

  __webpack_require__(1);
  // require('./components/about');
  // require('./components/dashboard');
  // require('./components/editPost');
  // require('./components/foodList');
  // require('./components/foodSearch');
  // require('./components/groupSearch');
  // require('./components/header');
  // require('./components/posts');
  // require('./components/searchInput');
})();


/***/ })
],[3]);