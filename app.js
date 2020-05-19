(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	[ 'js/app' ],
	{
		/***/ /*!*****************************!*\
    !*** ./assets/css/app.scss ***!
    \*****************************/
		/*! no static exports found */
		/***/ './assets/css/app.scss': function(module, exports, __webpack_require__) {
			// extracted by mini-css-extract-plugin
			/***/
		},

		/***/ /*!**************************!*\
    !*** ./assets/js/app.js ***!
    \**************************/
		/*! no exports provided */
		/***/ './assets/js/app.js': function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__);
			/* WEBPACK VAR INJECTION */ (function(global) {
				/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! core-js/modules/es.function.bind */ './node_modules/core-js/modules/es.function.bind.js'
				);
				/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! core-js/modules/web.timers */ './node_modules/core-js/modules/web.timers.js'
				);
				/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../css/app.scss */ './assets/css/app.scss'
				);
				/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
					_css_app_scss__WEBPACK_IMPORTED_MODULE_2__
				);

				// load jquery package from node_modules
				//var $ = require('jquery');
				//window.$ = $;
				//window.jQuery = $;
				//window.Popper = require('popper.js');
				var $ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js');

				global.$ = global.jQuery = $;

				__webpack_require__(/*! popper.js */ './node_modules/popper.js/dist/esm/popper.js');

				__webpack_require__(/*! bootstrap */ './node_modules/bootstrap/dist/js/bootstrap.js');

				//$('#example').tooltip({placement: 'top'});

				__webpack_require__(
					/*! ../js/plugins/slimscroll/jquery.slimscroll */ './assets/js/plugins/slimscroll/jquery.slimscroll.js'
				);

				__webpack_require__(
					/*! ../js/plugins/metisMenu/jquery.metisMenu */ './assets/js/plugins/metisMenu/jquery.metisMenu.js'
				); //$('#side-menu').metisMenu();

				$(document).ready(function() {
					// Add body-small class if window less than 768px
					if (window.innerWidth < 769) {
						$('body').addClass('body-small');
					} else {
						$('body').removeClass('body-small');
					} // metisMenu

					var sideMenu = $('#side-menu').metisMenu(); // Minimalize menu

					$('.navbar-minimalize').on('click', function(event) {
						event.preventDefault();
						$('body').toggleClass('mini-navbar');
						SmoothlyMenu();
					});
				}); // Minimalize menu when screen is less than 768px

				$(window).bind('resize', function() {
					if (window.innerWidth < 769) {
						$('body').addClass('body-small');
					} else {
						$('body').removeClass('body-small');
					}
				}); // Fixed Sidebar

				$(window).bind('load', function() {
					$('.sidebar-collapse').slimScroll({
						height: '100%',
						railOpacity: 0.9
					});
				}); // Sidebar collapse: triggered by Minimalize menu

				function SmoothlyMenu() {
					if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
						// Hide menu in order to smoothly turn on when maximize menu
						$('#side-menu').hide();
						localStorage.removeItem('savedNav'); // For smoothly turn on menu

						setTimeout(function() {
							$('#side-menu').fadeIn(400);
						}, 200);
					} else {
						// Remove all inline style from jquery fadeIn function to reset menu state
						$('#side-menu').removeAttr('style');
						localStorage.setItem('savedNav', 'mini-navbar');
					}
				}
				/* WEBPACK VAR INJECTION */
			}.call(
				this,
				__webpack_require__(
					/*! ./../../node_modules/webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
				)
			));

			/***/
		}
	},
	[
		[
			'./assets/js/app.js',
			'runtime',
			'vendors~js/app~js/plugins/metisMenu~js/plugins/slimscroll',
			'vendors~js/app~js/plugins/metisMenu',
			'vendors~js/app',
			'js/app~js/plugins/slimscroll',
			'js/app~js/plugins/metisMenu'
		]
	]
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaWRlTWVudSIsIm1ldGlzTWVudSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiU21vb3RobHlNZW51IiwiYmluZCIsInNsaW1TY3JvbGwiLCJoZWlnaHQiLCJyYWlsT3BhY2l0eSIsImhhc0NsYXNzIiwiaGlkZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRUaW1lb3V0IiwiZmFkZUluIiwicmVtb3ZlQXR0ciIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQUMsTUFBTSxDQUFDRixDQUFQLEdBQVdFLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkgsQ0FBM0I7O0FBRUFDLG1CQUFPLENBQUMsOERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztDQUVBOztBQUVBQSxtQkFBTyxDQUFDLHVHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUdBQUQsQ0FBUCxDLENBRUE7OztBQUNBRCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUI7QUFDQSxNQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDekJQLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVEsUUFBVixDQUFtQixZQUFuQjtBQUNILEdBRkQsTUFFTztBQUNIUixLQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLFdBQVYsQ0FBc0IsWUFBdEI7QUFDSCxHQU55QixDQU8xQjs7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHVixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCVyxTQUFoQixFQUFmLENBUjBCLENBUzFCOztBQUNBWCxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QlksRUFBeEIsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBVUMsS0FBVixFQUFpQjtBQUNqREEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FkLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsV0FBVixDQUFzQixhQUF0QjtBQUNBQyxnQkFBWTtBQUNmLEdBSkQ7QUFLSCxDQWZELEUsQ0FpQkE7O0FBQ0FoQixDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVVyxJQUFWLENBQWUsUUFBZixFQUF5QixZQUFZO0FBQ2pDLE1BQUlYLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QlAsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUSxRQUFWLENBQW1CLFlBQW5CO0FBQ0gsR0FGRCxNQUVPO0FBQ0hSLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVMsV0FBVixDQUFzQixZQUF0QjtBQUNIO0FBQ0osQ0FORCxFLENBUUE7O0FBQ0FULENBQUMsQ0FBQ00sTUFBRCxDQUFELENBQVVXLElBQVYsQ0FBZSxNQUFmLEVBQXVCLFlBQVk7QUFDL0JqQixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmtCLFVBQXZCLENBQWtDO0FBQzlCQyxVQUFNLEVBQUUsTUFEc0I7QUFFOUJDLGVBQVcsRUFBRTtBQUZpQixHQUFsQztBQUlILENBTEQsRSxDQU9BOztBQUNBLFNBQVNKLFlBQVQsR0FBd0I7QUFDcEIsTUFBSSxDQUFDaEIsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUIsUUFBVixDQUFtQixhQUFuQixDQUFELElBQXNDckIsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUIsUUFBVixDQUFtQixZQUFuQixDQUExQyxFQUE0RTtBQUN4RTtBQUNBckIsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnNCLElBQWhCO0FBQ0FDLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsVUFBeEIsRUFId0UsQ0FJeEU7O0FBQ0FDLGNBQVUsQ0FDTixZQUFZO0FBQ1J6QixPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsTUFBaEIsQ0FBdUIsR0FBdkI7QUFDSCxLQUhLLEVBR0gsR0FIRyxDQUFWO0FBSUgsR0FURCxNQVNPO0FBQ0g7QUFDQTFCLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IyQixVQUFoQixDQUEyQixPQUEzQjtBQUNBSixnQkFBWSxDQUFDSyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLGFBQWpDO0FBQ0g7QUFDSixDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGxvYWQganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcbi8vdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vd2luZG93LiQgPSAkO1xuLy93aW5kb3cualF1ZXJ5ID0gJDtcbi8vd2luZG93LlBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5yZXF1aXJlKCdwb3BwZXIuanMnKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xuLy8kKCcjZXhhbXBsZScpLnRvb2x0aXAoe3BsYWNlbWVudDogJ3RvcCd9KTtcblxucmVxdWlyZSgnLi4vanMvcGx1Z2lucy9zbGltc2Nyb2xsL2pxdWVyeS5zbGltc2Nyb2xsJyk7XG5yZXF1aXJlKCcuLi9qcy9wbHVnaW5zL21ldGlzTWVudS9qcXVlcnkubWV0aXNNZW51Jyk7XG5cbi8vJCgnI3NpZGUtbWVudScpLm1ldGlzTWVudSgpO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vIEFkZCBib2R5LXNtYWxsIGNsYXNzIGlmIHdpbmRvdyBsZXNzIHRoYW4gNzY4cHhcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjkpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LXNtYWxsJylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktc21hbGwnKVxuICAgIH1cbiAgICAvLyBtZXRpc01lbnVcbiAgICB2YXIgc2lkZU1lbnUgPSAkKCcjc2lkZS1tZW51JykubWV0aXNNZW51KCk7XG4gICAgLy8gTWluaW1hbGl6ZSBtZW51XG4gICAgJCgnLm5hdmJhci1taW5pbWFsaXplJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibWluaS1uYXZiYXJcIik7XG4gICAgICAgIFNtb290aGx5TWVudSgpO1xuICAgIH0pO1xufSk7XG5cbi8vIE1pbmltYWxpemUgbWVudSB3aGVuIHNjcmVlbiBpcyBsZXNzIHRoYW4gNzY4cHhcbiQod2luZG93KS5iaW5kKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjkpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LXNtYWxsJylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktc21hbGwnKVxuICAgIH1cbn0pO1xuXG4vLyBGaXhlZCBTaWRlYmFyXG4kKHdpbmRvdykuYmluZChcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoJy5zaWRlYmFyLWNvbGxhcHNlJykuc2xpbVNjcm9sbCh7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICByYWlsT3BhY2l0eTogMC45XG4gICAgfSk7XG59KTtcblxuLy8gU2lkZWJhciBjb2xsYXBzZTogdHJpZ2dlcmVkIGJ5IE1pbmltYWxpemUgbWVudVxuZnVuY3Rpb24gU21vb3RobHlNZW51KCkge1xuICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdtaW5pLW5hdmJhcicpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcygnYm9keS1zbWFsbCcpKSB7XG4gICAgICAgIC8vIEhpZGUgbWVudSBpbiBvcmRlciB0byBzbW9vdGhseSB0dXJuIG9uIHdoZW4gbWF4aW1pemUgbWVudVxuICAgICAgICAkKCcjc2lkZS1tZW51JykuaGlkZSgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2F2ZWROYXYnKTtcbiAgICAgICAgLy8gRm9yIHNtb290aGx5IHR1cm4gb24gbWVudVxuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJyNzaWRlLW1lbnUnKS5mYWRlSW4oNDAwKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBpbmxpbmUgc3R5bGUgZnJvbSBqcXVlcnkgZmFkZUluIGZ1bmN0aW9uIHRvIHJlc2V0IG1lbnUgc3RhdGVcbiAgICAgICAgJCgnI3NpZGUtbWVudScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZE5hdicsICdtaW5pLW5hdmJhcicpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
