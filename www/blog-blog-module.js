(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"writer == 2\"></ion-back-button>\n\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Blog \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background: #F0F8FF;\">\n  <div class=\"mycontainer\" style=\"margin-bottom: 5rem;\">\n  <div *ngFor=\"let c of chatMessage\">\n    <div *ngIf=\"c.type == 'q'\" class=\"patient\">\n    <ion-label>\n      {{c.message}}\n    </ion-label>\n    <p style=\"font-size: 13px;\n    float: right;\n    color: grey;\n    margin: 0 !important;padding-top: 1rem;\">\n      {{displayDate(c.date)}}\n    </p>\n  </div>\n  \n  <div *ngIf=\"c.type == 'r'\" class=\"medecin\">\n    <ion-label>\n      {{c.message}}\n    </ion-label>\n    <p style=\"font-size: 13px;\n    float: right;\n    color: grey;\n    margin: 0 !important;padding-top: 1rem;\">\n      {{displayDate(c.date)}}\n    </p>\n  </div>\n\n  </div>\n   \n\n  </div>\n  <div style=\"bottom: 0;position: fixed;background: white;width: 100%;margin: 0;padding: 0;box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\">\n    <div class=\"col-12 row\">\n        <div class=\"col-10\" *ngIf=\"writer == 3\">\n          <ion-textarea  rows=\"2\" cols=\"20\" placeholder=\"Votre question ...\"  [(ngModel)]=\"question\" [ngModelOptions]=\"{standalone: true}\" autosize></ion-textarea>\n\n        </div>\n        <div class=\"col-2\" *ngIf=\"writer == 3\">\n          <ion-icon *ngIf=\"question\"  name=\"send\" (click)=\"sendQuestion();\"  style=\"font-size: 4rem;\"></ion-icon>       \n        </div>\n        \n        <div class=\"col-10\" *ngIf=\"writer == 2\">\n          <ion-textarea  rows=\"2\" cols=\"20\" [(ngModel)]=\"response\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Votre reponse ...\" autosize></ion-textarea>\n\n        </div>\n        <div class=\"col-2\" *ngIf=\"writer == 2\">\n          <ion-icon  name=\"send\" *ngIf=\"response\" (click)=\"sendResponse();\" style=\"font-size: 4rem;\"></ion-icon>       \n        </div>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageRoutingModule", function() { return BlogPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.page */ "./src/app/blog/blog.page.ts");




var routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_3__["BlogPage"]
    }
];
var BlogPageRoutingModule = /** @class */ (function () {
    function BlogPageRoutingModule() {
    }
    BlogPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BlogPageRoutingModule);
    return BlogPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.page */ "./src/app/blog/blog.page.ts");







var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageRoutingModule"]
            ],
            declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
        })
    ], BlogPageModule);
    return BlogPageModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.page.scss":
