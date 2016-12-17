/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactHelmet = __webpack_require__(/*! react-helmet */ 4);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _signatureCount = __webpack_require__(/*! ./signature-count.js */ 14);
	
	var _signatureCount2 = _interopRequireDefault(_signatureCount);
	
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
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.timer = setTimeout(function () {
	        return _this2.setStateFromAPI();
	      }, 500);
	    }
	  }, {
	    key: "setStateFromAPI",
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
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row row-fluid" },
	        React.createElement(_reactHelmet2.default, {
	          htmlAttributes: { "lang": "en" },
	          title: this.state.title,
	          titleTemplate: "MoveOn Petitions - %s",
	          meta: [{ "name": "twitter:card", "content": "summary" }, { "name": "twitter:site", "content": "@moveon" }, { "name": "twitter:title", "content": this.state.title }, { "name": "twitter:description", "content": "I just signed a petition to " + this.state.target + ": " + this.state.summary }, { "property": "og:title", "content": this.state.title }],
	          link: [{ "rel": "apple-touch-icon", "href": "//s3.amazonaws.com/s3.moveon.org/images/with_dims/moveon_iphone_icon_57x57.png" }, { "rel": "shortcut icon", "href": "//s3.amazonaws.com/s3.moveon.org/favicon.ico" }]
	        }),
	        React.createElement(
	          "div",
	          { className: "span8 pull-right petition-info-top" },
	          React.createElement(
	            "div",
	            { className: "form-wrapper responsive" },
	            React.createElement(
	              "div",
	              { className: "petition-top hidden-phone" },
	              React.createElement(
	                "h1",
	                { id: "petition-title", className: "moveon-bright-red big-title" },
	                this.state.title
	              )
	            ),
	            React.createElement(
	              "div",
	              { id: "pet-statement-box", className: "lh-36 blockquote hidden-phone" },
	              React.createElement(
	                "h3",
	                { className: "visible-phone moveon-bright-red" },
	                "Petition Statement"
	              ),
	              React.createElement(
	                "div",
	                { id: "pet-statement" },
	                this.state.summary
	              )
	            ),
	            React.createElement(_signatureCount2.default, { current: this.state.signatureCount, goal: this.state.signatureGoal })
	          ),
	          React.createElement(
	            "div",
	            { className: "petition-top" },
	            React.createElement(
	              "p",
	              { id: "to-target", className: "lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer" },
	              "To be delivered to ",
	              React.createElement(
	                "span",
	                { className: "all-targets" },
	                React.createElement(
	                  "strong",
	                  null,
	                  this.state.target
	                )
	              )
	            ),
	            React.createElement(
	              "p",
	              { id: "by", className: "byline lh-20" },
	              "Petition by ",
	              React.createElement(
	                "a",
	                { href: "/contact_creator.html?petition_id=95935", className: "underline" },
	                "Jo Comerford"
	              )
	            )
	          ),
	          React.createElement("div", { className: "clear" }),
	          React.createElement(
	            "div",
	            { id: "pet-explain", className: "background-moveon-white bump-top-1" },
	            React.createElement(
	              "div",
	              { className: "widget" },
	              React.createElement(
	                "div",
	                { className: "widget-top" },
	                React.createElement(
	                  "h3",
	                  { className: "moveon-bright-red" },
	                  "Petition Background"
	                )
	              ),
	              React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.background } })
	            ),
	            React.createElement(
	              "div",
	              { className: "widget" },
	              React.createElement(
	                "div",
	                { className: "widget-top" },
	                React.createElement(
	                  "h3",
	                  { className: "moveon-bright-red" },
	                  "Current petition signers"
	                )
	              ),
	              React.createElement(
	                "div",
	                { id: "pet-signers-loading", className: "bump-top-1" },
	                React.createElement(
	                  "b",
	                  null,
	                  "Loading..."
	                )
	              ),
	              React.createElement(
	                "div",
	                null,
	                React.createElement("div", { id: "pet-signers", className: "bump-top-1" }),
	                React.createElement(
	                  "form",
	                  { id: "flag-comment-form", action: "/flag_comment.html", method: "POST" },
	                  React.createElement("input", { id: "flag-comment-user-id", type: "hidden", name: "user_id", value: "" })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Petition;
	}(React.Component);
	
	exports.default = Petition;

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/react-helmet/lib/Helmet.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = window.React;
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(/*! react-side-effect */ 5);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(/*! deep-equal */ 8);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 11);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ 12);
	
	var _PlainComponent = __webpack_require__(/*! ./PlainComponent */ 13);
	
	var _PlainComponent2 = _interopRequireDefault(_PlainComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var HELMET_ATTRIBUTE = "data-react-helmet";
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props[property]) {
	            return props[property];
	        }
	    }
	    return null;
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, "title");
	    var innermostTemplate = getInnermostProperty(propsList, "titleTemplate");
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, "defaultTitle");
	
	    return innermostTitle || innermostDefaultTitle || "";
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, "onChangeClientState") || function () {};
	};
	
	var getHtmlAttributesFromPropsList = function getHtmlAttributesFromPropsList(propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.HTML] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.HTML];
	    }).reduce(function (html, current) {
	        return _extends({}, html, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    var tagList = propsList.filter(function (props) {
	        return typeof props[tagName] !== "undefined";
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	
	    return tagList;
	};
	
	var updateTitle = function updateTitle(title) {
	    document.title = title || document.title;
	};
	
	var updateHtmlAttributes = function updateHtmlAttributes(attributes) {
	    var htmlTag = document.getElementsByTagName("html")[0];
	    var helmetAttributeString = htmlTag.getAttribute(HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	        htmlTag.setAttribute(attribute, value);
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        htmlTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        htmlTag.removeAttribute(HELMET_ATTRIBUTE);
	    } else {
	        htmlTag.setAttribute(HELMET_ATTRIBUTE, helmetAttributes.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector("head");
	    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === "innerHTML") {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === "cssText") {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateHtmlAttributesAsString = function generateHtmlAttributesAsString(attributes) {
	    var keys = Object.keys(attributes);
	    var attributeString = "";
	
	    for (var i = 0; i < keys.length; i++) {
	        var attribute = keys[i];
	        var attr = typeof attributes[attribute] !== "undefined" ? attribute + "=\"" + attributes[attribute] + "\"" : "" + attribute;
	        attributeString += attr + " ";
	    }
	
	    return attributeString.trim();
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title) {
	    var stringifiedMarkup = "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title) + "</" + type + ">";
	
	    return stringifiedMarkup;
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags) {
	    var stringifiedMarkup = tags.map(function (tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === "innerHTML" || attribute === "cssText");
	        }).map(function (attribute) {
	            if (typeof tag[attribute] === "undefined") {
	                return attribute;
	            }
	
	            var encodedValue = encodeSpecialCharacters(tag[attribute]);
	            return attribute + "=\"" + encodedValue + "\"";
	        }).join(" ").trim();
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = [_HelmetConstants.TAG_NAMES.NOSCRIPT, _HelmetConstants.TAG_NAMES.SCRIPT, _HelmetConstants.TAG_NAMES.STYLE].indexOf(type) === -1;
	
	        return "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }).join("");
	
	    return stringifiedMarkup;
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title) {
	    // assigning into an array to define toString function on it
	    var component = [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, _defineProperty({
	        key: title
	    }, HELMET_ATTRIBUTE, true), title)];
	
	    return component;
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    /* eslint-disable react/display-name */
	    var component = tags.map(function (tag, i) {
	        var mappedTag = _defineProperty({
	            key: i
	        }, HELMET_ATTRIBUTE, true);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	
	    return component;
	    /* eslint-enable react/display-name */
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags);
	                }
	            };
	        case _HelmetConstants.TAG_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return tags;
	                },
	                toString: function toString() {
	                    return generateHtmlAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var htmlAttributes = _ref.htmlAttributes,
	        title = _ref.title,
	        baseTag = _ref.baseTag,
	        metaTags = _ref.metaTags,
	        linkTags = _ref.linkTags,
	        scriptTags = _ref.scriptTags,
	        noscriptTags = _ref.noscriptTags,
	        styleTags = _ref.styleTags;
	    return {
	        htmlAttributes: getMethodsForTag(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, title),
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	};
	
	var Helmet = function Helmet(Component) {
	    /* eslint-disable react/no-multi-comp */
	    var HelmetWrapper = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, (HelmetWrapper.__proto__ || Object.getPrototypeOf(HelmetWrapper)).apply(this, arguments));
	        }
	
	        _createClass(HelmetWrapper, [{
	            key: "shouldComponentUpdate",
	            value: function shouldComponentUpdate(nextProps) {
	                return !(0, _deepEqual2.default)(this.props, nextProps);
	            }
	        }, {
	            key: "render",
	            value: function render() {
	                return _react2.default.createElement(Component, this.props);
	            }
	        }], [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	            /**
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {String} title: "Title"
	             * @param {String} defaultTitle: "Default Title"
	             * @param {String} titleTemplate: "MySite.com - %s"
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div{ display: block; color: blue; }"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             */
	
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component);
	    /* eslint-enable react/no-multi-comp */
	
	    HelmetWrapper.propTypes = {
	        htmlAttributes: _react2.default.PropTypes.object,
	        title: _react2.default.PropTypes.string,
	        defaultTitle: _react2.default.PropTypes.string,
	        titleTemplate: _react2.default.PropTypes.string,
	        base: _react2.default.PropTypes.object,
	        meta: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	        link: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	        script: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	        noscript: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	        style: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
	        onChangeClientState: _react2.default.PropTypes.func
	    };
	    HelmetWrapper.peek = Component.peek;
	
	    HelmetWrapper.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = mapStateOnServer({
	                htmlAttributes: {},
	                title: "",
	                baseTag: [],
	                metaTags: [],
	                linkTags: [],
	                scriptTags: [],
	                noscriptTags: [],
	                styleTags: []
	            });
	        }
	
	        return mappedState;
	    };
	
	    return HelmetWrapper;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        htmlAttributes: getHtmlAttributesFromPropsList(propsList),
	        title: getTitleFromPropsList(propsList),
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY], propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        onChangeClientState: getOnChangeClientState(propsList)
	    };
	};
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    var htmlAttributes = newState.htmlAttributes,
	        title = newState.title,
	        baseTag = newState.baseTag,
	        metaTags = newState.metaTags,
	        linkTags = newState.linkTags,
	        scriptTags = newState.scriptTags,
	        noscriptTags = newState.noscriptTags,
	        styleTags = newState.styleTags,
	        onChangeClientState = newState.onChangeClientState;
	
	
	    updateHtmlAttributes(htmlAttributes);
	
	    updateTitle(title);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var SideEffect = (0, _reactSideEffect2.default)(reducePropsToState, handleClientStateChange, mapStateOnServer);
	
	// PlainComponent is used to be a blank component decorated by react-side-effect
	exports.default = Helmet(SideEffect(_PlainComponent2.default));
	module.exports = exports["default"];


