(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _diy_diy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diy/diy.component */ "./src/app/diy/diy.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"],
    },
    {
        path: 'diy',
        component: _diy_diy_component__WEBPACK_IMPORTED_MODULE_3__["DiyComponent"],
    },
    {
        path: 'guide',
        component: _guide_guide_component__WEBPACK_IMPORTED_MODULE_4__["GuideComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header-bar\"></div>\n<div class=\"container-fluid px-lg-5\">\n  <nav class=\"navbar navbar-expand-lg justify-content-between navbar-light mx-lg-5\">\n    <a class=\"\" href=\"#\">\n      <img src=\"assets/bsh.jpg\" class=\"logo\" />\n    </a>\n    <div class=\"navbar-collapse flex-basis-0 flex-grow-0\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav flex-row ms-auto mb-2 mb-lg-0\">\n        <li class=\"nav-item me-4 me-lg-3 dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"lang\" role=\"button\" data-bs-toggle=\"dropdown\"\n            aria-expanded=\"false\">\n            Language Selection\n          </a>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"lang\">\n            <li><a class=\"dropdown-item\" href=\"#\">Hindi</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">English</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Tamil</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Telugu</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Bengali</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Kannada</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Gujarati</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Punjabi</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Marathi</a></li>\n          </ul>\n        </li>\n        <!-- <li class=\"nav-item me-3\">\n          <a class=\"nav-link text-black d-flex align-items-center cursor-pointer\" aria-current=\"page\"\n            routerLink=\"contact\">\n            <i class=\"bi-chat-left me-2\"></i>\n            <p class=\"mb-0 d-none d-lg-block\">Contact us</p>\n          </a>\n        </li> -->\n        <li class=\"nav-item me-3\">\n          <a class=\"nav-link text-black d-flex align-items-center cursor-pointer\">\n            <i class=\"bi-search me-2\"></i>\n            <p class=\"mb-0 d-none d-lg-block\">Search</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-black d-flex align-items-center cursor-pointer\" (click)=\"openMenu()\">\n            <a class=\"M-Main-Navigation__toggle__icon me-2\"\n              [ngClass]=\"{ 'M-Main-Navigation__toggle--active': isMenuOpen}\">\n              <span class=\"M-Main-Navigation__toggle__bar\"></span>\n              <span class=\"M-Main-Navigation__toggle__bar\"></span>\n              <span class=\"M-Main-Navigation__toggle__bar\"></span>\n              <span class=\"M-Main-Navigation__toggle__bar\"></span>\n            </a>\n            <p class=\"mb-0 d-none d-lg-block\">Menu</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"px-lg-5 d-flex align-items-center mt-2\">\n    <nav style=\"--bs-breadcrumb-divider: '>';\" aria-label=\"breadcrumb\" *ngIf=\"router.url !== '/'\">\n      <ol class=\"breadcrumb text-12\">\n        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">\n          <span *ngIf=\"router.url === '/contact'\">Customer Care</span>\n          <span *ngIf=\"router.url === '/diy'\">DIY</span>\n          <span *ngIf=\"router.url === '/guide'\">Guide</span>\n        </li>\n      </ol>\n    </nav>\n    <p class=\"fw-bold ms-auto\">Bosch in India</p>\n  </div>\n</div>\n<nav class=\"M-Main-Navigation__flyoutWrapper is-visible\" [ngClass]=\"{'is-visible': isMenuOpen}\"\n  aria-label=\"Main Navigation\" aria-hidden=\"false\" aria-expanded=\"true\">\n  <div class=\"container-fluid\">\n    <ul\n      class=\"M-Main-Navigation__items M-Main-Navigation__items--first M-Main-Navigation__items--expanded px-5 mx-5 mt-5\"\n      role=\"menubar\">\n      <li class=\"M-Main-Navigation__item M-Main-Navigation__item--first\" role=\"none\">\n        <a class=\"M-Main-Navigation__link M-Main-Navigation__linkToSecond\" routerLink=\"diy\" aria-haspopup=\"true\"\n          role=\"menuitem\" (click)=\"isMenuOpen = false\">\n          <h4 class=\"M-Main-Navigation__linkText cursor-pointer mb-5\">DIY</h4>\n        </a>\n      </li>\n      <li class=\"M-Main-Navigation__item M-Main-Navigation__item--first\" role=\"none\">\n        <a class=\"M-Main-Navigation__link M-Main-Navigation__linkToSecond\" routerLink=\"guide\" aria-haspopup=\"true\"\n          role=\"menuitem\" (click)=\"isMenuOpen = false\">\n          <h4 class=\"M-Main-Navigation__linkText cursor-pointer mb-5\">Guide</h4>\n        </a>\n      </li>\n      <li class=\"M-Main-Navigation__item M-Main-Navigation__item--first\" role=\"none\">\n        <a class=\"M-Main-Navigation__link M-Main-Navigation__linkToSecond\" routerLink=\"contact\" aria-haspopup=\"true\" role=\"menuitem\"\n          (click)=\"isMenuOpen = false\">\n          <h4 class=\"M-Main-Navigation__linkText cursor-pointer\">Customer Care</h4>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bar {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  content: \"\";\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  background-image: url('header.svg');\n  z-index: 1000; }\n\n.navbar {\n  z-index: 2; }\n\n.logo {\n  width: 194px;\n  height: 96px;\n  margin-left: -18px; }\n\n.M-Main-Navigation__toggle__icon {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  margin: 3px; }\n\n.M-Main-Navigation__toggle__bar {\n  background: #000;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  display: block;\n  width: 18px;\n  height: 1px;\n  transition: all cubic-bezier(0.38, 0.04, 0.35, 0.96) 250ms; }\n\n.M-Main-Navigation__toggle__bar:nth-child(1) {\n  top: 1.5px; }\n\n.M-Main-Navigation__toggle__bar:nth-child(2),\n.M-Main-Navigation__toggle__bar:nth-child(3) {\n  top: 7.5px; }\n\n.M-Main-Navigation__toggle__bar:nth-child(4) {\n  top: 13.5px; }\n\nhtml:not(.is-touch) .M-Main-Navigation__toggle:hover .M-Main-Navigation__toggle__bar {\n  background: #007bc0; }\n\n.M-Main-Navigation__toggle--active .M-Main-Navigation__toggle__bar:nth-child(1) {\n  transform: scaleX(0) translateY(6px);\n  opacity: 0; }\n\n.M-Main-Navigation__toggle--active .M-Main-Navigation__toggle__bar:nth-child(2) {\n  transform: rotate(45deg) scaleX(1.2); }\n\n.M-Main-Navigation__toggle--active .M-Main-Navigation__toggle__bar:nth-child(3) {\n  transform: rotate(-45deg) scaleX(1.2); }\n\n.M-Main-Navigation__toggle--active .M-Main-Navigation__toggle__bar:nth-child(4) {\n  transform: scaleX(0) translateY(-6px);\n  opacity: 0; }\n\n.M-Main-Navigation__flyoutWrapper {\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: none;\n  z-index: 6;\n  top: 90px;\n  left: 0;\n  overflow: hidden;\n  transform: translateY(-100%);\n  transition: transform 250ms;\n  height: 0px; }\n\n.M-Main-Navigation__flyoutWrapper ul {\n    height: 0px; }\n\n.M-Main-Navigation__flyoutWrapper.is-visible {\n  transform: translateY(0);\n  box-shadow: 0 -16px 0 #fff, 0 0 16px rgba(0, 0, 0, 0.25);\n  height: 260px; }\n\n.M-Main-Navigation__flyoutWrapper.is-visible ul {\n    height: 260px; }\n\n.M-Main-Navigation__flyoutWrapper .container-fluid {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  padding-right: 0; }\n\n.M-Main-Navigation__flyoutWrapper .M-LanguageSelector {\n  margin: 25px 0 60px; }\n\n.M-Main-Navigation__item {\n  list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGJzaC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxZQUFXO0VBQ1gsWUFBVztFQUNYLFlBQVc7RUFDWCw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBQ3RCLG1DQUFrQztFQUNsQyxvQ0FBNkM7RUFDN0MsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFVBQVM7RUFDVCxlQUFjO0VBQ2QsWUFBVztFQUNYLFlBQVc7RUFDWCwyREFBMEQsRUFDN0Q7O0FBRUQ7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7O0VBRUksV0FBVSxFQUNiOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBRUkscUNBQW9DO0VBQ3BDLFdBQVUsRUFDYjs7QUFFRDtFQUVJLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUVJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUVJLHNDQUFxQztFQUNyQyxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxRQUFPO0VBQ1AsaUJBQWdCO0VBRWhCLDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFFM0IsWUFBVyxFQUtkOztBQWxCRDtJQWdCUSxZQUFXLEVBQ2Q7O0FBR0w7RUFFSSx5QkFBd0I7RUFDeEIseURBQXdEO0VBQ3hELGNBQWEsRUFLaEI7O0FBVEQ7SUFPUSxjQUFhLEVBQ2hCOztBQUdMO0VBR0ksY0FBYTtFQUdiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9oZWFkZXIuc3ZnXCIpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxOTRweDtcclxuICAgIGhlaWdodDogOTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxufVxyXG5cclxuLk0tTWFpbi1OYXZpZ2F0aW9uX190b2dnbGVfX2ljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuLk0tTWFpbi1OYXZpZ2F0aW9uX190b2dnbGVfX2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMC4zOCwgMC4wNCwgMC4zNSwgMC45NikgMjUwbXM7XHJcbn1cclxuXHJcbi5NLU1haW4tTmF2aWdhdGlvbl9fdG9nZ2xlX19iYXI6bnRoLWNoaWxkKDEpIHtcclxuICAgIHRvcDogMS41cHg7XHJcbn1cclxuXHJcbi5NLU1haW4tTmF2aWdhdGlvbl9fdG9nZ2xlX19iYXI6bnRoLWNoaWxkKDIpLFxyXG4uTS1NYWluLU5hdmlnYXRpb25fX3RvZ2dsZV9fYmFyOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0b3A6IDcuNXB4O1xyXG59XHJcblxyXG4uTS1NYWluLU5hdmlnYXRpb25fX3RvZ2dsZV9fYmFyOm50aC1jaGlsZCg0KSB7XHJcbiAgICB0b3A6IDEzLjVweDtcclxufVxyXG5cclxuaHRtbDpub3QoLmlzLXRvdWNoKSAuTS1NYWluLU5hdmlnYXRpb25fX3RvZ2dsZTpob3ZlciAuTS1NYWluLU5hdmlnYXRpb25fX3RvZ2dsZV9fYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiYzA7XHJcbn1cclxuXHJcbi5NLU1haW4tTmF2aWdhdGlvbl9fdG9nZ2xlLS1hY3RpdmUgLk0tTWFpbi1OYXZpZ2F0aW9uX190b2dnbGVfX2JhcjpudGgtY2hpbGQoMSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKSB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKSB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uTS1NYWluLU5hdmlnYXRpb25fX3RvZ2dsZS0tYWN0aXZlIC5NLU1haW4tTmF2aWdhdGlvbl9fdG9nZ2xlX19iYXI6bnRoLWNoaWxkKDIpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlWCgxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlWCgxLjIpO1xyXG59XHJcblxyXG4uTS1NYWluLU5hdmlnYXRpb25fX3RvZ2dsZS0tYWN0aXZlIC5NLU1haW4tTmF2aWdhdGlvbl9fdG9nZ2xlX19iYXI6bnRoLWNoaWxkKDMpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZVgoMS4yKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGVYKDEuMik7XHJcbn1cclxuXHJcbi5NLU1haW4tTmF2aWdhdGlvbl9fdG9nZ2xlLS1hY3RpdmUgLk0tTWFpbi1OYXZpZ2F0aW9uX190b2dnbGVfX2JhcjpudGgtY2hpbGQoNCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKSB0cmFuc2xhdGVZKC02cHgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCkgdHJhbnNsYXRlWSgtNnB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5NLU1haW4tTmF2aWdhdGlvbl9fZmx5b3V0V3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgei1pbmRleDogNjtcclxuICAgIHRvcDogOTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcywgLXdlYmtpdC10cmFuc2Zvcm0gMjUwbXM7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5NLU1haW4tTmF2aWdhdGlvbl9fZmx5b3V0V3JhcHBlci5pcy12aXNpYmxlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMTZweCAwICNmZmYsIDAgMCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uTS1NYWluLU5hdmlnYXRpb25fX2ZseW91dFdyYXBwZXIgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uTS1NYWluLU5hdmlnYXRpb25fX2ZseW91dFdyYXBwZXIgLk0tTGFuZ3VhZ2VTZWxlY3RvciB7XHJcbiAgICBtYXJnaW46IDI1cHggMCA2MHB4O1xyXG59XHJcblxyXG4uTS1NYWluLU5hdmlnYXRpb25fX2l0ZW0ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'bsh';
        this.isMenuOpen = false;
    }
    AppComponent.prototype.openMenu = function () {
        this.isMenuOpen = !this.isMenuOpen;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _diy_diy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diy/diy.component */ "./src/app/diy/diy.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                _diy_diy_component__WEBPACK_IMPORTED_MODULE_5__["DiyComponent"],
                _guide_guide_component__WEBPACK_IMPORTED_MODULE_6__["GuideComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 pt-2 px-lg-5 mx-lg-5 px-sm-2\">\n  <p>\n    How can we help you?\n  </p>\n  <h1 style=\"font-size: 64px;\" class=\"fw-bolder\">\n    Contact us\n  </h1>\n</div>\n<div class=\"mt-5 pt-4\">\n  <ul class=\"nav nav-tabs justify-content-center\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#\">E-mail</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Phone</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Chat</a>\n    </li>\n  </ul>\n\n  <div class=\"text-center px-2\">\n    <h1 style=\"font-size: 48px;\" class=\"fw-bolder mt-5\">\n      Send an e-mail! \n    </h1>\n    <p class=\"fs-5 mt-4 mx-auto px-5 w-50\"> Send us your message by filling out the form below. One of our advisors will be happy to get in touch with you. </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs {\n  border-bottom: 1px solid #e0e2e5;\n  height: 52px; }\n  .nav-tabs .nav-item {\n    position: relative;\n    margin: 0 16px; }\n  .nav-tabs .nav-link {\n    color: black;\n    border: none;\n    padding: 0.5rem; }\n  .nav-tabs .nav-link:hover {\n      color: #00629a; }\n  .nav-tabs .nav-link.active {\n      color: #007bc0; }\n  .nav-tabs .nav-link.active:after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        height: 2px;\n        width: 100%;\n        background-color: #007bc0;\n        transition: opacity cubic-bezier(0.38, 0.04, 0.35, 0.96) 250ms;\n        transform-origin: 0 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9GOlxcYnNoL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQWdDO0VBQ2hDLGFBQVksRUFpQ2Y7RUFuQ0Q7SUFLUSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNqQjtFQVBMO0lBVVEsYUFBWTtJQUNaLGFBQVk7SUFDWixnQkFBZSxFQXNCbEI7RUFsQ0w7TUFlWSxlQUFjLEVBQ2pCO0VBaEJUO01BbUJZLGVBQWMsRUFjakI7RUFqQ1Q7UUFzQmdCLFlBQVc7UUFDWCxtQkFBa0I7UUFDbEIsVUFBUztRQUNULFFBQU87UUFDUCxZQUFXO1FBQ1gsWUFBVztRQUNYLDBCQUF5QjtRQUN6QiwrREFBOEQ7UUFFOUQseUJBQXdCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi10YWJzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMmU1O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG5cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwNjI5YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDdiYzA7XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYzA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGN1YmljLWJlemllcigwLjM4LCAwLjA0LCAwLjM1LCAwLjk2KSAyNTBtcztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/diy/diy.component.html":
/*!****************************************!*\
  !*** ./src/app/diy/diy.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-5 mx-lg-5\">\n  <h3 class=\"mt-3 fw-bold\">Do It Yourself</h3>\n  <div class=\"text-center px-2 mt-2\">\n   <img src=\"assets/diy.png\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/diy/diy.component.scss":
/*!****************************************!*\
  !*** ./src/app/diy/diy.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpeS9kaXkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/diy/diy.component.ts":
/*!**************************************!*\
  !*** ./src/app/diy/diy.component.ts ***!
  \**************************************/
/*! exports provided: DiyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiyComponent", function() { return DiyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiyComponent = /** @class */ (function () {
    function DiyComponent() {
    }
    DiyComponent.prototype.ngOnInit = function () {
    };
    DiyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diy',
            template: __webpack_require__(/*! ./diy.component.html */ "./src/app/diy/diy.component.html"),
            styles: [__webpack_require__(/*! ./diy.component.scss */ "./src/app/diy/diy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DiyComponent);
    return DiyComponent;
}());



/***/ }),

/***/ "./src/app/guide/guide.component.html":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg bg-manual position-relative\">\n  <div class=\"text-center layout position-relative px-2\">\n  </div>\n  <div class=\"ps-5 ms-5 mt-5 text-right position-absolute manual-text\">\n    <h1 style=\"font-size: 48px;\" class=\"fw-bolder pt-5 ps-4 manual-font text-white\">\n      Models\n    </h1>\n    <h1 style=\"font-size: 48px;\" class=\"fw-bolder pt-5 manual-font text-white\">\n      User Manual\n    </h1>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/guide/guide.component.scss":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-manual {\n  background-image: url('manual.jpg');\n  background-size: contain; }\n\n.layout {\n  display: block;\n  position: absolute;\n  transform: skewX(-20deg);\n  transform-origin: 0 0;\n  width: 474px;\n  left: 112px;\n  top: 49px;\n  z-index: 3;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.5;\n  background: #811d77 !important;\n  height: 302px; }\n\n.manual-font {\n  font-family: \"Zen Antique\", serif;\n  text-decoration: underline; }\n\n.manual-text {\n  top: 0;\n  z-index: 5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpZGUvRjpcXGJzaC9zcmNcXGFwcFxcZ3VpZGVcXGd1aWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQWdEO0VBQ2hELHlCQUF3QixFQUMzQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osWUFBVztFQUNYLFVBQVM7RUFDVCxXQUFVO0VBQ1YsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZO0VBQ1osK0JBQThCO0VBQzlCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksT0FBTTtFQUNOLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLW1hbnVhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbWFudWFsLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmxheW91dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHdpZHRoOiA0NzRweDtcclxuICAgIGxlZnQ6IDExMnB4O1xyXG4gICAgdG9wOiA0OXB4O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODExZDc3ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMnB4O1xyXG59XHJcblxyXG4ubWFudWFsLWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiWmVuIEFudGlxdWVcIiwgc2VyaWY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm1hbnVhbC10ZXh0IHtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/guide/guide.component.ts":
/*!******************************************!*\
  !*** ./src/app/guide/guide.component.ts ***!
  \******************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guide',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/guide/guide.component.html"),
            styles: [__webpack_require__(/*! ./guide.component.scss */ "./src/app/guide/guide.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"text-center px-2\">\n   <img src=\"assets/fridge.png\"/>\n  </div>\n</div>\n<div class=\"d-flex justify-content-end\">\n  <img src=\"assets/bosch-logo.svg\" class=\"b-logo me-5\"/>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".b-logo {\n  height: 96px;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcYnNoL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\bsh\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map