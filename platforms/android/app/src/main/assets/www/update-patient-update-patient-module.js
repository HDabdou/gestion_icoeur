(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-patient-update-patient-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-patient/update-patient.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-patient/update-patient.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Modifications compte\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"padding: 0px !important;margin-top: 1rem;\">\n  <ion-row class=\"container\">\n  <ion-card style=\" width: 100%;margin: 0;background-color: darksalmon;\">\n\n    <img *ngIf=\"!loaded && image == null \" style=\"border-radius: 50%; width: 77%;margin-left: 36px;padding: 11px;\" class=\"logo img-responsive\" src=\"/assets/avatar.png\" alt=\"\" />\n    <img *ngIf=\"!loaded && image != null\" style=\"border-radius: 50%; width: 77%;margin-left: 36px;padding: 11px;\" class=\"logo img-responsive\" src=\"https://icoeursam.com/images/uploaded/{{image}}\" alt=\"\" />\n    <img *ngIf=\"loaded\" style=\"border-radius: 50%; width: 77%;margin-left: 36px;padding: 11px;\" class=\"logo img-responsive\" [src]=\"imgURL\" alt=\"\" />\n    <ion-input type=\"file\"    (change)=\"fileChange($event)\" placeholder=\"Uploader Image\" accept=\"image/*\"></ion-input>\n  </ion-card>\n</ion-row>\n <!-- <ion-row class=\"container\">\n\n    <ion-col style=\" margin: 5px;\">\n    \n    <ion-item  >\n      <ion-label>Prénom </ion-label>     \n      <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Naby\" placeholder=\"Prénom\"></ion-input>\n   \n     </ion-item> \n   \n  </ion-col>\n \n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Nom </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"NDIAYE\" placeholder=\"Nom\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Sexe </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"M\" placeholder=\"M :si masculin,F : si féminin\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Date Naissance </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"18-06-1989\" placeholder=\"date de naissance\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Origine </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Dakar\" placeholder=\"Origine\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Lieu résidence </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Dakar\" placeholder=\"Lieu résidence\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Téléphone 1 </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"779632145\" placeholder=\"Téléphone 1\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Téléphone 2 </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"777332145\" placeholder=\"Téléphone 2\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Profession </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Comptable\" placeholder=\"profession\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Lieu exercice </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Dakar\" placeholder=\"Lieu exercice\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Scolarisé </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Oui\" placeholder=\"Oui ou Non\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Accompagnant </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"Abdoul NDIAYE\" placeholder=\"Accompagnant\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Téléphone 1 </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"779854361\" placeholder=\"Téléphone 1\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>    \n<ion-row class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  \n  <ion-item  >\n    <ion-label>Téléphone 2 </ion-label>     \n    <ion-input style=\"border: 1px solid #FF6347;text-align: center;margin-left: 1rem;\"  type=\"text\" value=\"773354361\" placeholder=\"Téléphone 2\"></ion-input>\n \n   </ion-item> \n \n</ion-col>\n\n</ion-row>  -->\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/update-patient/update-patient-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/update-patient/update-patient-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatePatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePatientPageRoutingModule", function() { return UpdatePatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-patient.page */ "./src/app/update-patient/update-patient.page.ts");




var routes = [
    {
        path: '',
        component: _update_patient_page__WEBPACK_IMPORTED_MODULE_3__["UpdatePatientPage"]
    }
];
var UpdatePatientPageRoutingModule = /** @class */ (function () {
    function UpdatePatientPageRoutingModule() {
    }
    UpdatePatientPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdatePatientPageRoutingModule);
    return UpdatePatientPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/update-patient/update-patient.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/update-patient/update-patient.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatePatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePatientPageModule", function() { return UpdatePatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-patient-routing.module */ "./src/app/update-patient/update-patient-routing.module.ts");
/* harmony import */ var _update_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-patient.page */ "./src/app/update-patient/update-patient.page.ts");







var UpdatePatientPageModule = /** @class */ (function () {
    function UpdatePatientPageModule() {
    }
    UpdatePatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _update_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatePatientPageRoutingModule"]
            ],
            declarations: [_update_patient_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePatientPage"]]
        })
    ], UpdatePatientPageModule);
    return UpdatePatientPageModule;
}());



/***/ }),

/***/ "./src/app/update-patient/update-patient.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/update-patient/update-patient.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBar.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXBhdGllbnQvQzpcXHByb2pldElvbmljXFxpX2NvZXVyL3NyY1xcYXBwXFx1cGRhdGUtcGF0aWVudFxcdXBkYXRlLXBhdGllbnQucGFnZS5zY3NzIiwic3JjL2FwcC91cGRhdGUtcGF0aWVudC91cGRhdGUtcGF0aWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFFRSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUNFLCtHQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRERFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGRTtFQUNFLFdBQUE7RUFHRixnQkFBQTtFQUNBLHFIQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtcGF0aWVudC91cGRhdGUtcGF0aWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm15Q2FyZCB7XHJcbiAgICAvL21heC1oZWlnaHQ6MzIlICFpbXBvcnRhbnQgO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6NXB4ICFpbXBvcnRhbnRcclxuICB9XHJcbiAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5yb3dIb21le1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3RvcEJhci5KUEdcIikgO1xyXG4gICAgLS1jb2xvciA6IHdoaXRlIDtcclxuICAgIC0tYm94LXNoYWRvdzowICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgLy8gcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5teUNhcmQge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hcmdpbi1zdGFydDogNnB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5yb3dIb21lIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvdG9wQmFyLkpQR1wiKSA7XG4gIC0tY29sb3I6IHdoaXRlIDtcbiAgLS1ib3gtc2hhZG93OjAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/update-patient/update-patient.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/update-patient/update-patient.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatePatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePatientPage", function() { return UpdatePatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var UpdatePatientPage = /** @class */ (function () {
    function UpdatePatientPage(http, _serviceIcoeur, alertController) {
        this.http = http;
        this._serviceIcoeur = _serviceIcoeur;
        this.alertController = alertController;
        this.loaded = false;
        this.image = null;
        this.url = 'https://icoeursam.com/images/uploadImage.php';
    }
    UpdatePatientPage.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            console.log(formData);
            var header = void 0;
            header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Accept', 'application/json');
            var param = 'image=' + formData;
            this.http.post(this.url, formData, { headers: header }).toPromise().then(function (res) {
                res['name'];
                _this._serviceIcoeur.changeImage({ image: res['name'], patient: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
                    console.log(res);
                    _this.pinErrorAlert(res['Message']);
                });
            }).catch(function (error) { console.log('bad'); });
            var reader = new FileReader();
            this.imagePath = fileList;
            reader.readAsDataURL(fileList[0]);
            reader.onload = function (_event) {
                _this.imgURL = reader.result;
                _this.loaded = true;
            };
        }
    };
    UpdatePatientPage.prototype.pinErrorAlert = function (arg) {
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
    UpdatePatientPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') != null) {
            this.image = JSON.parse(localStorage.getItem('currentUser')).image;
            console.log(this.image);
        }
    };
    UpdatePatientPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_3__["ICoeurServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    UpdatePatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-patient',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-patient.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-patient/update-patient.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-patient.page.scss */ "./src/app/update-patient/update-patient.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_3__["ICoeurServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], UpdatePatientPage);
    return UpdatePatientPage;
}());



/***/ })

}]);
//# sourceMappingURL=update-patient-update-patient-module.js.map