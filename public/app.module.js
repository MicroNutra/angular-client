(function () {
  'use strict'
  angular
    .module("app", [
      "app.posts", "app.editPost", "app.about", "app.dashboard", "app.foodList", "app.foodSearch", "app.groupSearch", "app.header", "app.searchInput", "ui.router", "angularMoment"
    ])

  require('./app.config.js');
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
