/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$locationProvider'];

  function config($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider.state({
      name: 'dashboard',
      url: '/',
      component: 'dashboard'
    });
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module("app.about").component('about', {
    controller: 'AboutController',
    templateUrl: 'about/about.html'
  });
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module("app.about").controller('AboutController', AboutController);

  AboutController.$inject = ['$http', '$state'];

  function AboutController($http, $state) {
    var vm = this;

    vm.$onInit = $onInit;

    function $onInit() {}
  }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module('app.about', ['ui.router', 'angularMoment']);
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module("app.dashboard").component('dashboard', {
    controller: 'DashboardController',
    templateUrl: 'dashboard/dashboard.html'
  });
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module("app.dashboard").controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$http', '$state'];

  function DashboardController($http, $state) {
    var vm = this;

    vm.$onInit = $onInit;

    function $onInit() {}
  }
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module('app.dashboard', ['ui.router', 'angularMoment']);
})();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module("app", ["app.dashboard", "ui.router", "angularMoment"]);

  __webpack_require__(0);
  __webpack_require__(2);
  __webpack_require__(1);
  __webpack_require__(3);

  __webpack_require__(5);
  __webpack_require__(4);
  __webpack_require__(6);

  __webpack_require__(8);
  __webpack_require__(7);
  __webpack_require__(9);

  // require('./components/foodSearch/foodSearch.controller.js');
  // require('./components/foodSearch/foodSearch.component.js');
  // require('./components/foodSearch/foodSearch.module.js');
  //
  // require('./components/groupSearch/groupSearch.controller.js');
  // require('./components/groupSearch/groupSearch.component.js');
  // require('./components/groupSearch/groupSearch.module.js');
  //
  // require('./components/header/header.controller.js');
  // require('./components/header/header.component.js');
  // require('./components/header/header.module.js');

  // require('./components/searchInput/searchInput.controller.js');
  // require('./components/searchInput/searchInput.component.js');
  // require('./components/searchInput/searchInput.module.js');
})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmI0YjBjODU2MzllNDc1NjJmM2IiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLm1vZHVsZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJGluamVjdCIsIiRzdGF0ZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJodG1sNU1vZGUiLCJzdGF0ZSIsIm5hbWUiLCJ1cmwiLCJjb21wb25lbnQiLCJjb250cm9sbGVyIiwidGVtcGxhdGVVcmwiLCJBYm91dENvbnRyb2xsZXIiLCIkaHR0cCIsIiRzdGF0ZSIsInZtIiwiJG9uSW5pdCIsIkRhc2hib2FyZENvbnRyb2xsZXIiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUMsYUFBVztBQUNWOztBQUVBQSxVQUFRQyxNQUFSLENBQWUsS0FBZixFQUFzQkMsTUFBdEIsQ0FBNkJBLE1BQTdCOztBQUVBQSxTQUFPQyxPQUFQLEdBQWlCLENBQUMsZ0JBQUQsRUFBbUIsbUJBQW5CLENBQWpCOztBQUVBLFdBQVNELE1BQVQsQ0FBZ0JFLGNBQWhCLEVBQWdDQyxpQkFBaEMsRUFBbUQ7O0FBRWpEQSxzQkFBa0JDLFNBQWxCLENBQTRCLElBQTVCOztBQUVBRixtQkFDR0csS0FESCxDQUNTO0FBQ0xDLFlBQU0sV0FERDtBQUVMQyxXQUFLLEdBRkE7QUFHTEMsaUJBQVc7QUFITixLQURUO0FBTUQ7QUFFRixDQW5CQSxHQUFELEM7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBVztBQUNWOztBQUNBVixVQUNHQyxNQURILENBQ1UsV0FEVixFQUVHUyxTQUZILENBRWEsT0FGYixFQUVzQjtBQUNsQkMsZ0JBQVksaUJBRE07QUFFbEJDLGlCQUFhO0FBRkssR0FGdEI7QUFNQyxDQVJILEk7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBWTtBQUNYOztBQUNBWixVQUNHQyxNQURILENBQ1UsV0FEVixFQUVHVSxVQUZILENBRWMsaUJBRmQsRUFFaUNFLGVBRmpDOztBQUlBQSxrQkFBZ0JWLE9BQWhCLEdBQTBCLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBMUI7O0FBRUEsV0FBU1UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQ3RDLFFBQU1DLEtBQUssSUFBWDs7QUFFQUEsT0FBR0MsT0FBSCxHQUFhQSxPQUFiOztBQUVBLGFBQVNBLE9BQVQsR0FBb0IsQ0FDbkI7QUFDRjtBQUVGLENBakJELEk7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBVztBQUNWOztBQUVBakIsVUFDR0MsTUFESCxDQUNVLFdBRFYsRUFDdUIsQ0FBQyxXQUFELEVBQWUsZUFBZixDQUR2QjtBQUVELENBTEQsSTs7Ozs7Ozs7O0FDQUEsQ0FBQyxZQUFXO0FBQ1Y7O0FBQ0FELFVBQ0dDLE1BREgsQ0FDVSxlQURWLEVBRUdTLFNBRkgsQ0FFYSxXQUZiLEVBRTBCO0FBQ3RCQyxnQkFBWSxxQkFEVTtBQUV0QkMsaUJBQWE7QUFGUyxHQUYxQjtBQU1DLENBUkgsSTs7Ozs7Ozs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1g7O0FBQ0FaLFVBQ0dDLE1BREgsQ0FDVSxlQURWLEVBRUdVLFVBRkgsQ0FFYyxxQkFGZCxFQUVxQ08sbUJBRnJDOztBQUlBQSxzQkFBb0JmLE9BQXBCLEdBQThCLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBOUI7O0FBRUEsV0FBU2UsbUJBQVQsQ0FBNkJKLEtBQTdCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUMxQyxRQUFNQyxLQUFLLElBQVg7O0FBRUFBLE9BQUdDLE9BQUgsR0FBYUEsT0FBYjs7QUFFQSxhQUFTQSxPQUFULEdBQW9CLENBQ25CO0FBQ0Y7QUFFRixDQWpCRCxJOzs7Ozs7Ozs7QUNBQSxDQUFDLFlBQVc7QUFDVjs7QUFFQWpCLFVBQ0dDLE1BREgsQ0FDVSxlQURWLEVBQzJCLENBQUMsV0FBRCxFQUFlLGVBQWYsQ0FEM0I7QUFFRCxDQUxELEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBWTtBQUNYOztBQUNBRCxVQUNHQyxNQURILENBQ1UsS0FEVixFQUNpQixDQUNiLGVBRGEsRUFDSSxXQURKLEVBQ2lCLGVBRGpCLENBRGpCOztBQUtBa0IsRUFBQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0FBLEVBQUEsbUJBQUFBLENBQVEsQ0FBUjtBQUNBQSxFQUFBLG1CQUFBQSxDQUFRLENBQVI7QUFDQUEsRUFBQSxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBQSxFQUFBLG1CQUFBQSxDQUFRLENBQVI7QUFDQUEsRUFBQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0FBLEVBQUEsbUJBQUFBLENBQVEsQ0FBUjs7QUFFQUEsRUFBQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0FBLEVBQUEsbUJBQUFBLENBQVEsQ0FBUjtBQUNBQSxFQUFBLG1CQUFBQSxDQUFRLENBQVI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFRCxDQXBDRCxJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYjRiMGM4NTYzOWU0NzU2MmYzYiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcoY29uZmlnKVxuXG4gIGNvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlciddXG5cbiAgZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpXG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKHtcbiAgICAgICAgbmFtZTogJ2Rhc2hib2FyZCcsXG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6ICdkYXNoYm9hcmQnXG4gICAgICB9KVxuICB9XG5cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvYXBwLmNvbmZpZy5qcyIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKFwiYXBwLmFib3V0XCIpXG4gICAgLmNvbXBvbmVudCgnYWJvdXQnLCB7XG4gICAgICBjb250cm9sbGVyOiAnQWJvdXRDb250cm9sbGVyJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYWJvdXQvYWJvdXQuaHRtbCdcbiAgICB9KVxuICB9KVxuKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCdcbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoXCJhcHAuYWJvdXRcIilcbiAgICAuY29udHJvbGxlcignQWJvdXRDb250cm9sbGVyJywgQWJvdXRDb250cm9sbGVyKVxuXG4gIEFib3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckaHR0cCcsICckc3RhdGUnXVxuXG4gIGZ1bmN0aW9uIEFib3V0Q29udHJvbGxlcigkaHR0cCwgJHN0YXRlKSB7XG4gICAgY29uc3Qgdm0gPSB0aGlzXG5cbiAgICB2bS4kb25Jbml0ID0gJG9uSW5pdDtcblxuICAgIGZ1bmN0aW9uICRvbkluaXQgKCkge1xuICAgIH1cbiAgfVxuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29udHJvbGxlci5qcyIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcC5hYm91dCcsIFsndWkucm91dGVyJyAsICdhbmd1bGFyTW9tZW50J10pXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoXCJhcHAuZGFzaGJvYXJkXCIpXG4gICAgLmNvbXBvbmVudCgnZGFzaGJvYXJkJywge1xuICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZENvbnRyb2xsZXInLFxuICAgICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXG4gICAgfSlcbiAgfSlcbigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCdcbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoXCJhcHAuZGFzaGJvYXJkXCIpXG4gICAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBEYXNoYm9hcmRDb250cm9sbGVyKVxuXG4gIERhc2hib2FyZENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGh0dHAnLCAnJHN0YXRlJ11cblxuICBmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCRodHRwLCAkc3RhdGUpIHtcbiAgICBjb25zdCB2bSA9IHRoaXNcblxuICAgIHZtLiRvbkluaXQgPSAkb25Jbml0O1xuXG4gICAgZnVuY3Rpb24gJG9uSW5pdCAoKSB7XG4gICAgfVxuICB9XG5cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanMiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAuZGFzaGJvYXJkJywgWyd1aS5yb3V0ZXInICwgJ2FuZ3VsYXJNb21lbnQnXSlcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0J1xuICBhbmd1bGFyXG4gICAgLm1vZHVsZShcImFwcFwiLCBbXG4gICAgICBcImFwcC5kYXNoYm9hcmRcIiwgXCJ1aS5yb3V0ZXJcIiwgXCJhbmd1bGFyTW9tZW50XCJcbiAgICBdKVxuXG4gIHJlcXVpcmUoJy4vYXBwLmNvbmZpZy5qcycpO1xuICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29udHJvbGxlci5qcycpO1xuICByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzJyk7XG4gIHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5tb2R1bGUuanMnKTtcblxuICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzJyk7XG4gIHJlcXVpcmUoJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcycpO1xuICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMnKTtcblxuICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9vZExpc3QvZm9vZExpc3QuY29udHJvbGxlci5qcycpO1xuICByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9vZExpc3QvZm9vZExpc3QuY29tcG9uZW50LmpzJyk7XG4gIHJlcXVpcmUoJy4vY29tcG9uZW50cy9mb29kTGlzdC9mb29kTGlzdC5tb2R1bGUuanMnKTtcblxuICAvLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9vZFNlYXJjaC9mb29kU2VhcmNoLmNvbnRyb2xsZXIuanMnKTtcbiAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvb2RTZWFyY2gvZm9vZFNlYXJjaC5jb21wb25lbnQuanMnKTtcbiAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvb2RTZWFyY2gvZm9vZFNlYXJjaC5tb2R1bGUuanMnKTtcbiAgLy9cbiAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL2dyb3VwU2VhcmNoL2dyb3VwU2VhcmNoLmNvbnRyb2xsZXIuanMnKTtcbiAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL2dyb3VwU2VhcmNoL2dyb3VwU2VhcmNoLmNvbXBvbmVudC5qcycpO1xuICAvLyByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ3JvdXBTZWFyY2gvZ3JvdXBTZWFyY2gubW9kdWxlLmpzJyk7XG4gIC8vXG4gIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbnRyb2xsZXIuanMnKTtcbiAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzJyk7XG4gIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZS5qcycpO1xuXG4gIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zZWFyY2hJbnB1dC9zZWFyY2hJbnB1dC5jb250cm9sbGVyLmpzJyk7XG4gIC8vIHJlcXVpcmUoJy4vY29tcG9uZW50cy9zZWFyY2hJbnB1dC9zZWFyY2hJbnB1dC5jb21wb25lbnQuanMnKTtcbiAgLy8gcmVxdWlyZSgnLi9jb21wb25lbnRzL3NlYXJjaElucHV0L3NlYXJjaElucHV0Lm1vZHVsZS5qcycpO1xuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2FwcC5tb2R1bGUuanMiXSwic291cmNlUm9vdCI6IiJ9