/***/ },
/* 5 */
/*!******************************************!*\
  !*** ./~/react-side-effect/lib/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fbjsLibExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 6);
	
	var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);
	
	var _fbjsLibShallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ 7);
	
	var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = undefined;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = (function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        _Component.apply(this, arguments);
	      }
	
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may ony call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !_fbjsLibShallowEqual2['default'](nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2['default'].createElement(WrappedComponent, this.props);
	      };
	
	      _createClass(SideEffect, null, [{
	        key: 'displayName',
	
	        // Try to use displayName of wrapped component
	        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',
	
	        // Expose canUseDOM so tests can monkeypatch it
	        enumerable: true
	      }, {
	        key: 'canUseDOM',
	        value: _fbjsLibExecutionEnvironment2['default'].canUseDOM,
	        enumerable: true
	      }]);
	
	      return SideEffect;
	    })(_react.Component);
	
	    return SideEffect;
	  };
	};

/***/ },
/* 6 */
/*!********************************************!*\
  !*** ./~/fbjs/lib/ExecutionEnvironment.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 7 */
/*!************************************!*\
  !*** ./~/fbjs/lib/shallowEqual.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 8 */
/*!*******************************!*\
  !*** ./~/deep-equal/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(/*! ./lib/keys.js */ 9);
	var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ 10);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 9 */
