(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medecin-accueil-accueil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/medecin/accueil/accueil.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medecin/accueil/accueil.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Accueil Médecin\n      <img  style=\"width: 10%;height: 100%;float: right;\" src=\"/assets/iconModif.png\" alt=\"\">\n\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card class=\"welcome-card myCard\" style=\"min-height: 100% ;margin: -1px !important;padding: 0;background-color: whitesmoke;\"  >\n    <ion-card-header style=\"background-color: #008B8B;border-bottom-left-radius: 30%;\">\n    <div style=\"text-align: center;color: white;\">\n      <span>Dr</span> <span>{{currentUser}}</span>\n    </div>\n    \n  </ion-card-header>\n   <ion-card-content style=\"padding: 0px !important;\">\n\n  \n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row  class=\"container\">\n        <ion-col style=\" margin: 5px;\">\n        <ion-item style=\"text-align: center;\">\n            <ion-label style=\"color: #008B8B;\"><strong>Listes des  patients</strong></ion-label>    \n        </ion-item>\n        </ion-col>\n\n        <ion-row  style=\" width: 100%;\">   \n              \n          <ion-item  style=\"min-width: 100%;\">\n            <ion-label>Recherche </ion-label>     \n            <ion-input  [(ngModel)]=\"filtre\" (keyup)=\"transform(this.patient,filtre)\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" placeholder=\"filtre\"></ion-input>\n          </ion-item>      \n            <ion-grid >\n              <ion-row >\n                <ion-col size=\"2.5\" style=\"text-align: start;font-weight:bold\">N°Dossier</ion-col>\n                <ion-col size=\"2.5\" style=\"text-align: start;font-weight:bold\" >Nom</ion-col>\n                <ion-col size=\"3\" style=\"text-align: start;font-weight:bold\">Prénom</ion-col>\n                <ion-col size=\"4\"style=\"text-align: start;font-weight:bold\" >Téléphone</ion-col>\n              </ion-row> \n              <div  >\n              <ion-row  *ngFor=\"let t of patient ;let i = index\" (click)=\"loadPatient(t.id)\">\n                <ion-col size=\"2.5\"style=\"text-align: start;\" >{{t.numero_dossier}}</ion-col>\n                <ion-col size=\"2.5\"style=\"text-align: start;\" >{{t.nom}}</ion-col>\n                <ion-col size=\"3\" style=\"text-align: start;\" >{{t.prenom}}</ion-col>\n                <ion-col size=\"4\" style=\"text-align: start;\">{{t.tel1}}<ion-badge *ngIf=\"t.isNews != null && t.isNews == 1\" color=\"warning\">1</ion-badge></ion-col>\n              </ion-row>\n            </div>\n            </ion-grid>\n\n        </ion-row>\n      </ion-row>\n  \n   </ion-grid>\n  </div>\n</ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/medecin/accueil/accueil-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/medecin/accueil/accueil-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AccueilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageRoutingModule", function() { return AccueilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accueil.page */ "./src/app/medecin/accueil/accueil.page.ts");




var routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_3__["AccueilPage"]
    }
];
var AccueilPageRoutingModule = /** @class */ (function () {
    function AccueilPageRoutingModule() {
    }
    AccueilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AccueilPageRoutingModule);
    return AccueilPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/medecin/accueil/accueil.module.ts":
/*!***************************************************!*\
  !*** ./src/app/medecin/accueil/accueil.module.ts ***!
  \***************************************************/
/*! exports provided: AccueilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function() { return AccueilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accueil-routing.module */ "./src/app/medecin/accueil/accueil-routing.module.ts");
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accueil.page */ "./src/app/medecin/accueil/accueil.page.ts");







var AccueilPageModule = /** @class */ (function () {
    function AccueilPageModule() {
    }
    AccueilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccueilPageRoutingModule"]
            ],
            declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_6__["AccueilPage"]]
        })
    ], AccueilPageModule);
    return AccueilPageModule;
}());



/***/ }),

