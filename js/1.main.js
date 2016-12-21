webpackJsonp([1],{

/***/ 5:
/*!*******************************************!*\
  !*** ./src/components/signature-count.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignatureCount = function (_React$Component) {
	  _inherits(SignatureCount, _React$Component);
	
	  function SignatureCount(props) {
	    _classCallCheck(this, SignatureCount);
	
	    return _possibleConstructorReturn(this, (SignatureCount.__proto__ || Object.getPrototypeOf(SignatureCount)).call(this, props));
	  }
	
	  _createClass(SignatureCount, [{
	    key: 'formatted',
	    value: function formatted(number) {
	      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    }
	  }, {
	    key: 'percent',
	    value: function percent() {
	      var number = 0;
	      if (this.props.goal > 0) {
	        number = 100 * (this.props.current / this.props.goal);
	      }
	      if (number > 100) {
	        number = 100;
	      }
	      return number.toFixed(2).toString() + '%';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (typeof this.props.current !== 'undefined') {
	        return React.createElement(
	          'div',
	          { id: 'therm', className: 'bump-top-2' },
	          React.createElement(
	            'div',
	            { className: 'progress-status clearfix' },
	            React.createElement(
	              'div',
	              { className: 'progress-stat progress-current' },
	              React.createElement(
	                'em',
	                null,
	                'Current'
	              ),
	              React.createElement(
	                'strong',
	                null,
	                this.formatted(this.props.current)
	              )
	            ),
	            React.createElement(
	              'div',
	              { className: 'progress-stat progress-goal' },
	              React.createElement(
	                'em',
	                null,
	                'Goal'
	              ),
	              React.createElement(
	                'strong',
	                null,
	                this.formatted(this.props.goal)
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'progress progress-danger no-bottom-margin' },
	            React.createElement('div', { className: 'bar', style: { width: this.percent() } })
	          )
	        );
	      } else {
	        return React.createElement('div', null);
	      }
	    }
	  }]);
	
	  return SignatureCount;
	}(React.Component);
	
	exports.default = SignatureCount;

/***/ }

});
//# sourceMappingURL=1.main.js.map