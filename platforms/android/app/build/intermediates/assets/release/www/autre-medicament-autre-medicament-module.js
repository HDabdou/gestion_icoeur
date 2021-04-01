(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autre-medicament-autre-medicament-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/autre-medicament/autre-medicament.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autre-medicament/autre-medicament.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Autre Médicament\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  \n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row style=\"border: 2px solid #FF6347;\" class=\"container\">\n        <ion-col style=\" margin: 5px;\">\n        <ion-item style=\"text-align: center;\">\n            <ion-label style=\"color: #FF6347;\"><strong>Liste autre(s) médicament(s)</strong></ion-label>    \n            \n          <img *ngIf=\"!checkAVK\" (click)=\"checkSOusAVK('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n          <img *ngIf=\"checkAVK\" (click)=\"checkSOusAVK('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n      \n        </ion-item>\n        </ion-col>\n        <ion-row  style=\" width: 100%;\">        \n            <ion-grid >\n              <ion-row >\n                <ion-col size=\"3\" style=\"text-align: start;\" >Date</ion-col>\n                <ion-col size=\"6\" style=\"text-align: start;\">Médicament/Dose</ion-col>\n                <ion-col size=\"3\"style=\"text-align: start;\" >Posologie</ion-col>\n              </ion-row> \n              <div  *ngIf=\"checkAVK\">\n              <ion-row  *ngFor=\"let t of avkHistorique;let i = index\">\n                <ion-col size=\"3\"style=\"text-align: start;\" >{{displayDate(t.dateCreate)}}</ion-col>\n                <ion-col size=\"6\" style=\"text-align: start;\" >{{t.nom}}/{{t.dose}}</ion-col>\n                <ion-col size=\"3\"style=\"text-align: start;\" >{{t.posologie}}</ion-col>\n              </ion-row>\n            </div>\n            </ion-grid>\n\n        </ion-row>\n\n      </ion-row>   \n   </ion-grid>\n  </div>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/autre-medicament/autre-medicament-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/autre-medicament/autre-medicament-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AutreMedicamentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutreMedicamentPageRoutingModule", function() { return AutreMedicamentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autre_medicament_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autre-medicament.page */ "./src/app/autre-medicament/autre-medicament.page.ts");




var routes = [
    {
        path: '',
        component: _autre_medicament_page__WEBPACK_IMPORTED_MODULE_3__["AutreMedicamentPage"]
    }
];
var AutreMedicamentPageRoutingModule = /** @class */ (function () {
    function AutreMedicamentPageRoutingModule() {
    }
    AutreMedicamentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AutreMedicamentPageRoutingModule);
    return AutreMedicamentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/autre-medicament/autre-medicament.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/autre-medicament/autre-medicament.module.ts ***!
  \*************************************************************/
/*! exports provided: AutreMedicamentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutreMedicamentPageModule", function() { return AutreMedicamentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autre_medicament_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autre-medicament-routing.module */ "./src/app/autre-medicament/autre-medicament-routing.module.ts");
/* harmony import */ var _autre_medicament_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autre-medicament.page */ "./src/app/autre-medicament/autre-medicament.page.ts");







var AutreMedicamentPageModule = /** @class */ (function () {
    function AutreMedicamentPageModule() {
    }
    AutreMedicamentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _autre_medicament_routing_module__WEBPACK_IMPORTED_MODULE_5__["AutreMedicamentPageRoutingModule"]
            ],
            declarations: [_autre_medicament_page__WEBPACK_IMPORTED_MODULE_6__["AutreMedicamentPage"]]
        })
    ], AutreMedicamentPageModule);
    return AutreMedicamentPageModule;
}());



/***/ }),

/***/ "./src/app/autre-medicament/autre-medicament.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/autre-medicament/autre-medicament.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBar.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0cmUtbWVkaWNhbWVudC9DOlxccHJvamV0SW9uaWNcXGlfY29ldXIvc3JjXFxhcHBcXGF1dHJlLW1lZGljYW1lbnRcXGF1dHJlLW1lZGljYW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRyZS1tZWRpY2FtZW50L2F1dHJlLW1lZGljYW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBRUUsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDRSwrR0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURERTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSUo7O0FERkU7RUFDRSxXQUFBO0VBR0YsZ0JBQUE7RUFDQSxxSEFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXV0cmUtbWVkaWNhbWVudC9hdXRyZS1tZWRpY2FtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubXlDYXJkIHtcclxuICAgIC8vbWF4LWhlaWdodDozMiUgIWltcG9ydGFudCA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDo2cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDo1cHggIWltcG9ydGFudFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLnJvd0hvbWV7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvdG9wQmFyLkpQR1wiKSA7XHJcbiAgICAtLWNvbG9yIDogd2hpdGUgO1xyXG4gICAgLS1ib3gtc2hhZG93OjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAvLyBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm15Q2FyZCB7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiA2cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1tYXJnaW4tZW5kOiA1cHggIWltcG9ydGFudDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnJvd0hvbWUge1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy90b3BCYXIuSlBHXCIpIDtcbiAgLS1jb2xvcjogd2hpdGUgO1xuICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/autre-medicament/autre-medicament.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/autre-medicament/autre-medicament.page.ts ***!
  \***********************************************************/
/*! exports provided: AutreMedicamentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutreMedicamentPage", function() { return AutreMedicamentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");



var AutreMedicamentPage = /** @class */ (function () {
    function AutreMedicamentPage(_serviceIcoeur) {
        this._serviceIcoeur = _serviceIcoeur;
        this.checkAVK = false;
        this.Accidant = false;
        this.autresCheck = false;
        this.avkHistorique = [];
    }
    AutreMedicamentPage.prototype.checkAutre = function (rep) {
        if (rep == 'oui') {
            this.autresCheck = true;
        }
        if (rep == "non") {
            this.autresCheck = false;
        }
    };
    AutreMedicamentPage.prototype.checkAccidant = function (rep) {
        if (rep == 'oui') {
            this.Accidant = true;
        }
        if (rep == "non") {
            this.Accidant = false;
        }
    };
    AutreMedicamentPage.prototype.checkSOusAVK = function (rep) {
        if (rep == 'oui') {
            this.checkAVK = true;
        }
        if (rep == "non") {
            this.checkAVK = false;
        }
    };
    AutreMedicamentPage.prototype.displayDate = function (date) {
        var frdate = new Date(date).toLocaleString().split(' ')[0];
        return frdate;
    };
    AutreMedicamentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.data.nom;
        console.log(this.data.id);
        this._serviceIcoeur.getAllmedicament(this.data.id).then(function (res) {
            if (res['status'] == true) {
                _this.avkHistorique = res['Message'];
            }
        });
    };
    AutreMedicamentPage.ctorParameters = function () { return [
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_2__["ICoeurServiceService"] }
    ]; };
    AutreMedicamentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autre-medicament',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autre-medicament.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/autre-medicament/autre-medicament.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autre-medicament.page.scss */ "./src/app/autre-medicament/autre-medicament.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_2__["ICoeurServiceService"]])
    ], AutreMedicamentPage);
    return AutreMedicamentPage;
}());



/***/ })

}]);
//# sourceMappingURL=autre-medicament-autre-medicament-module.js.map