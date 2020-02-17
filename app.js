(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_2__);



// load jquery package from node_modules
//var $ = require('jquery');
//window.$ = $;
//window.jQuery = $;
//window.Popper = require('popper.js');
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

 //$('#example').tooltip({placement: 'top'});

__webpack_require__(/*! ../js/plugins/slimscroll/jquery.slimscroll */ "./assets/js/plugins/slimscroll/jquery.slimscroll.js");

__webpack_require__(/*! ../js/plugins/metisMenu/jquery.metisMenu */ "./assets/js/plugins/metisMenu/jquery.metisMenu.js"); //$('#side-menu').metisMenu();


$(document).ready(function () {
  // Add body-small class if window less than 768px
  if (window.innerWidth < 769) {
    $('body').addClass('body-small');
  } else {
    $('body').removeClass('body-small');
  } // metisMenu


  var sideMenu = $('#side-menu').metisMenu(); // Minimalize menu

  $('.navbar-minimalize').on('click', function (event) {
    event.preventDefault();
    $("body").toggleClass("mini-navbar");
    SmoothlyMenu();
  });
}); // Minimalize menu when screen is less than 768px

$(window).bind("resize", function () {
  if (window.innerWidth < 769) {
    $('body').addClass('body-small');
  } else {
    $('body').removeClass('body-small');
  }
}); // Fixed Sidebar

$(window).bind("load", function () {
  if ($("body").hasClass('fixed-sidebar')) {
    $('.sidebar-collapse').slimScroll({
      height: '100%',
      railOpacity: 0.9
    });
  }
});