/*!*************************************!*\
  !*** ./src/app/blog/blog.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBar.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.nous {\n  font-family: Fontil Sans, monospace;\n  text-align: left;\n  width: 50%;\n  float: left;\n  /*margin-top: 6rem;*/\n  background-color: whitesmoke;\n  border-bottom-left-radius: 10px;\n}\n\n.nous1 {\n  font-family: Fontil Sans, monospace;\n  text-align: left;\n  width: 90%;\n  float: left;\n  /*margin-top: 6rem;*/\n  background-color: whitesmoke;\n  border-bottom-left-radius: 10px;\n}\n\n.nous1 textarea {\n  height: 100px !important;\n}\n\n.client {\n  text-align: left;\n  width: 50%;\n  float: right;\n  background-color: #90EE90;\n  color: black;\n  border-bottom-right-radius: 10px;\n  /* margin-top: 3rem;*/\n}\n\n.mycontainer {\n  font-family: Fontil Sans, monospace;\n  text-align: left;\n  width: 100%;\n  float: left;\n  /*margin-top: 6rem;*/\n  background: #F0F8FF;\n  border-bottom-left-radius: 10px;\n  padding: 5px;\n  /* box-shadow: 0 1px 15px 0 rgba(123, 123, 123, 0.05); */\n  /* margin: 5px; */\n  min-height: 100%;\n}\n\n.patient {\n  font-family: Fontil Sans, monospace;\n  text-align: left;\n  float: left;\n  /*margin-top: 6rem;*/\n  background: #F5F5DC;\n  border-radius: 1rem;\n  padding: 5px;\n  box-shadow: 2 2px 16px 1 rgba(123, 123, 123, 0.05);\n  width: 90%;\n  margin-top: 0.5rem;\n}\n\n.medecin {\n  font-family: Fontil Sans, monospace;\n  text-align: left;\n  float: right;\n  /*margin-top: 6rem;*/\n  background: #FFA07A;\n  border-radius: 1rem;\n  padding: 5px;\n  box-shadow: 2 2px 16px 1 rgba(123, 123, 123, 0.05);\n  width: 90%;\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxccHJvamV0SW9uaWNcXGlfY29ldXIvc3JjXFxhcHBcXGJsb2dcXGJsb2cucGFnZS5zY3NzIiwic3JjL2FwcC9ibG9nL2Jsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBRUUsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDRSwrR0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURERTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSUo7O0FERkU7RUFDRSxXQUFBO0VBR0YsZ0JBQUE7RUFDQSxxSEFBQTtBQ0dGOztBRERFO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNDLCtCQUFBO0FDSUw7O0FERkU7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0MsK0JBQUE7QUNLTDs7QURIRTtFQUNFLHdCQUFBO0FDTUo7O0FESkU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFFRCxxQkFBQTtBQ01IOztBREpBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNDLFdBQUE7RUFDRCxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsbUNBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUNFLG1DQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5teUNhcmQge1xyXG4gICAgLy9tYXgtaGVpZ2h0OjMyJSAhaW1wb3J0YW50IDtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OjZweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOjVweCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAucm93SG9tZXtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy90b3BCYXIuSlBHXCIpIDtcclxuICAgIC0tY29sb3IgOiB3aGl0ZSA7XHJcbiAgICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgIC8vIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgLy9wYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgLm5vdXN7XHJcbiAgICBmb250LWZhbWlseTogRm9udGlsIFNhbnMsIG1vbm9zcGFjZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKm1hcmdpbi10b3A6IDZyZW07Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLm5vdXMxe1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRpbCBTYW5zLCBtb25vc3BhY2U7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyptYXJnaW4tdG9wOiA2cmVtOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5ub3VzMSB0ZXh0YXJlYXtcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNsaWVudHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwRUU5MDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgLyogbWFyZ2luLXRvcDogM3JlbTsqL1xyXG59XHJcbi5teWNvbnRhaW5lcntcclxuICBmb250LWZhbWlseTogRm9udGlsIFNhbnMsIG1vbm9zcGFjZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICB3aWR0aDogMTAwJTsgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLyptYXJnaW4tdG9wOiA2cmVtOyovXHJcbiAgYmFja2dyb3VuZDogI0YwRjhGRjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAvKiBib3gtc2hhZG93OiAwIDFweCAxNXB4IDAgcmdiYSgxMjMsIDEyMywgMTIzLCAwLjA1KTsgKi9cclxuICAvKiBtYXJnaW46IDVweDsgKi9cclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wYXRpZW50e1xyXG4gIGZvbnQtZmFtaWx5OiBGb250aWwgU2FucywgbW9ub3NwYWNlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyptYXJnaW4tdG9wOiA2cmVtOyovXHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNURDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDIgMnB4IDE2cHggMSByZ2JhKDEyMywgMTIzLCAxMjMsIDAuMDUpO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG4ubWVkZWNpbntcclxuICBmb250LWZhbWlseTogRm9udGlsIFNhbnMsIG1vbm9zcGFjZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvKm1hcmdpbi10b3A6IDZyZW07Ki9cclxuICAgIGJhY2tncm91bmQ6I0ZGQTA3QTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAyIDJweCAxNnB4IDEgcmdiYSgxMjMsIDEyMywgMTIzLCAwLjA1KTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubXlDYXJkIHtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDZweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucm93SG9tZSB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3RvcEJhci5KUEdcIikgO1xuICAtLWNvbG9yOiB3aGl0ZSA7XG4gIC0tYm94LXNoYWRvdzowICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubm91cyB7XG4gIGZvbnQtZmFtaWx5OiBGb250aWwgU2FucywgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgLyptYXJnaW4tdG9wOiA2cmVtOyovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5ub3VzMSB7XG4gIGZvbnQtZmFtaWx5OiBGb250aWwgU2FucywgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICBmbG9hdDogbGVmdDtcbiAgLyptYXJnaW4tdG9wOiA2cmVtOyovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5ub3VzMSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmNsaWVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwRUU5MDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLyogbWFyZ2luLXRvcDogM3JlbTsqL1xufVxuXG4ubXljb250YWluZXIge1xuICBmb250LWZhbWlseTogRm9udGlsIFNhbnMsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICAvKm1hcmdpbi10b3A6IDZyZW07Ki9cbiAgYmFja2dyb3VuZDogI0YwRjhGRjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICAvKiBib3gtc2hhZG93OiAwIDFweCAxNXB4IDAgcmdiYSgxMjMsIDEyMywgMTIzLCAwLjA1KTsgKi9cbiAgLyogbWFyZ2luOiA1cHg7ICovXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXRpZW50IHtcbiAgZm9udC1mYW1pbHk6IEZvbnRpbCBTYW5zLCBtb25vc3BhY2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICAvKm1hcmdpbi10b3A6IDZyZW07Ki9cbiAgYmFja2dyb3VuZDogI0Y1RjVEQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiAyIDJweCAxNnB4IDEgcmdiYSgxMjMsIDEyMywgMTIzLCAwLjA1KTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ubWVkZWNpbiB7XG4gIGZvbnQtZmFtaWx5OiBGb250aWwgU2FucywgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qbWFyZ2luLXRvcDogNnJlbTsqL1xuICBiYWNrZ3JvdW5kOiAjRkZBMDdBO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDIgMnB4IDE2cHggMSByZ2JhKDEyMywgMTIzLCAxMjMsIDAuMDUpO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/blog/blog.page.ts":
/*!***********************************!*\
  !*** ./src/app/blog/blog.page.ts ***!
  \***********************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");



var BlogPage = /** @class */ (function () {
    function BlogPage(_icoeurService) {
        this._icoeurService = _icoeurService;
        this.writer = 0;
        this.chatMessage = [];
    }
    BlogPage.prototype.sendQuestion = function () {
        var _this = this;
        this._icoeurService.createBlog({ patient: JSON.parse(localStorage.getItem('currentUser')).id, medecin: JSON.parse(localStorage.getItem('currentUser')).depends_on, type: "q", message: this.question, categorie: "text" }).then(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this._icoeurService.getBlog({ patient: JSON.parse(localStorage.getItem('currentUser')).id, medecin: JSON.parse(localStorage.getItem('currentUser')).depends_on }).then(function (res) {
                    if (res['status'] == true) {
                        _this.chatMessage = res['Message'];
                        _this._icoeurService.onUserUpdate({ id: JSON.parse(localStorage.getItem('currentUser')).id, new: 1 }).then(function (res) {
                            console.log(res);
                            _this.question = undefined;
                        });
                    }
                });
            }
        });
        this.question = undefined;
        document.getElementsByTagName('ion-content')[0].scrollToBottom();
    };
    BlogPage.prototype.sendResponse = function () {
        var _this = this;
        this._icoeurService.createBlog({ patient: localStorage.getItem('idPatient'), medecin: JSON.parse(localStorage.getItem('currentUser')).id, type: "r", message: this.response, categorie: "text" }).then(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this._icoeurService.getBlog({ patient: localStorage.getItem('idPatient'), medecin: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
                    console.log(res);
                    if (res['status'] == true) {
                        _this.chatMessage = res['Message'];
                        /* this._icoeurService.onUserUpdate({id:localStorage.getItem('idPatient'),new:1}).then(res=>{
                           console.log(res);
                           this.question = undefined
                         })*/
                    }
                });
            }
            else {
                alert('Error');
            }
        });
        this.response = undefined;
        document.getElementsByTagName('ion-content')[0].scrollToBottom();
    };
    BlogPage.prototype.displayDate = function (date) {
        var dd = ((new Date()).toJSON()).split("T", 2)[0];
        if (date != "") {
            var d = date.split(" ")[0];
            if (dd == d) {
                return "à " + date.split(" ")[1];
            }
            else {
                return d.split('-')[2] + "-" + d.split('-')[1] + "-" + d.split('-')[0] + " " + date.split(" ")[1];
            }
        }
    };
    BlogPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.writer = JSON.parse(localStorage.getItem('currentUser')).access_level;
        //console.log(JSON.parse(localStorage.getItem('currentUser')).access_level)
        if (this.writer == 3) {
            this._icoeurService.getBlog({ patient: JSON.parse(localStorage.getItem('currentUser')).id, medecin: JSON.parse(localStorage.getItem('currentUser')).depends_on }).then(function (res) {
                console.log(res);
                if (res['status'] == true) {
                    _this.chatMessage = res['Message'];
                }
            });
        }
        if (this.writer == 2) {
            this._icoeurService.getBlog({ patient: localStorage.getItem('idPatient'), medecin: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
                console.log(res);
                if (res['status'] == true) {
                    _this.chatMessage = res['Message'];
                }
            });
        }
    };
    BlogPage.prototype.ngOnInit = function () {
        this.writer = JSON.parse(localStorage.getItem('currentUser')).access_level;
    };
    BlogPage.ctorParameters = function () { return [
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_2__["ICoeurServiceService"] }
    ]; };
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.page.scss */ "./src/app/blog/blog.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_2__["ICoeurServiceService"]])
    ], BlogPage);
    return BlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map