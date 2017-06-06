(function() {
  'use strict'
  angular
    .module("app.foodTracker")
    .component('foodTracker', {
      controller: 'FoodTrackerController',
      templateUrl: './components/foodTracker/foodTracker.html'
    })
  })
();