function SmoothlyMenu() {
  if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
    // Hide menu in order to smoothly turn on when maximize menu
    $('#side-menu').hide(); // For smoothly turn on menu

    setTimeout(function () {
      $('#side-menu').fadeIn(400);
    }, 200);
  } else if ($('body').hasClass('fixed-sidebar')) {
    $('#side-menu').hide();
    setTimeout(function () {
      $('#side-menu').fadeIn(400);
    }, 100);
  } else {
    // Remove all inline style from jquery fadeIn function to reset menu state
    $('#side-menu').removeAttr('style');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~js/app~js/plugins/metisMenu~js/plugins/slimscroll","vendors~js/app~js/plugins/metisMenu","vendors~js/app","js/app~js/plugins/slimscroll","js/app~js/plugins/metisMenu"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzP2M1ZWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNpZGVNZW51IiwibWV0aXNNZW51Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJTbW9vdGhseU1lbnUiLCJiaW5kIiwiaGFzQ2xhc3MiLCJzbGltU2Nyb2xsIiwiaGVpZ2h0IiwicmFpbE9wYWNpdHkiLCJoaWRlIiwic2V0VGltZW91dCIsImZhZGVJbiIsInJlbW92ZUF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQUMsTUFBTSxDQUFDRixDQUFQLEdBQVdFLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkgsQ0FBM0I7O0FBRUFDLG1CQUFPLENBQUMsOERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztDQUVBOztBQUVBQSxtQkFBTyxDQUFDLHVHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUdBQUQsQ0FBUCxDLENBQ0E7OztBQUNBRCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUI7QUFDQSxNQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDekJQLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVEsUUFBVixDQUFtQixZQUFuQjtBQUNILEdBRkQsTUFFTztBQUNIUixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLFdBQVYsQ0FBc0IsWUFBdEI7QUFDSCxHQU55QixDQU8xQjs7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHVixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCVyxTQUFoQixFQUFmLENBUjBCLENBUzFCOztBQUNBWCxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QlksRUFBeEIsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBVUMsS0FBVixFQUFpQjtBQUNqREEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FkLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsV0FBVixDQUFzQixhQUF0QjtBQUNBQyxnQkFBWTtBQUNmLEdBSkQ7QUFLSCxDQWZELEUsQ0FnQkE7O0FBQ0FoQixDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVVyxJQUFWLENBQWUsUUFBZixFQUF5QixZQUFZO0FBQ2pDLE1BQUlYLE1BQU0sQ0FBQ0MsVUFBUCxHQUFxQixHQUF6QixFQUE4QjtBQUMxQlAsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUSxRQUFWLENBQW1CLFlBQW5CO0FBQ0gsR0FGRCxNQUVPO0FBQ0hSLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVMsV0FBVixDQUFzQixZQUF0QjtBQUNIO0FBQ0osQ0FORCxFLENBT0E7O0FBQ0FULENBQUMsQ0FBQ00sTUFBRCxDQUFELENBQVVXLElBQVYsQ0FBZSxNQUFmLEVBQXVCLFlBQVk7QUFDL0IsTUFBSWpCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtCLFFBQVYsQ0FBbUIsZUFBbkIsQ0FBSixFQUF5QztBQUNyQ2xCLEtBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCbUIsVUFBdkIsQ0FBa0M7QUFDOUJDLFlBQU0sRUFBRSxNQURzQjtBQUU5QkMsaUJBQVcsRUFBRTtBQUZpQixLQUFsQztBQUlIO0FBQ0osQ0FQRDs7QUFRQSxTQUFTTCxZQUFULEdBQXdCO0FBQ3BCLE1BQUksQ0FBQ2hCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtCLFFBQVYsQ0FBbUIsYUFBbkIsQ0FBRCxJQUFzQ2xCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtCLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBMUMsRUFBNEU7QUFDeEU7QUFDQWxCLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JzQixJQUFoQixHQUZ3RSxDQUd4RTs7QUFDQUMsY0FBVSxDQUNOLFlBQVk7QUFDUnZCLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J3QixNQUFoQixDQUF1QixHQUF2QjtBQUNILEtBSEssRUFHSCxHQUhHLENBQVY7QUFJSCxHQVJELE1BUU8sSUFBSXhCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtCLFFBQVYsQ0FBbUIsZUFBbkIsQ0FBSixFQUF5QztBQUM1Q2xCLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JzQixJQUFoQjtBQUNBQyxjQUFVLENBQ04sWUFBWTtBQUNSdkIsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQndCLE1BQWhCLENBQXVCLEdBQXZCO0FBQ0gsS0FISyxFQUdILEdBSEcsQ0FBVjtBQUlILEdBTk0sTUFNQTtBQUNIO0FBQ0F4QixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsVUFBaEIsQ0FBMkIsT0FBM0I7QUFDSDtBQUNKLEMiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gbG9hZCBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xuLy92YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy93aW5kb3cuJCA9ICQ7XG4vL3dpbmRvdy5qUXVlcnkgPSAkO1xuLy93aW5kb3cuUG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XG5cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbnJlcXVpcmUoJ3BvcHBlci5qcycpO1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XG4vLyQoJyNleGFtcGxlJykudG9vbHRpcCh7cGxhY2VtZW50OiAndG9wJ30pO1xuXG5yZXF1aXJlKCcuLi9qcy9wbHVnaW5zL3NsaW1zY3JvbGwvanF1ZXJ5LnNsaW1zY3JvbGwnKTtcbnJlcXVpcmUoJy4uL2pzL3BsdWdpbnMvbWV0aXNNZW51L2pxdWVyeS5tZXRpc01lbnUnKTtcbi8vJCgnI3NpZGUtbWVudScpLm1ldGlzTWVudSgpO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vIEFkZCBib2R5LXNtYWxsIGNsYXNzIGlmIHdpbmRvdyBsZXNzIHRoYW4gNzY4cHhcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjkpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LXNtYWxsJylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktc21hbGwnKVxuICAgIH1cbiAgICAvLyBtZXRpc01lbnVcbiAgICB2YXIgc2lkZU1lbnUgPSAkKCcjc2lkZS1tZW51JykubWV0aXNNZW51KCk7XG4gICAgLy8gTWluaW1hbGl6ZSBtZW51XG4gICAgJCgnLm5hdmJhci1taW5pbWFsaXplJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibWluaS1uYXZiYXJcIik7XG4gICAgICAgIFNtb290aGx5TWVudSgpO1xuICAgIH0pO1xufSk7XG4vLyBNaW5pbWFsaXplIG1lbnUgd2hlbiBzY3JlZW4gaXMgbGVzcyB0aGFuIDc2OHB4XG4kKHdpbmRvdykuYmluZChcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoICA8IDc2OSkge1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktc21hbGwnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS1zbWFsbCcpXG4gICAgfVxufSk7XG4vLyBGaXhlZCBTaWRlYmFyXG4kKHdpbmRvdykuYmluZChcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcygnZml4ZWQtc2lkZWJhcicpKSB7XG4gICAgICAgICQoJy5zaWRlYmFyLWNvbGxhcHNlJykuc2xpbVNjcm9sbCh7XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHJhaWxPcGFjaXR5OiAwLjlcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBTbW9vdGhseU1lbnUoKSB7XG4gICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ21pbmktbmF2YmFyJykgfHwgJCgnYm9keScpLmhhc0NsYXNzKCdib2R5LXNtYWxsJykpIHtcbiAgICAgICAgLy8gSGlkZSBtZW51IGluIG9yZGVyIHRvIHNtb290aGx5IHR1cm4gb24gd2hlbiBtYXhpbWl6ZSBtZW51XG4gICAgICAgICQoJyNzaWRlLW1lbnUnKS5oaWRlKCk7XG4gICAgICAgIC8vIEZvciBzbW9vdGhseSB0dXJuIG9uIG1lbnVcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcjc2lkZS1tZW51JykuZmFkZUluKDQwMCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdmaXhlZC1zaWRlYmFyJykpIHtcbiAgICAgICAgJCgnI3NpZGUtbWVudScpLmhpZGUoKTtcbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcjc2lkZS1tZW51JykuZmFkZUluKDQwMCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgaW5saW5lIHN0eWxlIGZyb20ganF1ZXJ5IGZhZGVJbiBmdW5jdGlvbiB0byByZXNldCBtZW51IHN0YXRlXG4gICAgICAgICQoJyNzaWRlLW1lbnUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9