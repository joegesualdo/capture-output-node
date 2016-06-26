module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _fs = __webpack_require__(1);

	var _fs2 = _interopRequireDefault(_fs);

	var _mkdirp = __webpack_require__(2);

	var _mkdirp2 = _interopRequireDefault(_mkdirp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CaptureOutput = function () {
	  function CaptureOutput() {
	    var _this = this;

	    _classCallCheck(this, CaptureOutput);

	    if (!_fs2.default.existsSync(__dirname + '/tmp')) {
	      _fs2.default.mkdirSync(__dirname + '/tmp');
	    }
	    var fileName = __dirname + '/tmp/captured-ouput.txt';
	    this.originalStdoutWrite = process.stdout.write;
	    this.originalStderrWrite = process.stderr.write;
	    this.fileName = fileName;
	    var access = _fs2.default.createWriteStream(fileName);
	    process.stdout.write = process.stderr.write = access.write.bind(access);
	    process.on('unhandledRejection', function (reason) {
	      _this.stop();
	      throw new Error('error');
	    });
	  }

	  _createClass(CaptureOutput, [{
	    key: 'get',
	    value: function get() {
	      var _this2 = this;

	      return new Promise(function (resolve) {
	        var readStream = _fs2.default.createReadStream(_this2.fileName);
	        var file = '';
	        readStream.on('data', function (chunk) {
	          file += chunk.toString('utf8');
	        });
	        readStream.on('end', function () {
	          resolve(file);
	        });
	      });
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      var _this3 = this;

	      return new Promise(function (resolve) {
	        process.stdout.write = _this3.originalStdoutWrite;
	        process.stderr.write = _this3.originalStderrWrite;
	        resolve();
	      });
	    }
	  }]);

	  return CaptureOutput;
	}();

	exports.default = CaptureOutput;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("mkdirp");

/***/ }
/******/ ]);