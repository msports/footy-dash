webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  index.js launch the application.
	 *
	 *  @author  Chip
	 *  @date    January 6, 2015
	 *
	 */
	'use strict';

	__webpack_require__.e/* nsure */(1, function (require) {

	  __webpack_require__(1).use();
	  __webpack_require__(5).enable('circular');
	});

	__webpack_require__.e/* nsure */(2, function (require) {

	  __webpack_require__(6);

	  var App = __webpack_require__(8).default;
	  new App().run();
	});

/***/ }
]);