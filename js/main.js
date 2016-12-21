/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".main.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/scott/Sites/general.dev/mop-frontend/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _petition = __webpack_require__(/*! ./components/petition.js */ 3);
	
	var _petition2 = _interopRequireDefault(_petition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	
	  _reactDom2.default.render(_react2.default.createElement(_petition2.default, null), document.getElementById('petition'));
	});

/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/*!************************************!*\
  !*** ./src/components/petition.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _petition = __webpack_require__(/*! ../loaders/petition.js */ 4);
	
	var _petition2 = _interopRequireDefault(_petition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Petition = function (_React$Component) {
	  _inherits(Petition, _React$Component);
	
	  function Petition(props) {
	    _classCallCheck(this, Petition);
	
	    var _this = _possibleConstructorReturn(this, (Petition.__proto__ || Object.getPrototypeOf(Petition)).call(this, props));
	
	    _this.state = { tite: '', summary: '', target: '' };
	    return _this;
	  }
	
	  _createClass(Petition, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      this.props.petitionLoader().then(function (deps) {
	        _this2.SignatureCount = deps.SignatureCount.default;
	        _this2.forceUpdate();
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;
	
	      this.timer = setTimeout(function () {
	        return _this3.setStateFromAPI();
	      }, 500);
	    }
	  }, {
	    key: 'setStateFromAPI',
	    value: function setStateFromAPI() {
	      this.setState({
	        title: "Tell U.S. Mayors: Protect Undocumented Immigrants - Declare Your City a Sanctuary of Safety!  #HereToStay",
	        summary: "Trump has said he will deport millions, and anti-immigrant harassment is already out of control. It is time to declare America's cities as sanctuaries of safety and not allow local police to do the work of immigration agents. If your city is not already, declare it a sanctuary city. And if it is, commit to do everything in your power to maintain your sanctuary status and protect your undocumented residents from a Trump administration.",
	        target: "U.S. Mayors",
	        background: "<p>Mayors across the country must stand with their undocumented immigrant residents in this moment of crisis." + "<br /><br />" + "Undocumented Immigrants like me are under attack: Donald Trump has already said that in the first 100 days of office he would cancel DACA, a program that provides undocumented youth with work permits and protection from deportation, and begin deporting 2 million undocumented immigrants. But we can change this if we pressure mayors to declare their cities as sanctuaries of safety.</p>" + "<p>In a sanctuary city, officials implement policies to restrict local police from turning immigrants over to federal immigration agents and declare in no uncertain terms that immigrants are welcome. Without them, undocumented immigrants like me and my family are left vulnerable to racial profiling, detention and deportation.</p>" + "<p>We salute the mayors of cities like Seattle, San Jose, San Francisco, and Oakland who have been quick to stand with their undocumented residents.</p>" + "<p>This is just the beginning - we can make our cities and states safe for all!</p>",
	        signatureGoal: 225000,
	        signatureCount: 224693
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.SignatureCount) {
	        return React.createElement(
	          'div',
	          { className: 'row row-fluid' },
	          React.createElement(
	            'div',
	            { className: 'span8 pull-right petition-info-top' },
	            React.createElement(
	              'div',
	              { className: 'form-wrapper responsive' },
	              React.createElement(
	                'div',
	                { className: 'petition-top hidden-phone' },
	                React.createElement(
	                  'h1',
	                  { id: 'petition-title', className: 'moveon-bright-red big-title' },
	                  this.state.title
	                )
	              ),
	              React.createElement(
	                'div',
	                { id: 'pet-statement-box', className: 'lh-36 blockquote hidden-phone' },
	                React.createElement(
	                  'h3',
	                  { className: 'visible-phone moveon-bright-red' },
	                  'Petition Statement'
	                ),
	                React.createElement(
	                  'div',
	                  { id: 'pet-statement' },
	                  this.state.summary
	                )
	              ),
	              React.createElement(this.SignatureCount, { current: this.state.signatureCount, goal: this.state.signatureGoal })
	            ),
	            React.createElement(
	              'div',
	              { className: 'petition-top' },
	              React.createElement(
	                'p',
	                { id: 'to-target', className: 'lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer' },
	                'To be delivered to ',
	                React.createElement(
	                  'span',
	                  { className: 'all-targets' },
	                  React.createElement(
	                    'strong',
	                    null,
	                    this.state.target
	                  )
	                )
	              ),
	              React.createElement(
	                'p',
	                { id: 'by', className: 'byline lh-20' },
	                'Petition by ',
	                React.createElement(
	                  'a',
	                  { href: '/contact_creator.html?petition_id=95935', className: 'underline' },
	                  'Jo Comerford'
	                )
	              )
	            ),
	            React.createElement('div', { className: 'clear' }),
	            React.createElement(
	              'div',
	              { id: 'pet-explain', className: 'background-moveon-white bump-top-1' },
	              React.createElement(
	                'div',
	                { className: 'widget' },
	                React.createElement(
	                  'div',
	                  { className: 'widget-top' },
	                  React.createElement(
	                    'h3',
	                    { className: 'moveon-bright-red' },
	                    'Petition Background'
	                  )
	                ),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.background } })
	              ),
	              React.createElement(
	                'div',
	                { className: 'widget' },
	                React.createElement(
	                  'div',
	                  { className: 'widget-top' },
	                  React.createElement(
	                    'h3',
	                    { className: 'moveon-bright-red' },
	                    'Current petition signers'
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { id: 'pet-signers-loading', className: 'bump-top-1' },
	                  React.createElement(
	                    'b',
	                    null,
	                    'Loading...'
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement('div', { id: 'pet-signers', className: 'bump-top-1' }),
	                  React.createElement(
	                    'form',
	                    { id: 'flag-comment-form', action: '/flag_comment.html', method: 'POST' },
	                    React.createElement('input', { id: 'flag-comment-user-id', type: 'hidden', name: 'user_id', value: '' })
	                  )
	                )
	              )
	            )
	          )
	        );
	      } else {
	        return React.createElement(
	          'div',
	          { className: 'row row-fluid' },
	          React.createElement(
	            'div',
	            { className: 'span8 pull-right petition-info-top' },
	            React.createElement(
	              'div',
	              { className: 'form-wrapper responsive' },
	              React.createElement(
	                'div',
	                { className: 'petition-top hidden-phone' },
	                React.createElement(
	                  'h1',
	                  { id: 'petition-title', className: 'moveon-bright-red big-title' },
	                  this.state.title
	                )
	              ),
	              React.createElement(
	                'div',
	                { id: 'pet-statement-box', className: 'lh-36 blockquote hidden-phone' },
	                React.createElement(
	                  'h3',
	                  { className: 'visible-phone moveon-bright-red' },
	                  'Petition Statement'
	                ),
	                React.createElement(
	                  'div',
	                  { id: 'pet-statement' },
	                  this.state.summary
	                )
	              )
	            ),
	            React.createElement(
	              'div',
	              { className: 'petition-top' },
	              React.createElement(
	                'p',
	                { id: 'to-target', className: 'lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer' },
	                'To be delivered to ',
	                React.createElement(
	                  'span',
	                  { className: 'all-targets' },
	                  React.createElement(
	                    'strong',
	                    null,
	                    this.state.target
	                  )
	                )
	              ),
	              React.createElement(
	                'p',
	                { id: 'by', className: 'byline lh-20' },
	                'Petition by ',
	                React.createElement(
	                  'a',
	                  { href: '/contact_creator.html?petition_id=95935', className: 'underline' },
	                  'Jo Comerford'
	                )
	              )
	            ),
	            React.createElement('div', { className: 'clear' }),
	            React.createElement(
	              'div',
	              { id: 'pet-explain', className: 'background-moveon-white bump-top-1' },
	              React.createElement(
	                'div',
	                { className: 'widget' },
	                React.createElement(
	                  'div',
	                  { className: 'widget-top' },
	                  React.createElement(
	                    'h3',
	                    { className: 'moveon-bright-red' },
	                    'Petition Background'
	                  )
	                ),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.background } })
	              ),
	              React.createElement(
	                'div',
	                { className: 'widget' },
	                React.createElement(
	                  'div',
	                  { className: 'widget-top' },
	                  React.createElement(
	                    'h3',
	                    { className: 'moveon-bright-red' },
	                    'Current petition signers'
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { id: 'pet-signers-loading', className: 'bump-top-1' },
	                  React.createElement(
	                    'b',
	                    null,
	                    'Loading...'
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement('div', { id: 'pet-signers', className: 'bump-top-1' }),
	                  React.createElement(
	                    'form',
	                    { id: 'flag-comment-form', action: '/flag_comment.html', method: 'POST' },
	                    React.createElement('input', { id: 'flag-comment-user-id', type: 'hidden', name: 'user_id', value: '' })
	                  )
	                )
	              )
	            )
	          )
	        );
	      }
	    }
	  }]);
	
	  return Petition;
	}(React.Component);
	
	Petition.propTypes = {
	  petitionLoader: React.PropTypes.func.isRequired
	};
	
	Petition.defaultProps = {
	  petitionLoader: _petition2.default
	};
	
	exports.default = Petition;

/***/ },
/* 4 */
/*!*********************************!*\
  !*** ./src/loaders/petition.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _global = global,
	    Promise = _global.Promise;
	
	exports.default = function () {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function () {
	      resolve({
	        SignatureCount: __webpack_require__(/*! ../components/signature-count.js */ 5)
	      });
	    });
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map