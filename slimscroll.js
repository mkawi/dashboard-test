(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app~js/plugins/slimscroll"],{

/***/ "./assets/js/plugins/slimscroll/jquery.slimscroll.js":
/*!***********************************************************!*\
  !*** ./assets/js/plugins/slimscroll/jquery.slimscroll.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function ($) {
  $.fn.extend({
    slimScroll: function slimScroll(options) {
      var defaults = {
        // width in pixels of the visible scroll area
        width: 'auto',
        // height in pixels of the visible scroll area
        height: '250px',
        // width in pixels of the scrollbar and rail
        size: '7px',
        // scrollbar color, accepts any hex/color value
        color: '#000',
        // scrollbar position - left/right
        position: 'right',
        // distance in pixels between the side edge and the scrollbar
        distance: '1px',
        // default scroll position on load - top / bottom / $('selector')
        start: 'top',
        // sets scrollbar opacity
        opacity: .4,
        // enables always-on mode for the scrollbar
        alwaysVisible: false,
        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut: false,
        // sets visibility of the rail
        railVisible: false,
        // sets rail color
        railColor: '#333',
        // sets rail opacity
        railOpacity: .2,
        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable: true,
        // defautlt CSS class of the slimscroll rail
        railClass: 'slimScrollRail',
        // defautlt CSS class of the slimscroll bar
        barClass: 'slimScrollBar',
        // defautlt CSS class of the slimscroll wrapper
        wrapperClass: 'slimScrollDiv',
        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll: false,
        // scroll amount applied to each mouse wheel step
        wheelStep: 20,
        // scroll amount applied when user is using gestures
        touchScrollStep: 200,
        // sets border radius
        borderRadius: '7px',
        // sets border radius of the rail
        railBorderRadius: '7px'
      };
      var o = $.extend(defaults, options); // do it for every element that matches selector

      this.each(function () {
        var isOverPanel,
            isOverBar,
            isDragg,
            queueHide,
            touchDif,
            barHeight,
            percentScroll,
            lastScroll,
            divS = '<div></div>',
            minBarHeight = 30,
            releaseScroll = false; // used in event handlers and for better minification

        var me = $(this); // ensure we are not binding it again

        if (me.parent().hasClass(o.wrapperClass)) {
          // start from last bar position
          var offset = me.scrollTop(); // find bar and rail

          bar = me.closest('.' + o.barClass);
          rail = me.closest('.' + o.railClass);
          getBarHeight(); // check if we should scroll existing instance

          if ($.isPlainObject(options)) {
            // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
            if ('height' in options && options.height == 'auto') {
              me.parent().css('height', 'auto');
              me.css('height', 'auto');
              var height = me.parent().parent().height();
              me.parent().css('height', height);
              me.css('height', height);
            }

            if ('scrollTo' in options) {
              // jump to a static point
              offset = parseInt(o.scrollTo);
            } else if ('scrollBy' in options) {
              // jump by value pixels
              offset += parseInt(o.scrollBy);
            } else if ('destroy' in options) {
              // remove slimscroll elements
              bar.remove();
              rail.remove();
              me.unwrap();
              return;
            } // scroll content by the given offset


            scrollContent(offset, false, true);
          }

          return;
        } else if ($.isPlainObject(options)) {
          if ('destroy' in options) {
            return;
          }
        } // optionally set height to the parent's height


        o.height = o.height == 'auto' ? me.parent().height() : o.height; // wrap content

        var wrapper = $(divS).addClass(o.wrapperClass).css({
          position: 'relative',
          overflow: 'hidden',
          width: o.width,
          height: o.height
        }); // update style for the div

        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        }); // create scrollbar rail

        var rail = $(divS).addClass(o.railClass).css({
          width: o.size,
          height: '100%',
          position: 'absolute',
          top: 0,
          display: o.alwaysVisible && o.railVisible ? 'block' : 'none',
          'border-radius': o.railBorderRadius,
          background: o.railColor,
          opacity: o.railOpacity,
          zIndex: 90
        }); // create scrollbar

        var bar = $(divS).addClass(o.barClass).css({
          background: o.color,
          width: o.size,
          position: 'absolute',
          top: 0,
          opacity: o.opacity,
          display: o.alwaysVisible ? 'block' : 'none',
          'border-radius': o.borderRadius,
          BorderRadius: o.borderRadius,
          MozBorderRadius: o.borderRadius,
          WebkitBorderRadius: o.borderRadius,
          zIndex: 99
        }); // set position

        var posCss = o.position == 'right' ? {
          right: o.distance
        } : {
          left: o.distance
        };
        rail.css(posCss);
        bar.css(posCss); // wrap it

        me.wrap(wrapper); // append to parent div

        me.parent().append(bar);
        me.parent().append(rail); // make it draggable and no longer dependent on the jqueryUI

        if (o.railDraggable) {
          bar.bind("mousedown", function (e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;
            $doc.bind("mousemove.slimscroll", function (e) {
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false); // scroll content
            });
            $doc.bind("mouseup.slimscroll", function (e) {
              isDragg = false;
              hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function (e) {
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        } // on rail over


        rail.hover(function () {
          showBar();
        }, function () {
          hideBar();
        }); // on bar over

        bar.hover(function () {
          isOverBar = true;
        }, function () {
          isOverBar = false;
        }); // show on parent mouseover

        me.hover(function () {
          isOverPanel = true;
          showBar();
          hideBar();
        }, function () {
          isOverPanel = false;
          hideBar();
        }); // support for mobile

        me.bind('touchstart', function (e, b) {
          if (e.originalEvent.touches.length) {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });
        me.bind('touchmove', function (e) {
          // prevent scrolling the page if necessary
          if (!releaseScroll) {
            e.originalEvent.preventDefault();
          }

          if (e.originalEvent.touches.length) {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep; // scroll content

            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        }); // set up initial height

        getBarHeight(); // check start position

        if (o.start === 'bottom') {
          // scroll content to bottom
          bar.css({
            top: me.outerHeight() - bar.outerHeight()
          });
          scrollContent(0, true);
        } else if (o.start !== 'top') {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true); // make sure bar stays hidden

          if (!o.alwaysVisible) {
            bar.hide();
          }
        } // attach scroll events


        attachWheel(this);

        function _onWheel(e) {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) {
            return;
          }

          var e = e || window.event;
          var delta = 0;

          if (e.wheelDelta) {
            delta = -e.wheelDelta / 120;
          }

          if (e.detail) {
            delta = e.detail / 3;
          }

          var target = e.target || e.srcTarget || e.srcElement;

          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          } // stop window scroll


          if (e.preventDefault && !releaseScroll) {
            e.preventDefault();
          }

          if (!releaseScroll) {
            e.returnValue = false;
          }
        }

        function scrollContent(y, isWheel, isJump) {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel) {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight(); // move bar, make sure it doesn't go out

            delta = Math.min(Math.max(delta, 0), maxTop); // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity

            delta = y > 0 ? Math.ceil(delta) : Math.floor(delta); // scroll the scrollbar

            bar.css({
              top: delta + 'px'
            });
          } // calculate actual scroll amount


          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump) {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({
              top: offsetTop + 'px'
            });
          } // scroll content


          me.scrollTop(delta); // fire scrolling event

          me.trigger('slimscrolling', ~~delta); // ensure bar is visible

          showBar(); // trigger hide when scroll is stopped

          hideBar();
        }

        function attachWheel(target) {
          if (window.addEventListener) {
            target.addEventListener('DOMMouseScroll', _onWheel, false);
            target.addEventListener('mousewheel', _onWheel, false);
          } else {
            document.attachEvent("onmousewheel", _onWheel);
          }
        }

        function getBarHeight() {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max(me.outerHeight() / me[0].scrollHeight * me.outerHeight(), minBarHeight);
          bar.css({
            height: barHeight + 'px'
          }); // hide scrollbar if content is not long enough

          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({
            display: display
          });
        }

        function showBar() {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide); // when bar reached top or bottom

          if (percentScroll == ~~percentScroll) {
            //release wheel
            releaseScroll = o.allowPageScroll; // publish approporiate event

            if (lastScroll != percentScroll) {
              var msg = ~~percentScroll == 0 ? 'top' : 'bottom';
              me.trigger('slimscroll', msg);
            }
          } else {
            releaseScroll = false;
          }

          lastScroll = percentScroll; // show only when required

          if (barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }

          bar.stop(true, true).fadeIn('fast');

          if (o.railVisible) {
            rail.stop(true, true).fadeIn('fast');
          }
        }

        function hideBar() {
          // only hide when options allow it
          if (!o.alwaysVisible) {
            queueHide = setTimeout(function () {
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }
      }); // maintain chainability

      return this;
    }
  });
  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9zbGltc2Nyb2xsL2pxdWVyeS5zbGltc2Nyb2xsLmpzIl0sIm5hbWVzIjpbIiQiLCJmbiIsImV4dGVuZCIsInNsaW1TY3JvbGwiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJjb2xvciIsInBvc2l0aW9uIiwiZGlzdGFuY2UiLCJzdGFydCIsIm9wYWNpdHkiLCJhbHdheXNWaXNpYmxlIiwiZGlzYWJsZUZhZGVPdXQiLCJyYWlsVmlzaWJsZSIsInJhaWxDb2xvciIsInJhaWxPcGFjaXR5IiwicmFpbERyYWdnYWJsZSIsInJhaWxDbGFzcyIsImJhckNsYXNzIiwid3JhcHBlckNsYXNzIiwiYWxsb3dQYWdlU2Nyb2xsIiwid2hlZWxTdGVwIiwidG91Y2hTY3JvbGxTdGVwIiwiYm9yZGVyUmFkaXVzIiwicmFpbEJvcmRlclJhZGl1cyIsIm8iLCJlYWNoIiwiaXNPdmVyUGFuZWwiLCJpc092ZXJCYXIiLCJpc0RyYWdnIiwicXVldWVIaWRlIiwidG91Y2hEaWYiLCJiYXJIZWlnaHQiLCJwZXJjZW50U2Nyb2xsIiwibGFzdFNjcm9sbCIsImRpdlMiLCJtaW5CYXJIZWlnaHQiLCJyZWxlYXNlU2Nyb2xsIiwibWUiLCJwYXJlbnQiLCJoYXNDbGFzcyIsIm9mZnNldCIsInNjcm9sbFRvcCIsImJhciIsImNsb3Nlc3QiLCJyYWlsIiwiZ2V0QmFySGVpZ2h0IiwiaXNQbGFpbk9iamVjdCIsImNzcyIsInBhcnNlSW50Iiwic2Nyb2xsVG8iLCJzY3JvbGxCeSIsInJlbW92ZSIsInVud3JhcCIsInNjcm9sbENvbnRlbnQiLCJ3cmFwcGVyIiwiYWRkQ2xhc3MiLCJvdmVyZmxvdyIsInRvcCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiQm9yZGVyUmFkaXVzIiwiTW96Qm9yZGVyUmFkaXVzIiwiV2Via2l0Qm9yZGVyUmFkaXVzIiwicG9zQ3NzIiwicmlnaHQiLCJsZWZ0Iiwid3JhcCIsImFwcGVuZCIsImJpbmQiLCJlIiwiJGRvYyIsImRvY3VtZW50IiwidCIsInBhcnNlRmxvYXQiLCJwYWdlWSIsImN1cnJUb3AiLCJoaWRlQmFyIiwidW5iaW5kIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJob3ZlciIsInNob3dCYXIiLCJiIiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJsZW5ndGgiLCJkaWZmIiwib3V0ZXJIZWlnaHQiLCJoaWRlIiwiYXR0YWNoV2hlZWwiLCJfb25XaGVlbCIsIndpbmRvdyIsImV2ZW50IiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwidGFyZ2V0Iiwic3JjVGFyZ2V0Iiwic3JjRWxlbWVudCIsImlzIiwicmV0dXJuVmFsdWUiLCJ5IiwiaXNXaGVlbCIsImlzSnVtcCIsIm1heFRvcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJjZWlsIiwiZmxvb3IiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRUb3AiLCJ0cmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiY2xlYXJUaW1lb3V0IiwibXNnIiwic3RvcCIsImZhZGVJbiIsInNldFRpbWVvdXQiLCJmYWRlT3V0Iiwic2xpbXNjcm9sbCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBRVhBLEdBQUMsQ0FBQ0MsRUFBRixDQUFLQyxNQUFMLENBQVk7QUFDVkMsY0FBVSxFQUFFLG9CQUFTQyxPQUFULEVBQWtCO0FBRTVCLFVBQUlDLFFBQVEsR0FBRztBQUViO0FBQ0FDLGFBQUssRUFBRyxNQUhLO0FBS2I7QUFDQUMsY0FBTSxFQUFHLE9BTkk7QUFRYjtBQUNBQyxZQUFJLEVBQUcsS0FUTTtBQVdiO0FBQ0FDLGFBQUssRUFBRSxNQVpNO0FBY2I7QUFDQUMsZ0JBQVEsRUFBRyxPQWZFO0FBaUJiO0FBQ0FDLGdCQUFRLEVBQUcsS0FsQkU7QUFvQmI7QUFDQUMsYUFB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cUJDLE1BQXJCLENBQTRCLE1BQTVCO0FBQXNDO0FBQzVEOztBQUVELGlCQUFTMUMsT0FBVCxHQUNBO0FBQ0U7QUFDQSxjQUFJLENBQUNyRCxDQUFDLENBQUNkLGFBQVAsRUFDQTtBQUNFbUIscUJBQVMsR0FBRzJGLFVBQVUsQ0FBQyxZQUFVO0FBQy9CLGtCQUFJLEVBQUVoRyxDQUFDLENBQUNiLGNBQUYsSUFBb0JlLFdBQXRCLEtBQXNDLENBQUNDLFNBQXZDLElBQW9ELENBQUNDLE9BQXpELEVBQ0E7QUFDRWMsbUJBQUcsQ0FBQytFLE9BQUosQ0FBWSxNQUFaO0FBQ0E3RSxvQkFBSSxDQUFDNkUsT0FBTCxDQUFhLE1BQWI7QUFDRDtBQUNGLGFBTnFCLEVBTW5CLElBTm1CLENBQXRCO0FBT0Q7QUFDRjtBQUVGLE9BdFhELEVBMUU0QixDQWtjNUI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFyY1MsR0FBWjtBQXdjQTdILEdBQUMsQ0FBQ0MsRUFBRixDQUFLQyxNQUFMLENBQVk7QUFDVjRILGNBQVUsRUFBRTlILENBQUMsQ0FBQ0MsRUFBRixDQUFLRTtBQURQLEdBQVo7QUFJRCxDQTljRCxFQThjRzRILE1BOWNILEUiLCJmaWxlIjoianMvYXBwfmpzL3BsdWdpbnMvc2xpbXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBDb3B5cmlnaHQgKGMpIDIwMTEgUGlvdHIgUm9jaGFsYSAoaHR0cDovL3JvY2hhLmxhKVxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqIGFuZCBHUEwgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZ3BsLWxpY2Vuc2UucGhwKSBsaWNlbnNlcy5cbiAqXG4gKiBWZXJzaW9uOiAxLjMuNlxuICpcbiAqL1xuKGZ1bmN0aW9uKCQpIHtcblxuICAkLmZuLmV4dGVuZCh7XG4gICAgc2xpbVNjcm9sbDogZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICAgICAgLy8gd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSB2aXNpYmxlIHNjcm9sbCBhcmVhXG4gICAgICAgIHdpZHRoIDogJ2F1dG8nLFxuXG4gICAgICAgIC8vIGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIHZpc2libGUgc2Nyb2xsIGFyZWFcbiAgICAgICAgaGVpZ2h0IDogJzI1MHB4JyxcblxuICAgICAgICAvLyB3aWR0aCBpbiBwaXhlbHMgb2YgdGhlIHNjcm9sbGJhciBhbmQgcmFpbFxuICAgICAgICBzaXplIDogJzdweCcsXG5cbiAgICAgICAgLy8gc2Nyb2xsYmFyIGNvbG9yLCBhY2NlcHRzIGFueSBoZXgvY29sb3IgdmFsdWVcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcblxuICAgICAgICAvLyBzY3JvbGxiYXIgcG9zaXRpb24gLSBsZWZ0L3JpZ2h0XG4gICAgICAgIHBvc2l0aW9uIDogJ3JpZ2h0JyxcblxuICAgICAgICAvLyBkaXN0YW5jZSBpbiBwaXhlbHMgYmV0d2VlbiB0aGUgc2lkZSBlZGdlIGFuZCB0aGUgc2Nyb2xsYmFyXG4gICAgICAgIGRpc3RhbmNlIDogJzFweCcsXG5cbiAgICAgICAgLy8gZGVmYXVsdCBzY3JvbGwgcG9zaXRpb24gb24gbG9hZCAtIHRvcCAvIGJvdHRvbSAvICQoJ3NlbGVjdG9yJylcbiAgICAgICAgc3RhcnQgOiAndG9wJyxcblxuICAgICAgICAvLyBzZXRzIHNjcm9sbGJhciBvcGFjaXR5XG4gICAgICAgIG9wYWNpdHkgOiAuNCxcblxuICAgICAgICAvLyBlbmFibGVzIGFsd2F5cy1vbiBtb2RlIGZvciB0aGUgc2Nyb2xsYmFyXG4gICAgICAgIGFsd2F5c1Zpc2libGUgOiBmYWxzZSxcblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBzaG91bGQgaGlkZSB0aGUgc2Nyb2xsYmFyIHdoZW4gdXNlciBpcyBob3ZlcmluZyBvdmVyXG4gICAgICAgIGRpc2FibGVGYWRlT3V0IDogZmFsc2UsXG5cbiAgICAgICAgLy8gc2V0cyB2aXNpYmlsaXR5IG9mIHRoZSByYWlsXG4gICAgICAgIHJhaWxWaXNpYmxlIDogZmFsc2UsXG5cbiAgICAgICAgLy8gc2V0cyByYWlsIGNvbG9yXG4gICAgICAgIHJhaWxDb2xvciA6ICcjMzMzJyxcblxuICAgICAgICAvLyBzZXRzIHJhaWwgb3BhY2l0eVxuICAgICAgICByYWlsT3BhY2l0eSA6IC4yLFxuXG4gICAgICAgIC8vIHdoZXRoZXIgIHdlIHNob3VsZCB1c2UgalF1ZXJ5IFVJIERyYWdnYWJsZSB0byBlbmFibGUgYmFyIGRyYWdnaW5nXG4gICAgICAgIHJhaWxEcmFnZ2FibGUgOiB0cnVlLFxuXG4gICAgICAgIC8vIGRlZmF1dGx0IENTUyBjbGFzcyBvZiB0aGUgc2xpbXNjcm9sbCByYWlsXG4gICAgICAgIHJhaWxDbGFzcyA6ICdzbGltU2Nyb2xsUmFpbCcsXG5cbiAgICAgICAgLy8gZGVmYXV0bHQgQ1NTIGNsYXNzIG9mIHRoZSBzbGltc2Nyb2xsIGJhclxuICAgICAgICBiYXJDbGFzcyA6ICdzbGltU2Nyb2xsQmFyJyxcblxuICAgICAgICAvLyBkZWZhdXRsdCBDU1MgY2xhc3Mgb2YgdGhlIHNsaW1zY3JvbGwgd3JhcHBlclxuICAgICAgICB3cmFwcGVyQ2xhc3MgOiAnc2xpbVNjcm9sbERpdicsXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgbW91c2V3aGVlbCBzaG91bGQgc2Nyb2xsIHRoZSB3aW5kb3cgaWYgd2UgcmVhY2ggdG9wL2JvdHRvbVxuICAgICAgICBhbGxvd1BhZ2VTY3JvbGwgOiBmYWxzZSxcblxuICAgICAgICAvLyBzY3JvbGwgYW1vdW50IGFwcGxpZWQgdG8gZWFjaCBtb3VzZSB3aGVlbCBzdGVwXG4gICAgICAgIHdoZWVsU3RlcCA6IDIwLFxuXG4gICAgICAgIC8vIHNjcm9sbCBhbW91bnQgYXBwbGllZCB3aGVuIHVzZXIgaXMgdXNpbmcgZ2VzdHVyZXNcbiAgICAgICAgdG91Y2hTY3JvbGxTdGVwIDogMjAwLFxuXG4gICAgICAgIC8vIHNldHMgYm9yZGVyIHJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnLFxuXG4gICAgICAgIC8vIHNldHMgYm9yZGVyIHJhZGl1cyBvZiB0aGUgcmFpbFxuICAgICAgICByYWlsQm9yZGVyUmFkaXVzIDogJzdweCdcbiAgICAgIH07XG5cbiAgICAgIHZhciBvID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBkbyBpdCBmb3IgZXZlcnkgZWxlbWVudCB0aGF0IG1hdGNoZXMgc2VsZWN0b3JcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgICAgIHZhciBpc092ZXJQYW5lbCwgaXNPdmVyQmFyLCBpc0RyYWdnLCBxdWV1ZUhpZGUsIHRvdWNoRGlmLFxuICAgICAgICAgICAgYmFySGVpZ2h0LCBwZXJjZW50U2Nyb2xsLCBsYXN0U2Nyb2xsLFxuICAgICAgICAgICAgZGl2UyA9ICc8ZGl2PjwvZGl2PicsXG4gICAgICAgICAgICBtaW5CYXJIZWlnaHQgPSAzMCxcbiAgICAgICAgICAgIHJlbGVhc2VTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgICAvLyB1c2VkIGluIGV2ZW50IGhhbmRsZXJzIGFuZCBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgICAgICB2YXIgbWUgPSAkKHRoaXMpO1xuXG4gICAgICAgIC8vIGVuc3VyZSB3ZSBhcmUgbm90IGJpbmRpbmcgaXQgYWdhaW5cbiAgICAgICAgaWYgKG1lLnBhcmVudCgpLmhhc0NsYXNzKG8ud3JhcHBlckNsYXNzKSlcbiAgICAgICAge1xuICAgICAgICAgIC8vIHN0YXJ0IGZyb20gbGFzdCBiYXIgcG9zaXRpb25cbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gbWUuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAvLyBmaW5kIGJhciBhbmQgcmFpbFxuICAgICAgICAgIGJhciA9IG1lLmNsb3Nlc3QoJy4nICsgby5iYXJDbGFzcyk7XG4gICAgICAgICAgcmFpbCA9IG1lLmNsb3Nlc3QoJy4nICsgby5yYWlsQ2xhc3MpO1xuXG4gICAgICAgICAgZ2V0QmFySGVpZ2h0KCk7XG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBzaG91bGQgc2Nyb2xsIGV4aXN0aW5nIGluc3RhbmNlXG4gICAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChvcHRpb25zKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBQYXNzIGhlaWdodDogYXV0byB0byBhbiBleGlzdGluZyBzbGltc2Nyb2xsIG9iamVjdCB0byBmb3JjZSBhIHJlc2l6ZSBhZnRlciBjb250ZW50cyBoYXZlIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICggJ2hlaWdodCcgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlaWdodCA9PSAnYXV0bycgKSB7XG4gICAgICAgICAgICAgIG1lLnBhcmVudCgpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgICAgICAgICAgbWUuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gbWUucGFyZW50KCkucGFyZW50KCkuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgIG1lLnBhcmVudCgpLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgbWUuY3NzKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ3Njcm9sbFRvJyBpbiBvcHRpb25zKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBqdW1wIHRvIGEgc3RhdGljIHBvaW50XG4gICAgICAgICAgICAgIG9mZnNldCA9IHBhcnNlSW50KG8uc2Nyb2xsVG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJ3Njcm9sbEJ5JyBpbiBvcHRpb25zKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBqdW1wIGJ5IHZhbHVlIHBpeGVsc1xuICAgICAgICAgICAgICBvZmZzZXQgKz0gcGFyc2VJbnQoby5zY3JvbGxCeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgnZGVzdHJveScgaW4gb3B0aW9ucylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIHNsaW1zY3JvbGwgZWxlbWVudHNcbiAgICAgICAgICAgICAgYmFyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICByYWlsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBtZS51bndyYXAoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzY3JvbGwgY29udGVudCBieSB0aGUgZ2l2ZW4gb2Zmc2V0XG4gICAgICAgICAgICBzY3JvbGxDb250ZW50KG9mZnNldCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoJ2Rlc3Ryb3knIGluIG9wdGlvbnMpXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9wdGlvbmFsbHkgc2V0IGhlaWdodCB0byB0aGUgcGFyZW50J3MgaGVpZ2h0XG4gICAgICAgIG8uaGVpZ2h0ID0gKG8uaGVpZ2h0ID09ICdhdXRvJykgPyBtZS5wYXJlbnQoKS5oZWlnaHQoKSA6IG8uaGVpZ2h0O1xuXG4gICAgICAgIC8vIHdyYXAgY29udGVudFxuICAgICAgICB2YXIgd3JhcHBlciA9ICQoZGl2UylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhvLndyYXBwZXJDbGFzcylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICB3aWR0aDogby53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBvLmhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0eWxlIGZvciB0aGUgZGl2XG4gICAgICAgIG1lLmNzcyh7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIHdpZHRoOiBvLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogby5oZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHNjcm9sbGJhciByYWlsXG4gICAgICAgIHZhciByYWlsID0gJChkaXZTKVxuICAgICAgICAgICAgLmFkZENsYXNzKG8ucmFpbENsYXNzKVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgIHdpZHRoOiBvLnNpemUsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAoby5hbHdheXNWaXNpYmxlICYmIG8ucmFpbFZpc2libGUpID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBvLnJhaWxCb3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG8ucmFpbENvbG9yLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBvLnJhaWxPcGFjaXR5LFxuICAgICAgICAgICAgICB6SW5kZXg6IDkwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBjcmVhdGUgc2Nyb2xsYmFyXG4gICAgICAgIHZhciBiYXIgPSAkKGRpdlMpXG4gICAgICAgICAgICAuYWRkQ2xhc3Moby5iYXJDbGFzcylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvLmNvbG9yLFxuICAgICAgICAgICAgICB3aWR0aDogby5zaXplLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBvLm9wYWNpdHksXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG8uYWx3YXlzVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgICAgICdib3JkZXItcmFkaXVzJyA6IG8uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBCb3JkZXJSYWRpdXM6IG8uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBNb3pCb3JkZXJSYWRpdXM6IG8uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBXZWJraXRCb3JkZXJSYWRpdXM6IG8uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICB6SW5kZXg6IDk5XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZXQgcG9zaXRpb25cbiAgICAgICAgdmFyIHBvc0NzcyA9IChvLnBvc2l0aW9uID09ICdyaWdodCcpID8geyByaWdodDogby5kaXN0YW5jZSB9IDogeyBsZWZ0OiBvLmRpc3RhbmNlIH07XG4gICAgICAgIHJhaWwuY3NzKHBvc0Nzcyk7XG4gICAgICAgIGJhci5jc3MocG9zQ3NzKTtcblxuICAgICAgICAvLyB3cmFwIGl0XG4gICAgICAgIG1lLndyYXAod3JhcHBlcik7XG5cbiAgICAgICAgLy8gYXBwZW5kIHRvIHBhcmVudCBkaXZcbiAgICAgICAgbWUucGFyZW50KCkuYXBwZW5kKGJhcik7XG4gICAgICAgIG1lLnBhcmVudCgpLmFwcGVuZChyYWlsKTtcblxuICAgICAgICAvLyBtYWtlIGl0IGRyYWdnYWJsZSBhbmQgbm8gbG9uZ2VyIGRlcGVuZGVudCBvbiB0aGUganF1ZXJ5VUlcbiAgICAgICAgaWYgKG8ucmFpbERyYWdnYWJsZSl7XG4gICAgICAgICAgYmFyLmJpbmQoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICAgICAgICAgIGlzRHJhZ2cgPSB0cnVlO1xuICAgICAgICAgICAgdCA9IHBhcnNlRmxvYXQoYmFyLmNzcygndG9wJykpO1xuICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZO1xuXG4gICAgICAgICAgICAkZG9jLmJpbmQoXCJtb3VzZW1vdmUuc2xpbXNjcm9sbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgY3VyclRvcCA9IHQgKyBlLnBhZ2VZIC0gcGFnZVk7XG4gICAgICAgICAgICAgIGJhci5jc3MoJ3RvcCcsIGN1cnJUb3ApO1xuICAgICAgICAgICAgICBzY3JvbGxDb250ZW50KDAsIGJhci5wb3NpdGlvbigpLnRvcCwgZmFsc2UpOy8vIHNjcm9sbCBjb250ZW50XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGRvYy5iaW5kKFwibW91c2V1cC5zbGltc2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgaXNEcmFnZyA9IGZhbHNlO2hpZGVCYXIoKTtcbiAgICAgICAgICAgICAgJGRvYy51bmJpbmQoJy5zbGltc2Nyb2xsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KS5iaW5kKFwic2VsZWN0c3RhcnQuc2xpbXNjcm9sbFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbiByYWlsIG92ZXJcbiAgICAgICAgcmFpbC5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgIHNob3dCYXIoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICBoaWRlQmFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG9uIGJhciBvdmVyXG4gICAgICAgIGJhci5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgIGlzT3ZlckJhciA9IHRydWU7XG4gICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaXNPdmVyQmFyID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNob3cgb24gcGFyZW50IG1vdXNlb3ZlclxuICAgICAgICBtZS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgIGlzT3ZlclBhbmVsID0gdHJ1ZTtcbiAgICAgICAgICBzaG93QmFyKCk7XG4gICAgICAgICAgaGlkZUJhcigpO1xuICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgIGlzT3ZlclBhbmVsID0gZmFsc2U7XG4gICAgICAgICAgaGlkZUJhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBtb2JpbGVcbiAgICAgICAgbWUuYmluZCgndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUsYil7XG4gICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyByZWNvcmQgd2hlcmUgdG91Y2ggc3RhcnRlZFxuICAgICAgICAgICAgdG91Y2hEaWYgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmJpbmQoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIC8vIHByZXZlbnQgc2Nyb2xsaW5nIHRoZSBwYWdlIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmKCFyZWxlYXNlU2Nyb2xsKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGUub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHNlZSBob3cgZmFyIHVzZXIgc3dpcGVkXG4gICAgICAgICAgICB2YXIgZGlmZiA9ICh0b3VjaERpZiAtIGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZKSAvIG8udG91Y2hTY3JvbGxTdGVwO1xuICAgICAgICAgICAgLy8gc2Nyb2xsIGNvbnRlbnRcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQoZGlmZiwgdHJ1ZSk7XG4gICAgICAgICAgICB0b3VjaERpZiA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc2V0IHVwIGluaXRpYWwgaGVpZ2h0XG4gICAgICAgIGdldEJhckhlaWdodCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIHN0YXJ0IHBvc2l0aW9uXG4gICAgICAgIGlmIChvLnN0YXJ0ID09PSAnYm90dG9tJylcbiAgICAgICAge1xuICAgICAgICAgIC8vIHNjcm9sbCBjb250ZW50IHRvIGJvdHRvbVxuICAgICAgICAgIGJhci5jc3MoeyB0b3A6IG1lLm91dGVySGVpZ2h0KCkgLSBiYXIub3V0ZXJIZWlnaHQoKSB9KTtcbiAgICAgICAgICBzY3JvbGxDb250ZW50KDAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG8uc3RhcnQgIT09ICd0b3AnKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gYXNzdW1lIGpRdWVyeSBzZWxlY3RvclxuICAgICAgICAgIHNjcm9sbENvbnRlbnQoJChvLnN0YXJ0KS5wb3NpdGlvbigpLnRvcCwgbnVsbCwgdHJ1ZSk7XG5cbiAgICAgICAgICAvLyBtYWtlIHN1cmUgYmFyIHN0YXlzIGhpZGRlblxuICAgICAgICAgIGlmICghby5hbHdheXNWaXNpYmxlKSB7IGJhci5oaWRlKCk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0dGFjaCBzY3JvbGwgZXZlbnRzXG4gICAgICAgIGF0dGFjaFdoZWVsKHRoaXMpO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9vbldoZWVsKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAvLyB1c2UgbW91c2Ugd2hlZWwgb25seSB3aGVuIG1vdXNlIGlzIG92ZXJcbiAgICAgICAgICBpZiAoIWlzT3ZlclBhbmVsKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgdmFyIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgICAgaWYgKGUud2hlZWxEZWx0YSkgeyBkZWx0YSA9IC1lLndoZWVsRGVsdGEvMTIwOyB9XG4gICAgICAgICAgaWYgKGUuZGV0YWlsKSB7IGRlbHRhID0gZS5kZXRhaWwgLyAzOyB9XG5cbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNUYXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICAgIGlmICgkKHRhcmdldCkuY2xvc2VzdCgnLicgKyBvLndyYXBwZXJDbGFzcykuaXMobWUucGFyZW50KCkpKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgY29udGVudFxuICAgICAgICAgICAgc2Nyb2xsQ29udGVudChkZWx0YSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc3RvcCB3aW5kb3cgc2Nyb2xsXG4gICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQgJiYgIXJlbGVhc2VTY3JvbGwpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgICAgICAgaWYgKCFyZWxlYXNlU2Nyb2xsKSB7IGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsQ29udGVudCh5LCBpc1doZWVsLCBpc0p1bXApXG4gICAgICAgIHtcbiAgICAgICAgICByZWxlYXNlU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgdmFyIGRlbHRhID0geTtcbiAgICAgICAgICB2YXIgbWF4VG9wID0gbWUub3V0ZXJIZWlnaHQoKSAtIGJhci5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgICAgaWYgKGlzV2hlZWwpXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gbW92ZSBiYXIgd2l0aCBtb3VzZSB3aGVlbFxuICAgICAgICAgICAgZGVsdGEgPSBwYXJzZUludChiYXIuY3NzKCd0b3AnKSkgKyB5ICogcGFyc2VJbnQoby53aGVlbFN0ZXApIC8gMTAwICogYmFyLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIC8vIG1vdmUgYmFyLCBtYWtlIHN1cmUgaXQgZG9lc24ndCBnbyBvdXRcbiAgICAgICAgICAgIGRlbHRhID0gTWF0aC5taW4oTWF0aC5tYXgoZGVsdGEsIDApLCBtYXhUb3ApO1xuXG4gICAgICAgICAgICAvLyBpZiBzY3JvbGxpbmcgZG93biwgbWFrZSBzdXJlIGEgZnJhY3Rpb25hbCBjaGFuZ2UgdG8gdGhlXG4gICAgICAgICAgICAvLyBzY3JvbGwgcG9zaXRpb24gaXNuJ3Qgcm91bmRlZCBhd2F5IHdoZW4gdGhlIHNjcm9sbGJhcidzIENTUyBpcyBzZXRcbiAgICAgICAgICAgIC8vIHRoaXMgZmxvb3Jpbmcgb2YgZGVsdGEgd291bGQgaGFwcGVuZWQgYXV0b21hdGljYWxseSB3aGVuXG4gICAgICAgICAgICAvLyBiYXIuY3NzIGlzIHNldCBiZWxvdywgYnV0IHdlIGZsb29yIGhlcmUgZm9yIGNsYXJpdHlcbiAgICAgICAgICAgIGRlbHRhID0gKHkgPiAwKSA/IE1hdGguY2VpbChkZWx0YSkgOiBNYXRoLmZsb29yKGRlbHRhKTtcblxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRoZSBzY3JvbGxiYXJcbiAgICAgICAgICAgIGJhci5jc3MoeyB0b3A6IGRlbHRhICsgJ3B4JyB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjYWxjdWxhdGUgYWN0dWFsIHNjcm9sbCBhbW91bnRcbiAgICAgICAgICBwZXJjZW50U2Nyb2xsID0gcGFyc2VJbnQoYmFyLmNzcygndG9wJykpIC8gKG1lLm91dGVySGVpZ2h0KCkgLSBiYXIub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICAgZGVsdGEgPSBwZXJjZW50U2Nyb2xsICogKG1lWzBdLnNjcm9sbEhlaWdodCAtIG1lLm91dGVySGVpZ2h0KCkpO1xuXG4gICAgICAgICAgaWYgKGlzSnVtcClcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkZWx0YSA9IHk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0VG9wID0gZGVsdGEgLyBtZVswXS5zY3JvbGxIZWlnaHQgKiBtZS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgb2Zmc2V0VG9wID0gTWF0aC5taW4oTWF0aC5tYXgob2Zmc2V0VG9wLCAwKSwgbWF4VG9wKTtcbiAgICAgICAgICAgIGJhci5jc3MoeyB0b3A6IG9mZnNldFRvcCArICdweCcgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2Nyb2xsIGNvbnRlbnRcbiAgICAgICAgICBtZS5zY3JvbGxUb3AoZGVsdGEpO1xuXG4gICAgICAgICAgLy8gZmlyZSBzY3JvbGxpbmcgZXZlbnRcbiAgICAgICAgICBtZS50cmlnZ2VyKCdzbGltc2Nyb2xsaW5nJywgfn5kZWx0YSk7XG5cbiAgICAgICAgICAvLyBlbnN1cmUgYmFyIGlzIHZpc2libGVcbiAgICAgICAgICBzaG93QmFyKCk7XG5cbiAgICAgICAgICAvLyB0cmlnZ2VyIGhpZGUgd2hlbiBzY3JvbGwgaXMgc3RvcHBlZFxuICAgICAgICAgIGhpZGVCYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaFdoZWVsKHRhcmdldClcbiAgICAgICAge1xuICAgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBfb25XaGVlbCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgX29uV2hlZWwsIGZhbHNlICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ubW91c2V3aGVlbFwiLCBfb25XaGVlbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRCYXJIZWlnaHQoKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHNjcm9sbGJhciBoZWlnaHQgYW5kIG1ha2Ugc3VyZSBpdCBpcyBub3QgdG9vIHNtYWxsXG4gICAgICAgICAgYmFySGVpZ2h0ID0gTWF0aC5tYXgoKG1lLm91dGVySGVpZ2h0KCkgLyBtZVswXS5zY3JvbGxIZWlnaHQpICogbWUub3V0ZXJIZWlnaHQoKSwgbWluQmFySGVpZ2h0KTtcbiAgICAgICAgICBiYXIuY3NzKHsgaGVpZ2h0OiBiYXJIZWlnaHQgKyAncHgnIH0pO1xuXG4gICAgICAgICAgLy8gaGlkZSBzY3JvbGxiYXIgaWYgY29udGVudCBpcyBub3QgbG9uZyBlbm91Z2hcbiAgICAgICAgICB2YXIgZGlzcGxheSA9IGJhckhlaWdodCA9PSBtZS5vdXRlckhlaWdodCgpID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgICBiYXIuY3NzKHsgZGlzcGxheTogZGlzcGxheSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNob3dCYXIoKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gcmVjYWxjdWxhdGUgYmFyIGhlaWdodFxuICAgICAgICAgIGdldEJhckhlaWdodCgpO1xuICAgICAgICAgIGNsZWFyVGltZW91dChxdWV1ZUhpZGUpO1xuXG4gICAgICAgICAgLy8gd2hlbiBiYXIgcmVhY2hlZCB0b3Agb3IgYm90dG9tXG4gICAgICAgICAgaWYgKHBlcmNlbnRTY3JvbGwgPT0gfn5wZXJjZW50U2Nyb2xsKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vcmVsZWFzZSB3aGVlbFxuICAgICAgICAgICAgcmVsZWFzZVNjcm9sbCA9IG8uYWxsb3dQYWdlU2Nyb2xsO1xuXG4gICAgICAgICAgICAvLyBwdWJsaXNoIGFwcHJvcG9yaWF0ZSBldmVudFxuICAgICAgICAgICAgaWYgKGxhc3RTY3JvbGwgIT0gcGVyY2VudFNjcm9sbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIG1zZyA9ICh+fnBlcmNlbnRTY3JvbGwgPT0gMCkgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICAgICAgICBtZS50cmlnZ2VyKCdzbGltc2Nyb2xsJywgbXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlbGVhc2VTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFzdFNjcm9sbCA9IHBlcmNlbnRTY3JvbGw7XG5cbiAgICAgICAgICAvLyBzaG93IG9ubHkgd2hlbiByZXF1aXJlZFxuICAgICAgICAgIGlmKGJhckhlaWdodCA+PSBtZS5vdXRlckhlaWdodCgpKSB7XG4gICAgICAgICAgICAvL2FsbG93IHdpbmRvdyBzY3JvbGxcbiAgICAgICAgICAgIHJlbGVhc2VTY3JvbGwgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiYXIuc3RvcCh0cnVlLHRydWUpLmZhZGVJbignZmFzdCcpO1xuICAgICAgICAgIGlmIChvLnJhaWxWaXNpYmxlKSB7IHJhaWwuc3RvcCh0cnVlLHRydWUpLmZhZGVJbignZmFzdCcpOyB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoaWRlQmFyKClcbiAgICAgICAge1xuICAgICAgICAgIC8vIG9ubHkgaGlkZSB3aGVuIG9wdGlvbnMgYWxsb3cgaXRcbiAgICAgICAgICBpZiAoIW8uYWx3YXlzVmlzaWJsZSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWV1ZUhpZGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIGlmICghKG8uZGlzYWJsZUZhZGVPdXQgJiYgaXNPdmVyUGFuZWwpICYmICFpc092ZXJCYXIgJiYgIWlzRHJhZ2cpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiYXIuZmFkZU91dCgnc2xvdycpO1xuICAgICAgICAgICAgICAgIHJhaWwuZmFkZU91dCgnc2xvdycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgIC8vIG1haW50YWluIGNoYWluYWJpbGl0eVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9KTtcblxuICAkLmZuLmV4dGVuZCh7XG4gICAgc2xpbXNjcm9sbDogJC5mbi5zbGltU2Nyb2xsXG4gIH0pO1xuXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=