/***/ "./src/app/medecin/accueil/accueil.page.scss":
/*!***************************************************!*\
  !*** ./src/app/medecin/accueil/accueil.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBarMed.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkZWNpbi9hY2N1ZWlsL0M6XFxwcm9qZXRJb25pY1xcaV9jb2V1ci9zcmNcXGFwcFxcbWVkZWNpblxcYWNjdWVpbFxcYWNjdWVpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lZGVjaW4vYWNjdWVpbC9hY2N1ZWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUVFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZFO0VBQ0UsV0FBQTtFQUdGLGdCQUFBO0VBQ0EscUhBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21lZGVjaW4vYWNjdWVpbC9hY2N1ZWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubXlDYXJkIHtcclxuICAgIC8vbWF4LWhlaWdodDozMiUgIWltcG9ydGFudCA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDo2cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDo1cHggIWltcG9ydGFudFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLnJvd0hvbWV7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdG9wQmFyTWVkLkpQR1wiKSA7XHJcbiAgICAtLWNvbG9yIDogd2hpdGUgO1xyXG4gICAgLS1ib3gtc2hhZG93OjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAvLyBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm15Q2FyZCB7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiA2cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1tYXJnaW4tZW5kOiA1cHggIWltcG9ydGFudDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnJvd0hvbWUge1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90b3BCYXJNZWQuSlBHXCIpIDtcbiAgLS1jb2xvcjogd2hpdGUgO1xuICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/medecin/accueil/accueil.page.ts":
/*!*************************************************!*\
  !*** ./src/app/medecin/accueil/accueil.page.ts ***!
  \*************************************************/
/*! exports provided: AccueilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPage", function() { return AccueilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");





var AccueilPage = /** @class */ (function () {
    function AccueilPage(menuCtrl, router, _serviceIcoeur) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._serviceIcoeur = _serviceIcoeur;
        this.patient = [];
    }
    AccueilPage.prototype.includesStr = function (values, str) {
        return values.map(function (value) {
            return String(value);
        }).find(function (value) {
            return value.includes("Lets");
        });
    };
    AccueilPage.prototype.doFilter = function () {
    };
    AccueilPage.prototype.loadPatient = function (id) {
        var _this = this;
        this._serviceIcoeur.onUserUpdate({ id: id, new: 0 }).then(function (res) {
            if (res['status'] == true) {
                localStorage.setItem('idPatient', id);
                _this.router.navigate(['/suivi-patient']);
            }
        });
    };
    AccueilPage.prototype.transform = function (items, searchText) {
        console.log(searchText);
        console.log(items);
        if (!items) {
            return [];
        }
        ;
        if (!searchText) {
            return items;
        }
        else {
            searchText = searchText.toLowerCase();
            return items.filter(function (it) {
                console.log(it.numero_dossier.toLowerCase().includes(searchText));
                return it.numero_dossier.toLowerCase().includes(searchText);
            });
        }
    };
    AccueilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("ionViewWillEnter");
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).nom;
        this._serviceIcoeur.getPatientByMedcin({ medecin: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
            if (res['status'] == true) {
                _this.patient = res['Message'];
            }
        });
    };
    AccueilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad");
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).nom;
        this._serviceIcoeur.getPatientByMedcin({ medecin: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
            if (res['status'] == true) {
                _this.patient = res['Message'];
            }
        });
    };
    AccueilPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).nom;
        this._serviceIcoeur.getPatientByMedcin({ medecin: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
            if (res['status'] == true) {
                _this.patient = res['Message'];
            }
        });
        this.menuCtrl.enable(true);
    };
    AccueilPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_4__["ICoeurServiceService"] }
    ]; };
    AccueilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accueil',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accueil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/medecin/accueil/accueil.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accueil.page.scss */ "./src/app/medecin/accueil/accueil.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_4__["ICoeurServiceService"]])
    ], AccueilPage);
    return AccueilPage;
}());



/***/ })

}]);
//# sourceMappingURL=medecin-accueil-accueil-module.js.map