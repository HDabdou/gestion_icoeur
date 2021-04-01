(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tp-inr-tp-inr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tp-inr/tp-inr.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tp-inr/tp-inr.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mes TP-INR\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <ion-card class=\"welcome-card myCard\" style=\"margin: -1px !important;padding: 0;background-color: whitesmoke;\"  >\n    <ion-card-header style=\"background-color: #FF6347;border-bottom-left-radius: 30%;\">\n    <div style=\"text-align: center;color: white;\">\n      <span>Surveillance AVK</span> \n    </div>\n    \n  </ion-card-header>\n   <ion-card-content style=\"padding: 0px !important;\">\n\n  \n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row class=\"container\">\n        <ion-col style=\" margin: 5px;\">\n        \n        <ion-item  >\n          <ion-label>TP </ion-label>     \n          <ion-input  type=\"text\" [(ngModel)]=\"tp\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"TP\"></ion-input>\n       \n         </ion-item> \n       \n      </ion-col>\n     \n    </ion-row>  \n    <ion-row class=\"container\">\n      <ion-col style=\" margin: 5px;\">\n      \n      <ion-item  >\n        <ion-label>INR </ion-label>     \n        <ion-input  type=\"text\" [(ngModel)]=\"inr\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"INR\"></ion-input>\n     \n       </ion-item> \n     \n    </ion-col>\n   \n  </ion-row>   \n  <!--<ion-row class=\"container\">\n    <ion-col style=\" margin: 5px;\">\n    \n    <ion-item  >\n      <ion-label>Date prochain TP-INR  </ion-label>     \n      <ion-input  type=\"date\" [(ngModel)]=\"datePrechainTpInr\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"INR\"></ion-input>\n   \n     </ion-item> \n   \n  </ion-col>\n \n</ion-row> --> \n<ion-row *ngIf=\"tp != undefined && inr != undefined \" class=\"container\">\n  <ion-col style=\" margin: 5px; text-align: center;\">\n  \n  <ion-item  >\n    <ion-button  style=\"width: 48%;\" size=\"large\" (click)=\"presentLoading()\"  color=\"success\">Valider<ion-icon name=\"checkbox-outline\"></ion-icon></ion-button>    \n\n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n\n   </ion-grid>\n  \n   \n  </div>\n</ion-card-content>\n<div class=\"container\">\n  <canvas #barChart></canvas>\n  <ion-row *ngIf=\"isMaladie\">\n    <ion-col>\n      <ion-label>INR Min : {{maladie.inrCibleMin}}</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label>INR Max : {{maladie.inrCibleMax}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-item style=\"text-align: center;\">\n    <ion-label style=\"color: #FF6347;\"><strong>Listes des TP-INR</strong></ion-label>    \n    \n  <img *ngIf=\"!listeDisplay\" (click)=\"dislplayListe('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n  <img *ngIf=\"listeDisplay\" (click)=\"dislplayListe('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n</ion-item>\n  <ion-grid >\n    \n    <ion-row *ngIf=\"listeDisplay\">\n      <ion-col size=\"4\" style=\"text-align: start;\" >Date</ion-col>\n      <ion-col size=\"4\" style=\"text-align: start;\">TP</ion-col>\n      <ion-col size=\"4\" style=\"text-align: start;\">INR</ion-col>\n    </ion-row> \n    <div *ngIf=\"listeDisplay\">\n    <ion-row  *ngFor=\"let t of inrHistorique\">\n      <ion-col size=\"4\"style=\"text-align: start;\" >{{displayDate(t.date_ajout)}}</ion-col>\n      <ion-col size=\"4\" style=\"text-align: start;\" >{{t.tp}}</ion-col>\n      <ion-col size=\"4\" style=\"text-align: start;\"><p [ngStyle]=\"{'background-color':maladie.inrCibleMin > t.inr || maladie.inrCibleMax < t.inr ? 'red' : 'white' }\">{{t.inr}}</p></ion-col>\n    </ion-row>\n  </div>\n  </ion-grid>\n </div>\n\n</ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tp-inr/tp-inr-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tp-inr/tp-inr-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TpInrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpInrPageRoutingModule", function() { return TpInrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tp_inr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tp-inr.page */ "./src/app/tp-inr/tp-inr.page.ts");




var routes = [
    {
        path: '',
        component: _tp_inr_page__WEBPACK_IMPORTED_MODULE_3__["TpInrPage"]
    }
];
var TpInrPageRoutingModule = /** @class */ (function () {
    function TpInrPageRoutingModule() {
    }
    TpInrPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TpInrPageRoutingModule);
    return TpInrPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tp-inr/tp-inr.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tp-inr/tp-inr.module.ts ***!
  \*****************************************/
/*! exports provided: TpInrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpInrPageModule", function() { return TpInrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tp_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tp-inr-routing.module */ "./src/app/tp-inr/tp-inr-routing.module.ts");
/* harmony import */ var _tp_inr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tp-inr.page */ "./src/app/tp-inr/tp-inr.page.ts");







var TpInrPageModule = /** @class */ (function () {
    function TpInrPageModule() {
    }
    TpInrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tp_inr_routing_module__WEBPACK_IMPORTED_MODULE_5__["TpInrPageRoutingModule"],
            ],
            declarations: [_tp_inr_page__WEBPACK_IMPORTED_MODULE_6__["TpInrPage"]]
        })
    ], TpInrPageModule);
    return TpInrPageModule;
}());



/***/ }),