/*!**********************************!*\
  !*** ./~/deep-equal/lib/keys.js ***!
  \**********************************/
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 10 */
/*!******************************************!*\
  !*** ./~/deep-equal/lib/is_arguments.js ***!
  \******************************************/
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 11 */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 12 */
/*!***********************************************!*\
  !*** ./~/react-helmet/lib/HelmetConstants.js ***!
  \***********************************************/
/***/ function(module, exports) {

	exports.__esModule = true;
	var TAG_NAMES = exports.TAG_NAMES = {
	    HTML: "htmlAttributes",
	    TITLE: "title",
	    BASE: "base",
	    META: "meta",
	    LINK: "link",
	    SCRIPT: "script",
	    NOSCRIPT: "noscript",
	    STYLE: "style"
	};
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    NAME: "name",
	    CHARSET: "charset",
	    HTTPEQUIV: "http-equiv",
	    REL: "rel",
	    HREF: "href",
	    PROPERTY: "property",
	    SRC: "src",
	    INNER_HTML: "innerHTML",
	    CSS_TEXT: "cssText"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    "charset": "charSet",
	    "http-equiv": "httpEquiv"
	};

/***/ },
/* 13 */
/*!**********************************************!*\
  !*** ./~/react-helmet/lib/PlainComponent.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PlainComponent = function (_React$Component) {
	    _inherits(PlainComponent, _React$Component);
	
	    function PlainComponent() {
	        _classCallCheck(this, PlainComponent);
	
	        return _possibleConstructorReturn(this, (PlainComponent.__proto__ || Object.getPrototypeOf(PlainComponent)).apply(this, arguments));
	    }
	
	    _createClass(PlainComponent, [{
	        key: "render",
	        value: function render() {
	            return null;
	        }
	    }]);
	
	    return PlainComponent;
	}(_react2.default.Component);
	
	exports.default = PlainComponent;
	module.exports = exports["default"];

/***/ },
/* 14 */
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
/******/ ]);
//# sourceMappingURL=main.js.map