(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accident-avk-accident-avk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accident-avk/accident-avk.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accident-avk/accident-avk.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mes accidents aux AVK\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <ion-card class=\"welcome-card myCard\" style=\"margin: -1px !important;padding: 0;background-color: whitesmoke;\"  >\n    <ion-card-header style=\"background-color: #FF6347;border-bottom-left-radius: 30%;\">\n    <div style=\"text-align: center;color: white;\">\n      <span>Mes accidents aux AVK</span> \n    </div>\n    \n  </ion-card-header>\n   <ion-card-content style=\"padding: 0px !important;\">\n\n  \n  <div style=\"text-align: center;\">\n    <ion-card  class=\"welcome-card myCard\" *ngFor=\"let i of listeAccident\" >\n      <img style=\"height: 20rem !important;\" src=\"/assets/accident/{{i}}.jpeg\"  alt=\"\"/>\n     \n    </ion-card>\n  </div>\n</ion-card-content>\n</ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/accident-avk/accident-avk-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/accident-avk/accident-avk-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AccidentAvkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentAvkPageRoutingModule", function() { return AccidentAvkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accident_avk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accident-avk.page */ "./src/app/accident-avk/accident-avk.page.ts");




var routes = [
    {
        path: '',
        component: _accident_avk_page__WEBPACK_IMPORTED_MODULE_3__["AccidentAvkPage"]
    }
];
var AccidentAvkPageRoutingModule = /** @class */ (function () {
    function AccidentAvkPageRoutingModule() {
    }
    AccidentAvkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AccidentAvkPageRoutingModule);
    return AccidentAvkPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/accident-avk/accident-avk.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/accident-avk/accident-avk.module.ts ***!
  \*****************************************************/
/*! exports provided: AccidentAvkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentAvkPageModule", function() { return AccidentAvkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accident_avk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accident-avk-routing.module */ "./src/app/accident-avk/accident-avk-routing.module.ts");
/* harmony import */ var _accident_avk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accident-avk.page */ "./src/app/accident-avk/accident-avk.page.ts");







var AccidentAvkPageModule = /** @class */ (function () {
    function AccidentAvkPageModule() {
    }
    AccidentAvkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _accident_avk_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccidentAvkPageRoutingModule"]
            ],
            declarations: [_accident_avk_page__WEBPACK_IMPORTED_MODULE_6__["AccidentAvkPage"]]
        })
    ], AccidentAvkPageModule);
    return AccidentAvkPageModule;
}());



/***/ }),

/***/ "./src/app/accident-avk/accident-avk.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/accident-avk/accident-avk.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBar.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjaWRlbnQtYXZrL0M6XFxwcm9qZXRJb25pY1xcaV9jb2V1ci9zcmNcXGFwcFxcYWNjaWRlbnQtYXZrXFxhY2NpZGVudC1hdmsucGFnZS5zY3NzIiwic3JjL2FwcC9hY2NpZGVudC1hdmsvYWNjaWRlbnQtYXZrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUVFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZFO0VBQ0UsV0FBQTtFQUdGLGdCQUFBO0VBQ0EscUhBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FjY2lkZW50LWF2ay9hY2NpZGVudC1hdmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5teUNhcmQge1xyXG4gICAgLy9tYXgtaGVpZ2h0OjMyJSAhaW1wb3J0YW50IDtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OjZweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOjVweCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAucm93SG9tZXtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy90b3BCYXIuSlBHXCIpIDtcclxuICAgIC0tY29sb3IgOiB3aGl0ZSA7XHJcbiAgICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgIC8vIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgLy9wYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubXlDYXJkIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDZweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucm93SG9tZSB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3RvcEJhci5KUEdcIikgO1xuICAtLWNvbG9yOiB3aGl0ZSA7XG4gIC0tYm94LXNoYWRvdzowICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/accident-avk/accident-avk.page.ts":
/*!***************************************************!*\
  !*** ./src/app/accident-avk/accident-avk.page.ts ***!
  \***************************************************/
/*! exports provided: AccidentAvkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentAvkPage", function() { return AccidentAvkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccidentAvkPage = /** @class */ (function () {
    function AccidentAvkPage() {
        this.listeAccident = [
            "accident1",
            "accident2",
            "accident3",
            "accident4",
        ];
    }
    AccidentAvkPage.prototype.ngOnInit = function () {
    };
    AccidentAvkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accident-avk',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accident-avk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accident-avk/accident-avk.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accident-avk.page.scss */ "./src/app/accident-avk/accident-avk.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccidentAvkPage);
    return AccidentAvkPage;
}());



/***/ })

}]);
//# sourceMappingURL=accident-avk-accident-avk-module.js.map