/***/ "./src/app/tp-inr/tp-inr.page.scss":
/*!*****************************************!*\
  !*** ./src/app/tp-inr/tp-inr.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBar.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHAtaW5yL0M6XFxwcm9qZXRJb25pY1xcaV9jb2V1ci9zcmNcXGFwcFxcdHAtaW5yXFx0cC1pbnIucGFnZS5zY3NzIiwic3JjL2FwcC90cC1pbnIvdHAtaW5yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUVFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZFO0VBQ0UsV0FBQTtFQUdGLGdCQUFBO0VBQ0EscUhBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3RwLWluci90cC1pbnIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5teUNhcmQge1xyXG4gICAgLy9tYXgtaGVpZ2h0OjMyJSAhaW1wb3J0YW50IDtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OjZweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOjVweCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAucm93SG9tZXtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy90b3BCYXIuSlBHXCIpIDtcclxuICAgIC0tY29sb3IgOiB3aGl0ZSA7XHJcbiAgICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgIC8vIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgLy9wYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm15Q2FyZCB7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiA2cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1tYXJnaW4tZW5kOiA1cHggIWltcG9ydGFudDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnJvd0hvbWUge1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy90b3BCYXIuSlBHXCIpIDtcbiAgLS1jb2xvcjogd2hpdGUgO1xuICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tp-inr/tp-inr.page.ts":
/*!***************************************!*\
  !*** ./src/app/tp-inr/tp-inr.page.ts ***!
  \***************************************/
/*! exports provided: TpInrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpInrPage", function() { return TpInrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var TpInrPage = /** @class */ (function () {
    function TpInrPage(_serviceIcoeur, alertController, loadingController) {
        this._serviceIcoeur = _serviceIcoeur;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.listeDisplay = false;
        this.isMaladie = false;
        this.isTpinr = false;
        this.inrHistorique = [];
        this.dates = [];
        this.datas = [];
    }
    TpInrPage.prototype.ionViewDidEnter = function () {
        this.createBarChart();
    };
    TpInrPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            //duration: 2000
                            showBackdrop: true,
                            id: 'login'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () {
                            _this._serviceIcoeur.createTpInr({ tp: _this.tp, inr: _this.inr, dateProChainTpInr: ((new Date()).toJSON()).split("T", 2)[0], patient: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
                                console.log(res['Message']);
                                if (res['status'] != false) {
                                    loading.dismiss();
                                    _this._serviceIcoeur.onUserUpdate({ id: JSON.parse(localStorage.getItem('currentUser')).id, new: 1 }).then(function (resp) {
                                        if (resp['status'] == true) {
                                            _this.pinErrorAlert(res['Message']);
                                            _this.tp = undefined;
                                            _this.inr = undefined;
                                            _this.datePrechainTpInr = undefined;
                                            _this._serviceIcoeur.getAllTpInr(JSON.parse(localStorage.getItem('currentUser')).id).then(function (res) {
                                                if (res['status'] != false) {
                                                    _this.inrHistorique = res['Message'];
                                                    _this.isTpinr = true;
                                                }
                                                else {
                                                    console.log('pas de reponse');
                                                }
                                            });
                                        }
                                    });
                                }
                                else {
                                    loading.dismiss();
                                    _this.pinErrorAlert(res['Message']);
                                }
                            });
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    TpInrPage.prototype.displayDate = function (date) {
        var frdate = new Date(date).toLocaleString().split(' ')[0];
        return frdate;
    };
    TpInrPage.prototype.pinErrorAlert = function (arg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Message',
                            //subHeader: 'Subtitle',
                            subHeader: arg,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'success',
                                    handler: function () {
                                        //this.valider()
                                        console.log('Confirm Ok');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TpInrPage.prototype.ngOnInit = function () {
        var _this = this;
        this._serviceIcoeur.getMaladie(JSON.parse(localStorage.getItem('currentUser')).id).then(function (res) {
            if (res['status'] != false) {
                _this.maladie = res['Message'];
                _this.isMaladie = true;
            }
            else {
                console.log('pas de reponse');
            }
        });
        this._serviceIcoeur.getAllTpInr(JSON.parse(localStorage.getItem('currentUser')).id).then(function (res) {
            if (res['status'] != false) {
                _this.inrHistorique = res['Message'];
                _this.isTpinr = true;
            }
            else {
                console.log('pas de reponse');
            }
        });
    };
    TpInrPage.prototype.dislplayListe = function (arg) {
        if (arg == "oui") {
            console.log(arg);
            this.listeDisplay = true;
        }
        if (arg == "non") {
            console.log(arg);
            this.listeDisplay = false;
        }
    };
    TpInrPage.prototype.createBarChart = function () {
        var _this = this;
        this._serviceIcoeur.getChartTpInr(JSON.parse(localStorage.getItem('currentUser')).id).then(function (res) {
            if (res['status'] == true) {
                var rep = res['Message'];
                rep.reverse();
                for (var _i = 0, rep_1 = rep; _i < rep_1.length; _i++) {
                    var i = rep_1[_i];
                    _this.datas.push(i.inr);
                    _this.dates.push(_this.displayDate(i.date_ajout));
                }
                _this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this.barChart.nativeElement, {
                    type: 'line',
                    data: {
                        labels: _this.dates,
                        datasets: [{
                                label: 'Courbe suivi INR',
                                data: _this.datas,
                                //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                                borderColor: 'rgb(38, 194, 229)',
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        }
                    }
                });
            }
        });
    };
    TpInrPage.ctorParameters = function () { return [
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_3__["ICoeurServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TpInrPage.prototype, "barChart", void 0);
    TpInrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tp-inr',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tp-inr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tp-inr/tp-inr.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tp-inr.page.scss */ "./src/app/tp-inr/tp-inr.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_3__["ICoeurServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], TpInrPage);
    return TpInrPage;
}());



/***/ })

}]);
//# sourceMappingURL=tp-inr-tp-inr-module.js.map