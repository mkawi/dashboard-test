(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app~js/plugins/metisMenu"],{

/***/ "./assets/js/plugins/metisMenu/jquery.metisMenu.js":
/*!*********************************************************!*\
  !*** ./assets/js/plugins/metisMenu/jquery.metisMenu.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * metismenu - v2.7.7
 * A jQuery menu plugin
 * https://github.com/onokumus/metismenu#readme
 *
 * Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * Under MIT License
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function ($) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var Util = function ($$$1) {
    // eslint-disable-line no-shadow
    var TRANSITION_END = 'transitionend';
    var Util = {
      // eslint-disable-line no-shadow
      TRANSITION_END: 'mmTransitionEnd',
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(TRANSITION_END);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      }
    };

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined;
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $$$1.fn.mmEmulateTransitionEnd = transitionEndEmulator; // eslint-disable-line no-param-reassign
      // eslint-disable-next-line no-param-reassign

      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }

    setTransitionEndSupport();
    return Util;
  }($);

  var MetisMenu = function ($$$1) {
    // eslint-disable-line no-shadow
    var NAME = 'metisMenu';
    var DATA_KEY = 'metisMenu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var TRANSITION_DURATION = 350;
    var Default = {
      toggle: true,
      preventDefault: true,
      activeClass: 'active',
      collapseClass: 'collapse',
      collapseInClass: 'in',
      collapsingClass: 'collapsing',
      triggerElement: 'a',
      parentTrigger: 'li',
      subMenu: 'ul'
    };
    var Event = {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };

    var MetisMenu =
    /*#__PURE__*/
    function () {
      // eslint-disable-line no-shadow
      function MetisMenu(element, config) {
        this.element = element;
        this.config = _objectSpread({}, Default, config);
        this.transitioning = null;
        this.init();
      }

      var _proto = MetisMenu.prototype;

      _proto.init = function init() {
        var self = this;
        var conf = this.config;
        $$$1(this.element).find(conf.parentTrigger + "." + conf.activeClass).has(conf.subMenu).children(conf.subMenu).attr('aria-expanded', true).addClass(conf.collapseClass + " " + conf.collapseInClass);
        $$$1(this.element).find(conf.parentTrigger).not("." + conf.activeClass).has(conf.subMenu).children(conf.subMenu).attr('aria-expanded', false).addClass(conf.collapseClass);
        $$$1(this.element).find(conf.parentTrigger).has(conf.subMenu).children(conf.triggerElement).on(Event.CLICK_DATA_API, function (e) {
          // eslint-disable-line func-names
          var eTar = $$$1(this);
          var paRent = eTar.parent(conf.parentTrigger);
          var sibLings = paRent.siblings(conf.parentTrigger).children(conf.triggerElement);
          var List = paRent.children(conf.subMenu);

          if (conf.preventDefault) {
            e.preventDefault();
          }

          if (eTar.attr('aria-disabled') === 'true') {
            return;
          }

          if (paRent.hasClass(conf.activeClass)) {
            eTar.attr('aria-expanded', false);
            self.hide(List);
          } else {
            self.show(List);
            eTar.attr('aria-expanded', true);

            if (conf.toggle) {
              sibLings.attr('aria-expanded', false);
            }
          }

          if (conf.onTransitionStart) {
            conf.onTransitionStart(e);
          }
        });
      };

      _proto.show = function show(element) {
        var _this = this;

        if (this.transitioning || $$$1(element).hasClass(this.config.collapsingClass)) {
          return;
        }

        var elem = $$$1(element);
        var startEvent = $$$1.Event(Event.SHOW);
        elem.trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        elem.parent(this.config.parentTrigger).addClass(this.config.activeClass);

        if (this.config.toggle) {
          this.hide(elem.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + this.config.collapseInClass).attr('aria-expanded', false));
        }

        elem.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0);
        this.setTransitioning(true);

        var complete = function complete() {
          // check if disposed
          if (!_this.config || !_this.element) {
            return;
          }

          elem.removeClass(_this.config.collapsingClass).addClass(_this.config.collapseClass + " " + _this.config.collapseInClass).height('').attr('aria-expanded', true);

          _this.setTransitioning(false);

          elem.trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        elem.height(element[0].scrollHeight).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION);
      };

      _proto.hide = function hide(element) {
        var _this2 = this;

        if (this.transitioning || !$$$1(element).hasClass(this.config.collapseInClass)) {
          return;
        }

        var elem = $$$1(element);
        var startEvent = $$$1.Event(Event.HIDE);
        elem.trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        elem.parent(this.config.parentTrigger).removeClass(this.config.activeClass); // eslint-disable-next-line no-unused-expressions

        elem.height(elem.height())[0].offsetHeight;
        elem.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass);
        this.setTransitioning(true);

        var complete = function complete() {
          // check if disposed
          if (!_this2.config || !_this2.element) {
            return;
          }

          if (_this2.transitioning && _this2.config.onTransitionEnd) {
            _this2.config.onTransitionEnd();
          }

          _this2.setTransitioning(false);

          elem.trigger(Event.HIDDEN);
          elem.removeClass(_this2.config.collapsingClass).addClass(_this2.config.collapseClass).attr('aria-expanded', false);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        if (elem.height() === 0 || elem.css('display') === 'none') {
          complete();
        } else {
          elem.height(0).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION);
        }
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this.transitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this.element, DATA_KEY);
        $$$1(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off('click');
        this.transitioning = null;
        this.config = null;
        this.element = null;
      };

      MetisMenu.jQueryInterface = function jQueryInterface(config) {
        // eslint-disable-next-line func-names
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          var conf = _objectSpread({}, Default, $this.data(), _typeof(config) === 'object' && config ? config : {});

          if (!data && /dispose/.test(config)) {
            this.dispose();
          }

          if (!data) {
            data = new MetisMenu(this, conf);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      return MetisMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = MetisMenu.jQueryInterface; // eslint-disable-line no-param-reassign

    $$$1.fn[NAME].Constructor = MetisMenu; // eslint-disable-line no-param-reassign

    $$$1.fn[NAME].noConflict = function () {
      // eslint-disable-line no-param-reassign
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT; // eslint-disable-line no-param-reassign

      return MetisMenu.jQueryInterface;
    };

    return MetisMenu;
  }($);

  return MetisMenu;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9tZXRpc01lbnUvanF1ZXJ5Lm1ldGlzTWVudS5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCIkIiwiaGFzT3duUHJvcGVydHkiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJVdGlsIiwiJCQkMSIsIlRSQU5TSVRJT05fRU5EIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJlbGVtZW50IiwidHJpZ2dlciIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50IiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJldmVudCIsImlzIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsImFwcGx5IiwidW5kZWZpbmVkIiwidHJhbnNpdGlvbkVuZEVtdWxhdG9yIiwiZHVyYXRpb24iLCJfdGhpcyIsImNhbGxlZCIsIm9uZSIsInNldFRpbWVvdXQiLCJzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCIsImZuIiwibW1FbXVsYXRlVHJhbnNpdGlvbkVuZCIsInNwZWNpYWwiLCJNZXRpc01lbnUiLCJOQU1FIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiRGVmYXVsdCIsInRvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZlQ2xhc3MiLCJjb2xsYXBzZUNsYXNzIiwiY29sbGFwc2VJbkNsYXNzIiwiY29sbGFwc2luZ0NsYXNzIiwidHJpZ2dlckVsZW1lbnQiLCJwYXJlbnRUcmlnZ2VyIiwic3ViTWVudSIsIkV2ZW50IiwiU0hPVyIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkNMSUNLX0RBVEFfQVBJIiwiY29uZmlnIiwidHJhbnNpdGlvbmluZyIsImluaXQiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJzZWxmIiwiY29uZiIsImZpbmQiLCJoYXMiLCJjaGlsZHJlbiIsImF0dHIiLCJhZGRDbGFzcyIsIm5vdCIsIm9uIiwiZSIsImVUYXIiLCJwYVJlbnQiLCJwYXJlbnQiLCJzaWJMaW5ncyIsInNpYmxpbmdzIiwiTGlzdCIsImhhc0NsYXNzIiwiaGlkZSIsInNob3ciLCJvblRyYW5zaXRpb25TdGFydCIsImVsZW0iLCJzdGFydEV2ZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwicmVtb3ZlQ2xhc3MiLCJoZWlnaHQiLCJzZXRUcmFuc2l0aW9uaW5nIiwiY29tcGxldGUiLCJzY3JvbGxIZWlnaHQiLCJfdGhpczIiLCJvZmZzZXRIZWlnaHQiLCJvblRyYW5zaXRpb25FbmQiLCJjc3MiLCJpc1RyYW5zaXRpb25pbmciLCJkaXNwb3NlIiwicmVtb3ZlRGF0YSIsIm9mZiIsImpRdWVyeUludGVyZmFjZSIsImVhY2giLCIkdGhpcyIsImRhdGEiLCJ0ZXN0IiwiRXJyb3IiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFRQyxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtBQUN4QixnQ0FBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQWpELEdBQStEQSxNQUFNLENBQUNELE9BQVAs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WUFBWTtBQUNuQztBQUNBbEcsVUFBSSxDQUFDd0IsRUFBTCxDQUFRSSxJQUFSLElBQWdCSSxrQkFBaEIsQ0FGbUMsQ0FFQzs7QUFFcEMsYUFBT0wsU0FBUyxDQUFDZ0UsZUFBakI7QUFDSCxLQUxEOztBQU9BLFdBQU9oRSxTQUFQO0FBQ0gsR0F4T2UsQ0F3T2RyRCxDQXhPYyxDQUFoQjs7QUEwT0EsU0FBT3FELFNBQVA7QUFFSCxDQTVVQSxDQUFELEMiLCJmaWxlIjoianMvYXBwfmpzL3BsdWdpbnMvbWV0aXNNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBtZXRpc21lbnUgLSB2Mi43LjdcbiAqIEEgalF1ZXJ5IG1lbnUgcGx1Z2luXG4gKiBodHRwczovL2dpdGh1Yi5jb20vb25va3VtdXMvbWV0aXNtZW51I3JlYWRtZVxuICpcbiAqIE1hZGUgYnkgT3NtYW4gTnVyaSBPa3VtdXMgPG9ub2t1bXVzQGdtYWlsLmNvbT4gKGh0dHBzOi8vZ2l0aHViLmNvbS9vbm9rdW11cylcbiAqIFVuZGVyIE1JVCBMaWNlbnNlXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKSA6XG4gICAgICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KSA6XG4gICAgICAgICAgICAoZ2xvYmFsLm1ldGlzTWVudSA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcblxuICAgIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHZhciBVdGlsID0gZnVuY3Rpb24gKCQkJDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiAgICAgICAgdmFyIFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xuICAgICAgICB2YXIgVXRpbCA9IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gICAgICAgICAgICBUUkFOU0lUSU9OX0VORDogJ21tVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICQkJDEoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgICAgICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkJCQxKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAkJCQxKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZChfdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICAgICAgICAgICQkJDEuZm4ubW1FbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvcjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgICAgICAgICAgICQkJDEuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCk7XG4gICAgICAgIHJldHVybiBVdGlsO1xuICAgIH0oJCk7XG5cbiAgICB2YXIgTWV0aXNNZW51ID0gZnVuY3Rpb24gKCQkJDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiAgICAgICAgdmFyIE5BTUUgPSAnbWV0aXNNZW51JztcbiAgICAgICAgdmFyIERBVEFfS0VZID0gJ21ldGlzTWVudSc7XG4gICAgICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgICAgICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gICAgICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkJCQxLmZuW05BTUVdO1xuICAgICAgICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDM1MDtcbiAgICAgICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICAgICAgICB0b2dnbGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgICAgICAgICAgIGNvbGxhcHNlQ2xhc3M6ICdjb2xsYXBzZScsXG4gICAgICAgICAgICBjb2xsYXBzZUluQ2xhc3M6ICdpbicsXG4gICAgICAgICAgICBjb2xsYXBzaW5nQ2xhc3M6ICdjb2xsYXBzaW5nJyxcbiAgICAgICAgICAgIHRyaWdnZXJFbGVtZW50OiAnYScsXG4gICAgICAgICAgICBwYXJlbnRUcmlnZ2VyOiAnbGknLFxuICAgICAgICAgICAgc3ViTWVudTogJ3VsJ1xuICAgICAgICB9O1xuICAgICAgICB2YXIgRXZlbnQgPSB7XG4gICAgICAgICAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICAgICAgICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVksXG4gICAgICAgICAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSxcbiAgICAgICAgICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICAgICAgICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgTWV0aXNNZW51ID1cbiAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE1ldGlzTWVudShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX3Byb3RvID0gTWV0aXNNZW51LnByb3RvdHlwZTtcblxuICAgICAgICAgICAgICAgIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZiA9IHRoaXMuY29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAkJCQxKHRoaXMuZWxlbWVudCkuZmluZChjb25mLnBhcmVudFRyaWdnZXIgKyBcIi5cIiArIGNvbmYuYWN0aXZlQ2xhc3MpLmhhcyhjb25mLnN1Yk1lbnUpLmNoaWxkcmVuKGNvbmYuc3ViTWVudSkuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpLmFkZENsYXNzKGNvbmYuY29sbGFwc2VDbGFzcyArIFwiIFwiICsgY29uZi5jb2xsYXBzZUluQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAkJCQxKHRoaXMuZWxlbWVudCkuZmluZChjb25mLnBhcmVudFRyaWdnZXIpLm5vdChcIi5cIiArIGNvbmYuYWN0aXZlQ2xhc3MpLmhhcyhjb25mLnN1Yk1lbnUpLmNoaWxkcmVuKGNvbmYuc3ViTWVudSkuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKS5hZGRDbGFzcyhjb25mLmNvbGxhcHNlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAkJCQxKHRoaXMuZWxlbWVudCkuZmluZChjb25mLnBhcmVudFRyaWdnZXIpLmhhcyhjb25mLnN1Yk1lbnUpLmNoaWxkcmVuKGNvbmYudHJpZ2dlckVsZW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZVRhciA9ICQkJDEodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFSZW50ID0gZVRhci5wYXJlbnQoY29uZi5wYXJlbnRUcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaWJMaW5ncyA9IHBhUmVudC5zaWJsaW5ncyhjb25mLnBhcmVudFRyaWdnZXIpLmNoaWxkcmVuKGNvbmYudHJpZ2dlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIExpc3QgPSBwYVJlbnQuY2hpbGRyZW4oY29uZi5zdWJNZW51KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmYucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlVGFyLmF0dHIoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFSZW50Lmhhc0NsYXNzKGNvbmYuYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVRhci5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaGlkZShMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93KExpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVUYXIuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmYudG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYkxpbmdzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZi5vblRyYW5zaXRpb25TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYub25UcmFuc2l0aW9uU3RhcnQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcgfHwgJCQkMShlbGVtZW50KS5oYXNDbGFzcyh0aGlzLmNvbmZpZy5jb2xsYXBzaW5nQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQkJDEoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEV2ZW50ID0gJCQkMS5FdmVudChFdmVudC5TSE9XKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS50cmlnZ2VyKHN0YXJ0RXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbGVtLnBhcmVudCh0aGlzLmNvbmZpZy5wYXJlbnRUcmlnZ2VyKS5hZGRDbGFzcyh0aGlzLmNvbmZpZy5hY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKGVsZW0ucGFyZW50KHRoaXMuY29uZmlnLnBhcmVudFRyaWdnZXIpLnNpYmxpbmdzKCkuY2hpbGRyZW4odGhpcy5jb25maWcuc3ViTWVudSArIFwiLlwiICsgdGhpcy5jb25maWcuY29sbGFwc2VJbkNsYXNzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3ModGhpcy5jb25maWcuY29sbGFwc2VDbGFzcykuYWRkQ2xhc3ModGhpcy5jb25maWcuY29sbGFwc2luZ0NsYXNzKS5oZWlnaHQoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRpc3Bvc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmNvbmZpZyB8fCAhX3RoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcyhfdGhpcy5jb25maWcuY29sbGFwc2luZ0NsYXNzKS5hZGRDbGFzcyhfdGhpcy5jb25maWcuY29sbGFwc2VDbGFzcyArIFwiIFwiICsgX3RoaXMuY29uZmlnLmNvbGxhcHNlSW5DbGFzcykuaGVpZ2h0KCcnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnRyaWdnZXIoRXZlbnQuU0hPV04pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaGVpZ2h0KGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLm1tRW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcgfHwgISQkJDEoZWxlbWVudCkuaGFzQ2xhc3ModGhpcy5jb25maWcuY29sbGFwc2VJbkNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkJCQxKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRFdmVudCA9ICQkJDEuRXZlbnQoRXZlbnQuSElERSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0udHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbS5wYXJlbnQodGhpcy5jb25maWcucGFyZW50VHJpZ2dlcikucmVtb3ZlQ2xhc3ModGhpcy5jb25maWcuYWN0aXZlQ2xhc3MpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQoZWxlbS5oZWlnaHQoKSlbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKHRoaXMuY29uZmlnLmNvbGxhcHNpbmdDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5jb25maWcuY29sbGFwc2VDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5jb25maWcuY29sbGFwc2VJbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGlzcG9zZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMyLmNvbmZpZyB8fCAhX3RoaXMyLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczIudHJhbnNpdGlvbmluZyAmJiBfdGhpczIuY29uZmlnLm9uVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jb25maWcub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS50cmlnZ2VyKEV2ZW50LkhJRERFTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUNsYXNzKF90aGlzMi5jb25maWcuY29sbGFwc2luZ0NsYXNzKS5hZGRDbGFzcyhfdGhpczIuY29uZmlnLmNvbGxhcHNlQ2xhc3MpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaGVpZ2h0KCkgPT09IDAgfHwgZWxlbS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQoMCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5tbUVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIF9wcm90by5zZXRUcmFuc2l0aW9uaW5nID0gZnVuY3Rpb24gc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAgICAgICAgICQkJDEucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgICAgICAgICAgICAgICAgJCQkMSh0aGlzLmVsZW1lbnQpLmZpbmQodGhpcy5jb25maWcucGFyZW50VHJpZ2dlcikuaGFzKHRoaXMuY29uZmlnLnN1Yk1lbnUpLmNoaWxkcmVuKHRoaXMuY29uZmlnLnRyaWdnZXJFbGVtZW50KS5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgTWV0aXNNZW51LmpRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkJCQxKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmYgPSBfb2JqZWN0U3ByZWFkKHt9LCBEZWZhdWx0LCAkdGhpcy5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBNZXRpc01lbnUodGhpcywgY29uZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1ldGlzTWVudTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKiBqUXVlcnlcbiAgICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgJCQkMS5mbltOQU1FXSA9IE1ldGlzTWVudS5qUXVlcnlJbnRlcmZhY2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICAgICAgICAkJCQxLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTWV0aXNNZW51OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgICAgICAgJCQkMS5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgJCQkMS5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gICAgICAgICAgICByZXR1cm4gTWV0aXNNZW51LmpRdWVyeUludGVyZmFjZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gTWV0aXNNZW51O1xuICAgIH0oJCk7XG5cbiAgICByZXR1cm4gTWV0aXNNZW51O1xuXG59KSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==