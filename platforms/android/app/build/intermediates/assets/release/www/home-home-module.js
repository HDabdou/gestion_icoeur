(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mon compte \n      <img  style=\"width: 10%;height: 100%;float: right;\" src=\"/assets/iconModif.png\" alt=\"\">\n    </ion-title>\n   \n    \n\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  \n  <ion-card class=\"welcome-card myCard\" style=\"margin: -1px !important;padding: 0;margin-bottom: 2rem !important;\"  >\n    <ion-card-header style=\"background-color: #FF6347;border-bottom-left-radius: 30%;\">\n    <div style=\"text-align: center;color: white;\">\n      <span *ngIf=\"data.sexe == 'm'\">Mr</span><span *ngIf=\"data.sexe == 'f'\">Mme</span><span>{{data.nom}}</span><span>{{data.prenom}}</span> <span>{{calculateDate(data.dateNaissance)}} ans</span> <span>{{displayGRHS(data.gsrh)}}</span> \n    </div>\n    <div style=\"text-align: center;color: white;\">\n      <span style=\"font-size: 20px;font-style: italic;\">Cardiologue : </span><span style=\"font-size: 20px;font-style: italic;\">{{data.cardiologueReferant}}</span> \n    </div>\n  </ion-card-header>\n   <ion-card-content style=\"padding: 0px !important;\">\n\n  \n  <div style=\"text-align: center;\">\n    <ion-grid>\n      <ion-row *ngIf=\"isRDV\">\n        <ion-col style=\"min-width: 100% !important;background: darkgreen;\" *ngIf=\"getNotiffiactionRDVC(lastRDV)\">\n          <ion-item >\n            <ion-label> RDV Cardiologie le : {{displayDate(lastRDV)}} - {{heureRDVC}}</ion-label>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"isRDV\">\n        <ion-col style=\"min-width: 100% !important;background: darkgreen;\" *ngIf=\"getNotiffiactionRDVCh(lastChirurgie)\">\n          <ion-item >\n            <ion-label> RDV Chirurgie le : {{displayDate(lastChirurgie)}} - {{heureCHI}}</ion-label>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"isAVK\" style=\"border: 2px solid darkred;margin: 0;\" class=\"container\">\n        <ion-col style=\" margin: 5px;min-width: 100%;\">\n        <ion-item style=\"text-align: center;\">\n            <ion-label style=\"color: darkred;\"><strong>AVK</strong></ion-label>     \n        </ion-item>\n        </ion-col>\n        <ion-row  style=\" margin: 5px;\">\n          <ion-col>\n            <ion-item >\n              <ion-label >{{currentAVK.nom}}</ion-label>\n           </ion-item>\n\n        </ion-col>\n        <ion-col>\n          <ion-item >\n            <ion-label>{{currentAVK.dose}}</ion-label>\n         </ion-item>\n\n        </ion-col> \n        <ion-col>\n          <ion-item >\n            <ion-label>{{currentAVK.heure_prise}}</ion-label>\n        </ion-item>\n        </ion-col>\n        <ion-col style=\"min-width: 100% !important;background: crimson;\" *ngIf=\"currentAVK.lastUpdate != null && getNotiffiaction(currentAVK.lastUpdate)\">\n          <ion-item >\n            <ion-label> Modifier le : {{currentAVK.lastUpdate}}</ion-label>\n        </ion-item>\n        </ion-col>\n        <ion-col style=\"min-width: 100% !important;\" *ngIf=\"currentAVK.photo != '' || currentAVK.photo\">\n          <ion-item >\n            <img class=\"logo img-responsive\" src=\"https://icoeursam.com/images/uploaded/{{currentAVK.photo}}\" alt=\"\" />\n        </ion-item>\n\n      </ion-col>\n        </ion-row>\n        \n        </ion-row>\n         <ion-row *ngIf=\"isHeparine && currentHeparine.etat == 1\" style=\"border: 2px solid darkred;margin: 0;\" class=\"container\">\n          <ion-col style=\" margin: 5px;min-width: 100%;\">\n          <ion-item style=\"text-align: center;\">\n              <ion-label style=\"color: darkred;\"><strong>HEPARINE</strong></ion-label>     \n          </ion-item>\n          </ion-col>\n          <ion-row  style=\" margin: 5px;\">\n              <ion-col>\n                <ion-item >\n                  <ion-label >{{currentHeparine.nom}}</ion-label>\n              </ion-item>\n    \n            </ion-col>\n            <ion-col>\n              <ion-item >\n                <ion-label>{{currentHeparine.dose}}</ion-label>\n            </ion-item>\n    \n          </ion-col> \n          <ion-col>\n            <ion-item >\n              <ion-label>{{currentHeparine.heure_prise}}</ion-label>\n          </ion-item>\n    \n        </ion-col>\n        <ion-col>\n          <ion-item >\n            <ion-label>du {{displayDate(currentHeparine.date_debut_prise)}} au {{displayDate(currentHeparine.date_fin_prise)}}</ion-label>\n        </ion-item>\n  \n      </ion-col>\n      \n      <ion-col style=\"min-width: 100% !important;background: crimson;\"  *ngIf=\"getNotiffiaction1(currentHeparine.dateUpdate)\">\n        <ion-item >\n          <ion-label> Modifier le : {{currentHeparine.dateUpdate}}</ion-label>\n      </ion-item>\n      </ion-col>\n          <ion-col style=\"min-width: 100% !important;\" *ngIf=\"currentHeparine.photo != '' || currentHeparine.photo\">\n            <ion-item >\n              <img class=\"logo img-responsive\" src=\"https://icoeursam.com/images/uploaded/{{currentHeparine.photo}}\" alt=\"\" />\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n          \n          </ion-row>\n\n          <ion-row *ngIf=\"isMaladie\" class=\"container\">\n            <ion-col style=\" margin: 5px;\">\n            <ion-item style=\"text-align: center;\" *ngIf=\"isTpinr\">\n                <ion-label style=\"color: #FF6347;\"><strong>Dernier TP-INR  {{displayDate(lastTpinr.date_ajout)}}</strong></ion-label>     \n            </ion-item>\n            </ion-col>\n            <ion-row  style=\" margin: 5px;min-width: 100%;\">\n              <ion-col *ngIf=\"isTpinr\">\n                <ion-item  >\n                 <ion-label>TP : {{lastTpinr.tp}} </ion-label>\n               </ion-item>\n    \n            </ion-col>\n            <ion-col *ngIf=\"isTpinr\">\n              <ion-item style=\"text-align: center;\" [ngStyle]=\"{'color':currentMaladie.inrCibleMin >lastTpinr.inr || currentMaladie.inrCibleMax < lastTpinr.inr ? 'white' : 'black' }\" >\n                <ion-label [ngStyle]=\"{'background-color':currentMaladie.inrCibleMin >lastTpinr.inr || currentMaladie.inrCibleMax < lastTpinr.inr ? 'red' : 'white' }\">INR : {{lastTpinr.inr}}</ion-label>\n\n             </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item style=\"text-align: center;\">\n                <ion-label>INR Cible: [{{currentMaladie.inrCibleMin}} - {{currentMaladie.inrCibleMax}}]</ion-label>\n\n             </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n        \n        <ion-row class=\"container\">\n          <ion-col *ngIf=\"isMaladie\" style=\" margin: 5px;\">\n            <ion-item style=\"text-align: center;\">\n                <ion-label style=\"color: darkgreen;\"><strong>Prochain TP-INR: {{displayDate(currentMaladie.dateProchainTpInr)}}</strong></ion-label>     \n            </ion-item>\n            </ion-col>\n           \n        \n        </ion-row>\n        <ion-row *ngIf=\"isRDV\" class=\"container\">\n          <ion-col style=\" margin: 5px;\">\n            <ion-item style=\"text-align: center;\">\n                <ion-label style=\"color: darkgreen;\"><strong>Prochain RDV Cardiologie : {{displayDate(lastRDV)}}</strong></ion-label>     \n            </ion-item>\n            </ion-col>\n           \n        \n        </ion-row>\n        <ion-row *ngIf=\"isRDV\" class=\"container\">\n          <ion-col style=\" margin: 5px;\">\n            <ion-item style=\"text-align: center;\">\n                <ion-label style=\"color: darkgreen;\"><strong>Prochain RDV Chirurgie: {{displayDate(lastChirurgie)}}</strong></ion-label>     \n            </ion-item>\n            </ion-col>\n           \n        \n        </ion-row>\n\n        <ion-row class=\"container\">\n          <ion-col style=\" margin: 5px;\">\n            <ion-item style=\"text-align: center;\">\n                <ion-label style=\"color: #FF6347;\"><strong>N° garde cardio de FANN : 774879519</strong></ion-label>     \n            </ion-item>\n            </ion-col><ion-col style=\" margin: 5px;\">\n              <ion-item style=\"text-align: center;\">\n                  <ion-label style=\"color: #FF6347;\"><strong>N° garde CTCV de FANN : 774879517</strong></ion-label>     \n              </ion-item>\n              </ion-col>\n        \n        </ion-row>\n\n      \n        <ion-row *ngIf=\"isMaladie\" style=\"border: 2px solid darkred;\" class=\"container\">\n          <ion-col style=\" margin: 5px;min-width: 100%;\">\n          <ion-item style=\"text-align: center;\">\n              <ion-label style=\"color: #FF6347;\"><strong>GESTE(S)</strong></ion-label>     \n          </ion-item>\n          </ion-col>\n          <ion-row *ngIf=\"currentMaladie.position_mital == 'OUI'\" style=\" margin: 5px;width: 100%;\">\n            <ion-col style=\"width: 100%;\">\n              <ion-item style=\"width: 100%;\">\n                <h3 >Position mitrale</h3><h3  style=\"margin-left: 8px;\">{{currentMaladie.type_postion_mitral}}</h3>\n                \n             </ion-item>\n             <ion-item style=\"width: 100%;\" >\n               \n               <p>{{currentMaladie.fabriquant_valve_position_mitrale}}</p><p style=\"margin-left: 8px;\">taille : {{currentMaladie.taille_valve_position_mitrale}}</p><p style=\"margin-left: 8px;\">{{displayDate(currentMaladie.date_valve_position_mitrale)}}</p>\n            </ion-item>\n  \n          </ion-col>\n         \n          </ion-row>\n          <ion-row *ngIf=\"currentMaladie.positin_aortique == 'OUI'\" style=\" margin: 5px;width: 100%;\">\n            <ion-col style=\"width: 100%;\">\n              <ion-item style=\"width: 100%;\">\n                <h3 >Position Aortique</h3><h3  style=\"margin-left: 8px;\">{{currentMaladie.type_position_aortique}}</h3>\n                \n             </ion-item>\n             <ion-item style=\"width: 100%;\" >\n               \n               <p>{{currentMaladie.fabriquant_position_aortique}}</p><p style=\"margin-left: 8px;\">taille : {{currentMaladie.taille_position_aortique}}</p><p style=\"margin-left: 8px;\">{{displayDate(currentMaladie.date_position_aortique)}}</p>\n            </ion-item>\n  \n          </ion-col>\n         \n          </ion-row>\n          <ion-row *ngIf=\"currentMaladie.plastie_tricuspide == 'OUI'\" style=\" margin: 5px;width: 100%;\">\n            <ion-col style=\"width: 100%;\">\n              <ion-item style=\"width: 100%;\">\n                <h3 >Plastie tricuspide</h3>\n                \n             </ion-item>\n             <ion-item style=\"width: 100%;\" >\n               \n               <p>{{currentMaladie.type_plastie_tricuspide}}</p><p style=\"margin-left: 8px;\">{{displayDate(currentMaladie.date_plastie_tricuspide)}}</p>\n            </ion-item>\n  \n          </ion-col>\n         \n          </ion-row>\n          <ion-row  style=\" margin: 5px;width: 100%;\">\n            <ion-col style=\"width: 100%;\">\n              <ion-item *ngFor=\"let i of autreGestes\" style=\"width: 100%;\">\n                <h3 >{{i}}</h3>\n                \n             </ion-item>\n  \n          </ion-col>\n         \n          </ion-row>\n          \n        </ion-row>\n        <ion-row *ngIf=\"isMaladie\" class=\"container\">\n          <ion-col style=\" margin: 5px;\">\n          <ion-item style=\"text-align: center;\" *ngIf=\"isTpinr\">\n              <ion-label style=\"color: #FF6347;\"><strong>Autres affections</strong></ion-label>     \n          </ion-item>\n          </ion-col>\n          <ion-row  style=\" margin: 5px;min-width: 100%;\">\n         \n          <ion-col>\n            <ion-item *ngFor=\"let i of autres_affection\" style=\"width: 100%;\">\n              <h3 >{{i}}</h3>\n           </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-row>\n     \n   </ion-grid>\n  </div>\n</ion-card-content>\n</ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.2rem;\n  margin: 3px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: #FF6347 ;\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\nion-content {\n  --background: url('accueil.PNG') no-repeat center center / cover;\n}\n\n.container {\n  margin: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\nion-row {\n  background: transparent !important;\n}\n\nion-item {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxccHJvamV0SW9uaWNcXGlfY29ldXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBRUUsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSwrR0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxnRUFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtFQUdGLGdCQUFBO0VBQ0EscUhBQUE7QUNHQTs7QUREQTtFQUNFLGtDQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm15Q2FyZCB7XG4gIC8vbWF4LWhlaWdodDozMiUgIWltcG9ydGFudCA7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OjZweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hcmdpbi1lbmQ6NXB4ICFpbXBvcnRhbnRcbn1cbnNwYW57XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW46IDNweDtcblxufVxuLnJvd0hvbWV7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogI0ZGNjM0NyA7XG4gIC0tY29sb3IgOiB3aGl0ZSA7XG4gIC0tYm94LXNoYWRvdzowICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYWNjdWVpbC5QTkdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbi5jb250YWluZXJ7XG4gIG1hcmdpbjogNXB4O1xuIC8vIHBhZGRpbmctdG9wOiAxcmVtO1xuICAvL3BhZGRpbmctYm90dG9tOiAxcmVtO1xuYmFja2dyb3VuZDogI2ZmZjtcbmJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbmlvbi1yb3d7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbXtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5teUNhcmQge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hcmdpbi1zdGFydDogNnB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5yb3dIb21lIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkY2MzQ3IDtcbiAgLS1jb2xvcjogd2hpdGUgO1xuICAtLWJveC1zaGFkb3c6MCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2FjY3VlaWwuUE5HXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5pb24tcm93IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _free_free_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../free/free.component */ "./src/app/free/free.component.ts");
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(_serviceIcoeur, loadingController, menuCtrl, router, popoverController) {
        this._serviceIcoeur = _serviceIcoeur;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.popoverController = popoverController;
        this.operation = false;
        this.isAVK = false;
        this.isHeparine = false;
        this.isMaladie = false;
        this.isTpinr = false;
        this.isRDV = false;
        this.heureRDVC = "0000-00-00";
        this.lastChirurgie = "0000-00-00";
        this.autreGestes = [];
        this.autres_affection = [];
        this.traitement = [
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
            { medicament: "sfdjhsh", dose: "12p", posologie: "454fff" },
        ];
        this.nom = "";
    }
    HomePage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _free_free_component__WEBPACK_IMPORTED_MODULE_4__["FreeComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.checkOperation = function (rep) {
        if (rep == "oui") {
            this.operation = true;
        }
        if (rep == "non") {
            this.operation = false;
        }
    };
    HomePage.prototype.calculateDate = function (dateNaissance) {
        //console.log(dateNaissance)
        var diff = Date.now() - new Date(dateNaissance).getTime();
        var age_dt = new Date(diff);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    };
    /* ionViewWillEnter(){
       this.menuCtrl.enable(true);
       this.data = JSON.parse(localStorage.getItem('currentUser'));
       this.nom = this.data.nom
       console.log(this.nom);
     }
     ionViewDidEnter(){
       this.menuCtrl.enable(true);
       this.data = JSON.parse(localStorage.getItem('currentUser'));
       this.nom = this.data.nom
       console.log(this.nom);
     }*/
    HomePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...',
                                //duration: 2000
                                showBackdrop: true,
                                id: 'home'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.displayDate = function (date) {
        var frdate = new Date(date).toLocaleString().split(' ')[0];
        return frdate;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true);
    };
    HomePage.prototype.displayGRHS = function (arg) {
        if (arg.includes('plus')) {
            return arg.replace("plus", "+");
        }
        if (arg.includes('moins')) {
            return arg.replace("moins", "-");
        }
        return arg;
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //this.presentLoading()
        console.log(((new Date()).toJSON()).split("T", 2)[0]);
        this.menuCtrl.enable(true);
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.nom = this.data.nom;
        //console.log(this.nom);
        this._serviceIcoeur.getAVK(this.data.id).then(function (res) {
            //console.log(res);
            if (res['status'] == true) {
                _this.currentAVK = res['Message'];
                //console.log(this.currentAVK)
                _this.isAVK = true;
                // this.loading.dismiss();
            }
        });
        this._serviceIcoeur.getLastRDV(JSON.parse(localStorage.getItem('currentUser')).id).then(function (res) {
            console.log(res['Message']);
            var rep = res['Message'];
            if (res['status'] == true) {
                for (var _i = 0, rep_1 = rep; _i < rep_1.length; _i++) {
                    var i = rep_1[_i];
                    if (i.service == "Cardiologie") {
                        _this.lastRDV = i.date;
                        _this.heureRDVC = i.heure;
                        _this.isRDV = true;
                    }
                    if (i.service == "Chirurgie") {
                        _this.lastChirurgie = i.date;
                        _this.heureCHI = i.heure;
                        _this.isRDV = true;
                    }
                }
            }
        });
        this._serviceIcoeur.getLastTpInr({ patient: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
            if (res['status'] == true) {
                _this.lastTpinr = res['Message'];
                console.log(_this.lastTpinr);
                console.log("Date lastUpdate " + _this.lastTpinr.lastUpdate);
                var date1 = new Date(_this.lastTpinr.lastUpdate).getDay();
                console.log("Date lastUpdate plus un j " + date1);
                _this.isTpinr = true;
            }
        });
        this._serviceIcoeur.getHeparine(this.data.id).then(function (res) {
            //console.log(res);
            if (res['status'] == true) {
                _this.currentHeparine = res['Message'];
                //console.log(this.currentHeparine)
                _this.isHeparine = true;
                //this.loading.dismiss();
            }
        });
        this._serviceIcoeur.getMaladie(this.data.id).then(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.currentMaladie = res['Message'];
                console.log(res['Message']);
                console.log(_this.currentMaladie);
                _this.autreGestes = _this.currentMaladie.autre_gestes.split(',');
                _this.autres_affection = _this.currentMaladie.autres_affection.split(',');
                _this.isMaladie = true;
            }
            //this.loading.dismiss();
        });
    };
    HomePage.prototype.getNotiffiaction = function (date) {
        var sys = ((new Date()).toJSON()).split("T", 2)[0];
        var app = ((new Date(date)).toJSON()).split("T", 2)[0];
        console.log(sys);
        console.log(app);
        if (sys.split('-')[0] == app.split('-')[0]) {
            //console.log(sys.getFullYear()+" == "+app.getFullYear())
            if (sys.split('-')[1] == app.split('-')[1]) {
                //console.log(sys.getMonth()+" == "+app.getMonth())
                if (sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) + 1) {
                    //console.log(sys.getDay()+" == "+app.getDay())
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HomePage.prototype.getNotiffiaction1 = function (date) {
        var sys = ((new Date()).toJSON()).split("T", 2)[0];
        var app = ((new Date(date)).toJSON()).split("T", 2)[0];
        console.log(sys);
        console.log(app);
        if (sys.split('-')[0] == app.split('-')[0]) {
            //console.log(sys.getFullYear()+" == "+app.getFullYear())
            if (sys.split('-')[1] == app.split('-')[1]) {
                //console.log(sys.getMonth()+" == "+app.getMonth())
                if (sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) + 1) {
                    //console.log(sys.getDay()+" == "+app.getDay())
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HomePage.prototype.getNotiffiactionRDVC = function (date) {
        var sys = ((new Date()).toJSON()).split("T", 2)[0];
        var app = ((new Date(date)).toJSON()).split("T", 2)[0];
        console.log(sys);
        console.log(parseInt(app.split('-')[2]) - 1);
        if (sys.split('-')[0] == app.split('-')[0]) {
            //console.log(sys.getFullYear()+" == "+app.getFullYear())
            if (sys.split('-')[1] == app.split('-')[1]) {
                //console.log(sys.getMonth()+" == "+app.getMonth())
                if (sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) - 1) {
                    //console.log(sys.getDay()+" == "+app.getDay())
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HomePage.prototype.getNotiffiactionRDVCh = function (date) {
        var sys = ((new Date()).toJSON()).split("T", 2)[0];
        var app = ((new Date(date)).toJSON()).split("T", 2)[0];
        console.log(sys);
        console.log(app);
        if (sys.split('-')[0] == app.split('-')[0]) {
            //console.log(sys.getFullYear()+" == "+app.getFullYear())
            if (sys.split('-')[1] == app.split('-')[1]) {
                //console.log(sys.getMonth()+" == "+app.getMonth())
                if (sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) - 1) {
                    //console.log(sys.getDay()+" == "+app.getDay())
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_5__["ICoeurServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_5__["ICoeurServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map