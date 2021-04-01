(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medecin-suivi-patient-suivi-patient-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/medecin/suivi-patient/suivi-patient.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medecin/suivi-patient/suivi-patient.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Suivi patient\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"padding: 0px !important;margin-top: 1rem;\">\n\n\n  <ion-row *ngIf=\"isDone\" class=\"container1\" style=\"width: 100%;\">\n  <ion-card style=\" width: 100%;margin: 0;background-color: #008B8B;border-radius: 0;\">\n    <img *ngIf=\"image == null\" style=\"border-radius: 50%; width: 77%;margin-left: 36px;padding: 11px;height: 14rem;\" class=\"logo img-responsive\" src=\"/assets/avatar.png\" alt=\"\" />\n    <img *ngIf=\"image != null\" style=\"border-radius: 50%; width: 77%;margin-left: 36px;padding: 11px;height: 14rem;\" class=\"logo img-responsive\" src=\"https://icoeursam.com/images/uploaded/{{image}}\" alt=\"\" />\n     \n    <ion-item *ngIf=\"isDone\" style=\"min-width: 100%;text-align: center;\">\n      <ion-label>{{patient.prenom}} {{patient.nom}} </ion-label>   \n      \n     </ion-item>  \n     <ion-item *ngIf=\"isDone\" style=\"min-width: 100%;text-align: center;\">\n       <ion-label>GSRH :{{patient.gsrh}} , AGE : {{calculateDate(patient.dateNaissance)}} ans</ion-label>   \n       \n      </ion-item> \n      <ion-item *ngIf=\"isDone && voirplusprofile\" style=\"min-width: 100%;text-align: center;\">\n      <ion-label>téléphone : {{patient.tel1}} </ion-label> \n      \n     </ion-item> \n     <ion-item *ngIf=\"isDone && voirplusprofile\" style=\"min-width: 100%;text-align: center;\">\n     <ion-label>Debut suivi CTCV FANN : {{maladie.debut_suivie_ctcv_annee}} {{maladie.debut_suivie_ctcv_mois}}</ion-label> \n     \n    </ion-item> \n \n     <ion-item *ngIf=\"isDone && voirplusprofile\" style=\"min-width: 100%;text-align: center;\">\n      <ion-label>Origine : {{patient.origine}}</ion-label> \n      \n     </ion-item> \n     <ion-item *ngIf=\"isDone && voirplusprofile\" style=\"min-width: 100%;text-align: center;\">\n      <ion-label>Profession : {{patient.proffession}}</ion-label> \n      \n     </ion-item> \n     <ion-item *ngIf=\"isDone && voirplusprofile\" style=\"min-width: 100%;text-align: center;\">\n      <ion-label>Accompagnant : {{patient.accompagnant}},tel : {{patient.telAccompagnant1}}</ion-label> \n      \n     </ion-item> \n     <ion-item *ngIf=\"isDone && voirplusprofile\" style=\"min-width: 100%;text-align: center;\">\n      <ion-label>Cardiologue : {{patient.cardiologueReferant}}, {{patient.tel1CardiologueRef}} </ion-label> \n      \n     </ion-item> \n     <ion-item style=\"text-align: center;\">\n        <img *ngIf=\"!voirplusprofile\" (click)=\"voirplusprofile = true\" style=\"width: 10%;height: 100%;margin-left: 48%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n       <img *ngIf=\"voirplusprofile\" (click)=\"voirplusprofile = false\" style=\"width: 10%;height: 100%;margin-left: 48%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n     </ion-item>\n    \n  </ion-card>\n</ion-row>\n<ion-row *ngIf=\"isDone\" class=\"container1\" style=\"width: 100%;\">\n  <ion-col>\n    <ion-item >\n      <ion-button style=\"min-width: 100%;\"  (click)=\"loadBlog()\" color=\"primary\">Voir discussion</ion-button>\n  </ion-item>\n  </ion-col>\n</ion-row>\n  <ion-row *ngIf=\"isDone\" class=\"container\" style=\"margin-top: 0.5rem;border: 2px solid #008B8B;\">\n\n    <ion-col style=\" margin: 5px;min-width: 100%;\" >\n  \n    <ion-row >\n      <ion-col style=\"min-width: 100%;\">\n      <ion-item >\n      <ion-label>Geste(s) </ion-label> \n        \n      <img *ngIf=\"!voirplus\" (click)=\"checkvoirplus('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n      <img *ngIf=\"voirplus\" (click)=\"checkvoirplus('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n      </ion-item>\n    \n    </ion-col>  \n    <ion-col *ngIf=\"voirplus\"  style=\"min-width: 100%;\">\n      <ion-item *ngIf=\"maladie.position_mital == 'OUI'\" >\n        <ion-label >Position Mitrale </ion-label> \n        <ion-label >{{maladie.type_postion_mitral}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.position_mital == 'OUI'\" >\n        <ion-label >{{maladie.fabriquant_valve_position_mitrale}} </ion-label> \n        <ion-label >{{maladie.taille_valve_position_mitrale}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.position_mital == 'OUI'\" >\n        <ion-label >Date :</ion-label> \n        <ion-label >{{displayDateNew(maladie.date_valve_position_mitrale)}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.positin_aortique == 'OUI'\" >\n        <ion-label>Position Aortique</ion-label> \n        <ion-label>{{maladie.type_position_aortique}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.positin_aortique == 'OUI'\" >\n        <ion-label>{{maladie.fabriquant_position_aortique}}</ion-label> \n        <ion-label>{{maladie.taille_position_aortique}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.positin_aortique == 'OUI'\" >\n        <ion-label>Date : </ion-label> \n        <ion-label>{{displayDateNew(maladie.date_position_aortique)}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.plastie_tricuspide == 'OUI'\" >\n        <ion-label>Plastie tricuspide</ion-label> \n        <ion-label>{{maladie.type_plastie_tricuspide}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.plastie_tricuspide == 'OUI'\" >\n        <ion-label>{{maladie.type_plastie_tricuspide}}</ion-label> \n        <ion-label>{{displayDateNew(maladie.date_plastie_tricuspide)}}</ion-label> \n      </ion-item >\n      <ion-item *ngIf=\"maladie.autre_gestes != ''\" >\n        <ion-label>Autres gestes</ion-label> \n      </ion-item >\n       <ion-item *ngFor=\"let i of listeAutregeste\" style=\"text-align: center;\" >\n        <ion-label>{{i}}</ion-label> \n      </ion-item >\n      </ion-col>\n    </ion-row> \n    \n     \n  </ion-col>\n \n</ion-row>  \n<ion-row *ngIf=\"isDone\" class=\"container\" style=\"margin-top: 0.5rem;border: 2px solid #008B8B;\">\n\n  <ion-col style=\" margin: 5px;min-width: 100%;\" >\n\n  <ion-row >\n    <ion-col style=\"min-width: 100%;\">\n    <ion-item >\n    <ion-label>Valvulopathie cardiaque </ion-label> \n      \n    <img *ngIf=\"!voirplusValve\" (click)=\"voirplusValve = true\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n    <img *ngIf=\"voirplusValve\" (click)=\"voirplusValve = false\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n    </ion-item>\n  \n  </ion-col>  \n  <ion-col *ngIf=\"voirplusValve\"  style=\"min-width: 100%;\">\n    <ion-item  >\n      <ion-label >IM : </ion-label> \n      <ion-label >{{maladie.im}}</ion-label> \n    </ion-item >\n    <ion-item  >\n      <ion-label >RM : </ion-label> \n      <ion-label >{{maladie.rm}}</ion-label> \n    </ion-item >\n    <ion-item  >\n      <ion-label >IA : </ion-label> \n      <ion-label >{{maladie.ia}}</ion-label> \n    </ion-item >\n    <ion-item  >\n      <ion-label>RA : </ion-label> \n      <ion-label>{{maladie.ra}}</ion-label> \n    </ion-item >\n    <ion-item  >\n      <ion-label>IT : </ion-label> \n      <ion-label>{{maladie.it}}</ion-label> \n    </ion-item >\n    <ion-item  >\n      <ion-label>ACFA : </ion-label> \n      <ion-label>{{maladie.acfa}}</ion-label> \n    </ion-item >\n\n    <ion-item *ngIf=\"maladie.autres_affection != ''\" >\n      <ion-label>Autres affections</ion-label> \n    </ion-item >\n     <ion-item *ngFor=\"let i of listeAutreaffection\" style=\"text-align: center;\" >\n      <ion-label>{{i}}</ion-label> \n    </ion-item >\n    </ion-col>\n  </ion-row> \n  \n   \n</ion-col>\n\n</ion-row> \n\n<ion-row *ngIf='isDone' style=\"border: 2px solid #008B8B;\" class=\"container\">\n    <ion-col style=\"background: #008B8B;\" >\n    <ion-item style=\"text-align: center;min-width: 100%;background: #008B8B;\" *ngIf=\"isDone\">\n      <ion-label style=\"color: white;\"><strong>INR cible  : [ min ={{maladie.inrCibleMin}} , max = {{maladie.inrCibleMax}}]</strong></ion-label>    \n    </ion-item>\n  </ion-col>\n  <ion-col  style=\" margin: 5px;min-width: 100%;\">\n  <ion-item  style=\"text-align: center;\">\n      <ion-label style=\"color: #008B8B;\"><strong>Dernier TP : {{lasttpinr.tp}} / INR : {{lasttpinr.inr}}</strong></ion-label>    \n      \n    <img *ngIf=\"!tpinr\" (click)=\"checktpinr('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n    <img *ngIf=\"tpinr\" (click)=\"checktpinr('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n  </ion-item>\n  </ion-col>\n  <div style=\"width: 100%;\">\n       \n    <ion-grid >\n      <ion-row >\n        <ion-col size=\"4\" style=\"text-align: start;\" >Date</ion-col>\n        <ion-col size=\"4\" style=\"text-align: start;\">TP</ion-col>\n        <ion-col size=\"4\"style=\"text-align: start;\" >INR</ion-col>\n      </ion-row> \n      <div  *ngIf=\"tpinr\">\n      <ion-row  *ngFor=\"let t of inrHistorique;let i = index\" >\n        <ion-col size=\"4\"style=\"text-align: start;\" >{{displayDateNew(t.date_ajout)}}</ion-col>\n        <ion-col size=\"4\" style=\"text-align: start;\" >{{t.tp}}</ion-col>\n        <ion-col size=\"4\" style=\"text-align: start;\">{{t.inr}}</ion-col>\n      </ion-row>\n    </div>\n    </ion-grid>\n  </div>\n</ion-row>  \n<ion-row *ngIf=\"isDone\" style=\"border: 2px solid #008B8B;\" class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  <ion-item style=\"text-align: center;\">\n      <ion-label style=\"color: #008B8B;\"><strong>Prochain TP/INR : </strong>{{displayDateNew(maladie.dateProchainTpInr)}}</ion-label>    \n      \n    <img *ngIf=\"!prochainTPINR\" (click)=\"prochainTPINR = true\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n    <img *ngIf=\"prochainTPINR\" (click)=\"prochainTPINR = false\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n  </ion-item>\n  </ion-col>\n  <ion-row  *ngIf=\"prochainTPINR\" style=\" width: 100%;\"> \n    <ion-item>\n      <ion-label>Modifier la date du prochain TP/INR</ion-label>     \n    </ion-item>       \n      <ion-item>\n        <ion-label>Date prochain TP-INR  </ion-label>     \n        <ion-input  type=\"date\" [(ngModel)]=\"datePrechainTpInr\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"INR\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"datePrechainTpInr != undefined\">\n        <ion-button   size=\"large\" (click)=\"presentLoading()\"  color=\"success\">Valider<ion-icon name=\"checkbox-outline\"></ion-icon></ion-button>    \n      </ion-item>\n  </ion-row>\n</ion-row>\n\n\n  \n\n<ion-row style=\"border: 2px solid #008B8B;\" class=\"container\">\n  <ion-col style=\" margin: 5px;\">\n  <ion-item style=\"text-align: center;min-width: 100%;\">\n      <ion-label style=\"color: #008B8B;\"><strong>Traitement actuel</strong></ion-label>    \n  </ion-item>\n  </ion-col>\n  <ion-row  style=\" width: 100%;\">\n    <ion-row *ngIf=\"isDone\" style=\"border: 2px solid darkred;margin: 0;\" class=\"container\">\n      <ion-col style=\" min-width: 100%;\">\n      <ion-item style=\"text-align: center;\">\n          <ion-label style=\"color: darkred;\"><strong>AVK</strong></ion-label>     \n      </ion-item>\n      </ion-col>\n      <ion-row  >\n        <ion-col>\n          <ion-item >\n            <ion-label >{{avk.nom}}</ion-label>\n         </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item >\n          <ion-label>{{avk.dose}}</ion-label>\n       </ion-item>\n\n      </ion-col> \n      <ion-col>\n        <ion-item >\n          <ion-label>{{avk.heure_prise}}</ion-label>\n      </ion-item>\n      </ion-col>\n\n      <ion-col style=\"min-width: 100% !important;\" *ngIf=\"avk.photo != '' || avk.photo\">\n        <ion-item >\n          <img class=\"logo img-responsive\" src=\"https://icoeursam.com/images/uploaded/{{avk.photo}}\" alt=\"\" />\n      </ion-item>\n\n    </ion-col>\n    \n      <ion-col>\n        <ion-item >\n          <ion-button style=\"min-width: 100%;\"  (click)=\"presentAlert(avk)\" color=\"danger\">Modifier</ion-button>\n      </ion-item>\n      </ion-col>\n        \n      <ion-item *ngIf=\"updateAVK == 'maintenir'\">\n        <ion-label>Posologie maintenue</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"updateAVK == 'changer'\">\n        <ion-label>Posologie</ion-label>\n        <ion-input  [(ngModel)]=\"doseForChange\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez la posologie\"></ion-input>\n        <ion-icon (click)=\"changeDose(avk)\"  name=\"checkbox\"></ion-icon>\n      </ion-item>\n      <ion-item *ngIf=\"updateAVK == 'changerAVK'\">\n        <ion-col>\n          <ion-label>AVK</ion-label>\n          <ion-input  [(ngModel)]=\"avkName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez nom - dose\"></ion-input>\n        </ion-col>      \n        <ion-col>\n          <ion-label>Posologie</ion-label>\n          <ion-input  [(ngModel)]=\"doseForChange\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez la dose\"></ion-input>\n        </ion-col>      \n        <ion-col>\n          <ion-label>Heure prise</ion-label>\n          <ion-input  [(ngModel)]=\"heurePrise\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez la dose\"></ion-input>\n        </ion-col>            \n         <ion-icon (click)=\"changeAVK(avk)\"  name=\"checkbox\"></ion-icon>\n      </ion-item>\n    </ion-row>\n      \n      </ion-row>   \n      <ion-row *ngIf=\"isDone\" style=\"border: 2px solid #008B8B;margin-bottom: 2px;\" class=\"container\">\n        <ion-col style=\" margin: 5px;\">\n        <ion-item style=\"text-align: center;\">\n            <ion-label style=\"color: #008B8B;\"><strong>Historique AVK</strong></ion-label>    \n            \n          <img *ngIf=\"!checkAVK\" (click)=\"checkSOusAVK('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n          <img *ngIf=\"checkAVK\" (click)=\"checkSOusAVK('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n      \n        </ion-item>\n        </ion-col>\n        <ion-row  style=\" width: 100%;\">        \n            <ion-grid >\n              <ion-row >\n                <ion-col size=\"3.5\" style=\"text-align: start;\" >Date</ion-col>\n                <ion-col size=\"4.3\" style=\"text-align: start;\">AVK</ion-col>\n                <ion-col size=\"2.5\"style=\"text-align: start;\" >Dose</ion-col>\n                <ion-col size=\"1.7\" style=\"text-align: start;\">INR</ion-col>\n              </ion-row> \n              <div  *ngIf=\"checkAVK\">\n              <ion-row  *ngFor=\"let t of avkHistorique;let i = index\" >\n                <ion-col size=\"3.5\"style=\"text-align: start;\" >{{displayDateNew(t.dateCreate)}}</ion-col>\n                <ion-col size=\"4.3\" style=\"text-align: start;\" >{{t.nom}}</ion-col>\n                <ion-col size=\"2.5\"style=\"text-align: start;\" >{{t.dose}}</ion-col>\n                <ion-col size=\"1.7\" style=\"text-align: start;\">{{t.inr}}</ion-col>\n              </ion-row>\n            </div>\n            </ion-grid>\n      \n        </ion-row>\n      </ion-row> \n      <ion-row *ngIf=\"isDone\" style=\"border: 2px solid darkred;margin: 0;\" class=\"container\">\n        <ion-col style=\" margin: 5px;min-width: 100%;\">\n        <ion-item style=\"text-align: center;\">\n            <ion-label style=\"color: darkred;\"><strong>HEPARINE</strong></ion-label>     \n        </ion-item>\n        </ion-col>\n        <ion-row  style=\" margin: 5px;\">\n            <ion-col>\n              <ion-item >\n                <ion-label >{{heparine.nom}}</ion-label>\n            </ion-item>\n  \n          </ion-col>\n          <ion-col>\n            <ion-item >\n              <ion-label>{{heparine.dose}}</ion-label>\n          </ion-item>\n  \n        </ion-col> \n        <ion-col>\n          <ion-item >\n            <ion-label>{{heparine.heure_prise}}</ion-label>\n        </ion-item>\n  \n      </ion-col>\n        <ion-col>\n          <ion-item >\n            <ion-label>du {{displayDateNew(heparine.date_debut_prise)}} au {{displayDateNew(heparine.date_fin_prise)}}</ion-label>\n        </ion-item>\n\n      </ion-col>\n      \n          <ion-col style=\"min-width: 100% !important;\" *ngIf=\"heparine.photo != '' || heparine.photo\">\n            <ion-item >\n              <img class=\"logo img-responsive\" src=\"https://icoeursam.com/images/uploaded/{{heparine.photo}}\" alt=\"\" />\n          </ion-item>\n\n        </ion-col>\n        <ion-item style=\"min-width: 100%;background-color: red;text-align: center;\" *ngIf=\"heparine.etat == 1\">\n           <ion-label style=\"background-color: red;\"><p style=\"color: white;\">Heparine Arrêté</p></ion-label>\n        </ion-item>\n        \n        <ion-col>\n          <ion-item >\n            <ion-button style=\"min-width: 100%;\"  (click)=\"presentAlert1(heparine)\" color=\"danger\">Modifier</ion-button>\n        </ion-item>\n        </ion-col>\n        <ion-item *ngIf=\"updateHeparine == 'maintenir'\">\n          <ion-label>Posologie maintenue</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"updateHeparine == 'changer'\">\n          <ion-label>Posologie</ion-label>\n          <ion-input  [(ngModel)]=\"doseForChangeHeparine\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez la dose\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"updateHeparine == 'changer'\">\n          <ion-label>Date début</ion-label>\n          <ion-input type=\"date\" [(ngModel)]=\"date_debut_h\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez la dose\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"updateHeparine == 'changer'\">\n          <ion-label>Date Fin</ion-label>\n          <ion-input type=\"date\" [(ngModel)]=\"date_fin_h\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisissez la dose\"></ion-input>\n        </ion-item>\n        \n        <ion-item *ngIf=\"updateHeparine == 'changer'\" style=\"text-align: center;\">\n          <ion-button  (click)=\"changeDoseHaparine(heparine)\" [disabled]=\"!doseForChangeHeparine || doseForChangeHeparine == ''\" color=\"success\"><ion-icon   name=\"checkbox\"> </ion-icon>Valider </ion-button>\n        </ion-item>\n        <ion-item *ngIf=\"updateHeparine == 'stopHeparine'\">\n          <ion-label>Vous voullez arretés l'héparine</ion-label>\n          <ion-icon (click)=\"stopHeparine(heparine)\"  name=\"checkbox\"></ion-icon>\n        </ion-item>\n      </ion-row>\n          \n    </ion-row>  \n    <ion-row *ngIf=\"isDone\" style=\"border: 2px solid #008B8B;margin-bottom: 2px;\" class=\"container\">\n      <ion-col style=\" margin: 5px;\">\n      <ion-item style=\"text-align: center;min-width: 100%;\">\n          <ion-label style=\"color: #008B8B;\"><strong>Historique Heparine (HBPM)</strong></ion-label>    \n          \n        <img *ngIf=\"!Accidant\" (click)=\"checkAccidant('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n        <img *ngIf=\"Accidant\" (click)=\"checkAccidant('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n      </ion-item>\n      </ion-col>\n      <ion-row  style=\" width: 100%;\">        \n          <ion-grid >\n            <ion-row >\n              <ion-col size=\"4.3\" style=\"text-align: start;\" >DATE</ion-col>\n              <ion-col size=\"4\" style=\"text-align: start;\">HEPARINE</ion-col>\n              <ion-col size=\"2\"style=\"text-align: start;\" >Dose</ion-col>\n              <ion-col size=\"1.7\" style=\"text-align: start;\">INR</ion-col>\n            </ion-row> \n            <div  *ngIf=\"Accidant\">\n            <ion-row  *ngFor=\"let t of heparineHistorique;let i = index\" (click)=\"showDetail(t)\" >\n              <ion-col size=\"4.3\"style=\"text-align: start;\" >{{displayDateNew(t.dateCreate)}}</ion-col>\n              <ion-col size=\"4\" style=\"text-align: start;\" >{{t.nom}}</ion-col>\n              <ion-col size=\"2\"style=\"text-align: start;\" >{{t.dose}}</ion-col>\n              <ion-col size=\"1.7\" style=\"text-align: start;\">{{t.inr}}</ion-col>\n            </ion-row>\n          </div>\n          </ion-grid>\n      </ion-row>\n    </ion-row>    \n  </ion-row>\n</ion-row> \n\n \n<ion-row style=\"border: 2px solid #008B8B;\" class=\"container\">\n  <ion-col style=\"background: #008B8B;\" (click)=\"addTraitement()\">\n    <ion-item style=\"text-align: center;min-width: 100%;background: #008B8B;\" (click)=\"addTraitement()\">\n      <ion-label style=\"color: white;\"><strong>Ajouter un Traitement </strong></ion-label>    \n    </ion-item>\n  </ion-col>\n  <ion-col style=\" margin: 5px;\">\n \n  <ion-item style=\"text-align: center;min-width: 100%;\">\n      <ion-label style=\"color: #008B8B;\"><strong>Autre(s) traitement(s)</strong></ion-label>    \n      \n    <img *ngIf=\"!traitement\" (click)=\"checkAutreTraitement('oui')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-down.svg\" alt=\"\">\n    <img *ngIf=\"traitement\" (click)=\"checkAutreTraitement('non')\" style=\"width: 10%;height: 100%;\" src=\"/assets/chevron-up.svg\" alt=\"\">\n\n  </ion-item>\n  \n  </ion-col>\n  <ion-row  style=\" width: 100%;\">        \n      <ion-grid >\n        <ion-row >\n          <ion-col size=\"3\" style=\"text-align: start;\" >Date</ion-col>\n          <ion-col size=\"3\" style=\"text-align: start;\">médicament</ion-col>\n          <ion-col size=\"3\"style=\"text-align: start;\" >DOSE</ion-col>\n          <ion-col size=\"3\" style=\"text-align: start;\">Posologie</ion-col>\n        </ion-row> \n        <div  *ngIf=\"traitement\">\n        <ion-row  *ngFor=\"let t of medicamentHistorique;let i = index\" >\n          <ion-col size=\"3\"style=\"text-align: start;\" >{{displayDateNew(t.dateCreate)}}</ion-col>\n          <ion-col size=\"3\" style=\"text-align: start;\" >{{t.nom}}</ion-col>\n          <ion-col size=\"3\"style=\"text-align: start;\" >{{t.dose}}</ion-col>\n          <ion-col size=\"3\" style=\"text-align: start;\">{{t.posologie}}</ion-col>\n        </ion-row>\n      </div>\n      </ion-grid>\n\n  </ion-row>\n</ion-row>  \n<ion-row style=\"border: 2px solid #008B8B;\" class=\"container\">\n  <ion-col style=\" margin: 5px;min-width: 100%;\">\n  <ion-item style=\"text-align: center;\">\n      <ion-label style=\"color: #008B8B;\"><strong>Courbe INR</strong></ion-label>    \n    \n  </ion-item>\n  </ion-col>\n\n  <div style=\"min-width: 100%;\">\n    <canvas  #barChart></canvas>\n  </div>\n</ion-row>  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/medecin/suivi-patient/suivi-patient-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/medecin/suivi-patient/suivi-patient-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SuiviPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviPatientPageRoutingModule", function() { return SuiviPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suivi_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suivi-patient.page */ "./src/app/medecin/suivi-patient/suivi-patient.page.ts");




var routes = [
    {
        path: '',
        component: _suivi_patient_page__WEBPACK_IMPORTED_MODULE_3__["SuiviPatientPage"]
    }
];
var SuiviPatientPageRoutingModule = /** @class */ (function () {
    function SuiviPatientPageRoutingModule() {
    }
    SuiviPatientPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SuiviPatientPageRoutingModule);
    return SuiviPatientPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/medecin/suivi-patient/suivi-patient.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/medecin/suivi-patient/suivi-patient.module.ts ***!
  \***************************************************************/
/*! exports provided: SuiviPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviPatientPageModule", function() { return SuiviPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _suivi_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suivi-patient-routing.module */ "./src/app/medecin/suivi-patient/suivi-patient-routing.module.ts");
/* harmony import */ var _suivi_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suivi-patient.page */ "./src/app/medecin/suivi-patient/suivi-patient.page.ts");







var SuiviPatientPageModule = /** @class */ (function () {
    function SuiviPatientPageModule() {
    }
    SuiviPatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _suivi_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuiviPatientPageRoutingModule"]
            ],
            declarations: [_suivi_patient_page__WEBPACK_IMPORTED_MODULE_6__["SuiviPatientPage"]]
        })
    ], SuiviPatientPageModule);
    return SuiviPatientPageModule;
}());



/***/ }),

/***/ "./src/app/medecin/suivi-patient/suivi-patient.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/medecin/suivi-patient/suivi-patient.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.myCard {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  border-radius: 8px !important;\n  -webkit-margin-start: 6px !important;\n  -webkit-margin-end: 5px !important;\n}\n\nspan {\n  font-size: 1.5rem;\n  margin: 5px;\n}\n\n.rowHome {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: white;\n}\n\nion-toolbar {\n  --background: url('topBarMed.JPG');\n  --color: white ;\n  --box-shadow:0 !important;\n}\n\n.container {\n  margin-top: 5px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.container1 {\n  margin: 0px;\n  background: #fff;\n}\n\nion-label {\n  color: #008B8B !important;\n}\n\nion-col {\n  color: #008B8B !important;\n}\n\n@-webkit-keyframes blinking {\n  0% {\n    background-color: #ff3d50;\n    border: 5px solid #871924;\n  }\n  /* YOU CAN ADD MORE COLORS IN THE KEYFRAMES IF YOU WANT\n  50%{\n    background-color: #55d66b;\n    border: 5px solid #126620;\n  }\n  */\n  100% {\n    background-color: #222291;\n    border: 5px solid #6565f2;\n  }\n}\n\n@keyframes blinking {\n  0% {\n    background-color: #ff3d50;\n    border: 5px solid #871924;\n  }\n  /* YOU CAN ADD MORE COLORS IN THE KEYFRAMES IF YOU WANT\n  50%{\n    background-color: #55d66b;\n    border: 5px solid #126620;\n  }\n  */\n  100% {\n    background-color: #222291;\n    border: 5px solid #6565f2;\n  }\n}\n\n#demo {\n  width: 300px;\n  height: 300px;\n  /* NAME | TIME | ITERATION */\n  -webkit-animation: blinking 1s infinite;\n          animation: blinking 1s infinite;\n}\n\nion-label, ion-col {\n  color: black !important;\n}\n\n/*ion-content{\n  --background: url(\"../../../assets/accueil.png\") no-repeat center center / cover;\n\n}\nion-row{\n  opacity: 0.8;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkZWNpbi9zdWl2aS1wYXRpZW50L0M6XFxwcm9qZXRJb25pY1xcaV9jb2V1ci9zcmNcXGFwcFxcbWVkZWNpblxcc3VpdmktcGF0aWVudFxcc3VpdmktcGF0aWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lZGVjaW4vc3VpdmktcGF0aWVudC9zdWl2aS1wYXRpZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUVFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUdGLGdCQUFBO0VBQ0EscUhBQUE7QUNHRjs7QUREQTtFQUNJLFdBQUE7RUFHRixnQkFBQTtBQ0VGOztBRENFO0VBQ0kseUJBQUE7QUNFTjs7QURBRTtFQUNFLHlCQUFBO0FDR0o7O0FEREE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUNJRjtFREZBOzs7OztHQUFBO0VBTUE7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VDSUY7QUFDRjs7QURsQkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUNJRjtFREZBOzs7OztHQUFBO0VBTUE7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FDSUY7O0FERkE7RUFDRSx1QkFBQTtBQ0tGOztBRERBOzs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL21lZGVjaW4vc3VpdmktcGF0aWVudC9zdWl2aS1wYXRpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubXlDYXJkIHtcclxuICAgIC8vbWF4LWhlaWdodDozMiUgIWltcG9ydGFudCA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDo2cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDo1cHggIWltcG9ydGFudFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLnJvd0hvbWV7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdG9wQmFyTWVkLkpQR1wiKSA7XHJcbiAgICAtLWNvbG9yIDogd2hpdGUgO1xyXG4gICAgLS1ib3gtc2hhZG93OjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgLy8gcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuLmNvbnRhaW5lcjF7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgLy8gcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy9ib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgICAgY29sb3I6IzAwOEI4QiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tY29se1xyXG4gICAgY29sb3I6IzAwOEI4QiAhaW1wb3J0YW50O1xyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmtpbmcge1xyXG4gIDAle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2Q1MDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM4NzE5MjQ7XHJcbiAgfVxyXG4gIC8qIFlPVSBDQU4gQUREIE1PUkUgQ09MT1JTIElOIFRIRSBLRVlGUkFNRVMgSUYgWU9VIFdBTlRcclxuICA1MCV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVkNjZiO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzEyNjYyMDtcclxuICB9XHJcbiAgKi9cclxuICAxMDAle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjI5MTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM2NTY1ZjI7XHJcbiAgfVxyXG59XHJcbiNkZW1ve1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIC8qIE5BTUUgfCBUSU1FIHwgSVRFUkFUSU9OICovXHJcbiAgYW5pbWF0aW9uOiBibGlua2luZyAxcyBpbmZpbml0ZTtcclxufVxyXG5pb24tbGFiZWwsIGlvbi1jb2x7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2FjY3VlaWwucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgXHJcbn1cclxuaW9uLXJvd3tcclxuICBvcGFjaXR5OiAwLjg7XHJcbn0qL1xyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5teUNhcmQge1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LW1hcmdpbi1zdGFydDogNnB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbWFyZ2luLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5yb3dIb21lIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdG9wQmFyTWVkLkpQR1wiKSA7XG4gIC0tY29sb3I6IHdoaXRlIDtcbiAgLS1ib3gtc2hhZG93OjAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY29udGFpbmVyMSB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzAwOEI4QiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgY29sb3I6ICMwMDhCOEIgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBibGlua2luZyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZDUwO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICM4NzE5MjQ7XG4gIH1cbiAgLyogWU9VIENBTiBBREQgTU9SRSBDT0xPUlMgSU4gVEhFIEtFWUZSQU1FUyBJRiBZT1UgV0FOVFxuICA1MCV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZDY2YjtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMTI2NjIwO1xuICB9XG4gICovXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyOTE7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzY1NjVmMjtcbiAgfVxufVxuI2RlbW8ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIC8qIE5BTUUgfCBUSU1FIHwgSVRFUkFUSU9OICovXG4gIGFuaW1hdGlvbjogYmxpbmtpbmcgMXMgaW5maW5pdGU7XG59XG5cbmlvbi1sYWJlbCwgaW9uLWNvbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vKmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hY2N1ZWlsLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuXG59XG5pb24tcm93e1xuICBvcGFjaXR5OiAwLjg7XG59Ki8iXX0= */");

/***/ }),

/***/ "./src/app/medecin/suivi-patient/suivi-patient.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/medecin/suivi-patient/suivi-patient.page.ts ***!
  \*************************************************************/
/*! exports provided: SuiviPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviPatientPage", function() { return SuiviPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/i-coeur-service.service */ "./src/app/services/i-coeur-service.service.ts");






var SuiviPatientPage = /** @class */ (function () {
    function SuiviPatientPage(router, loadingController, alertController, _serviceIcoeur) {
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this._serviceIcoeur = _serviceIcoeur;
        this.voirplus = false;
        this.voirplusprofile = false;
        this.voirplusValve = false;
        this.checkAVK = false;
        this.Accidant = false;
        this.courbe = false;
        this.traitement = false;
        this.tpinr = false;
        this.datas = [];
        this.dates = [];
        this.avkHistorique = [];
        this.heparineHistorique = [];
        this.medicamentHistorique = [];
        this.inrHistorique = [];
        this.prochainTPINR = false;
        this.avkActuel = { avk: 'Sintron 5mg', dose: '1x2/j' };
        this.heparineActuel = { heparine: 'Novex', dose: '1x2/j', etat: 1 };
        this.isModify = false;
        this.isDone = false;
        this.image = null;
        this.listeAutregeste = [];
        this.listeAutreaffection = [];
    }
    SuiviPatientPage.prototype.changeDose = function (arg) {
        var _this = this;
        this._serviceIcoeur.UpdateAVK({ nom: arg.nom, heure_prise: arg.heure_prise, dose: this.doseForChange, id: arg.id }).then(function (res) {
            if (res['status'] == true) {
                console.log('UpdateAVK done !!');
                _this._serviceIcoeur.getLastTpInr({ patient: arg.patient }).then(function (res) {
                    if (res['status'] == true) {
                        console.log('getLastTpInr done !!');
                        var rep = res['Message'];
                        _this._serviceIcoeur.createHistorique({ type: "avk", nom: arg.nom, heure_prise: arg.heure_prise, dose: _this.doseForChange, inr: rep.inr, patient: arg.patient, medecin: arg.medecin }).then(function (res) {
                            console.log(res);
                            /* this._serviceIcoeur.getAVK(localStorage.getItem('idPatient')).then(res=>{
                               if(res['status'] == true){
                                 this.avk = res['Massage'];
                                 this.isModify = true;
                               }
                             })*/
                        });
                    }
                    else {
                        console.log('getLastTpInr not done !!');
                    }
                });
            }
            else {
                console.log('UpdateAVK not done !!');
            }
        });
        this.avk.dose = this.doseForChange;
        this.updateAVK = "";
    };
    SuiviPatientPage.prototype.changeAVK = function (arg) {
        var _this = this;
        this._serviceIcoeur.UpdateAVK({ nom: this.avkName, heure_prise: this.heurePrise, dose: this.doseForChange, id: arg.id }).then(function (res) {
            if (res['status'] == true) {
                _this._serviceIcoeur.getLastTpInr({ patient: arg.patient }).then(function (res) {
                    if (res['status'] == true) {
                        var rep = res['Message'];
                        _this._serviceIcoeur.createHistorique({ type: "avk", nom: arg.nom, heure_prise: arg.heure_prise, dose: _this.doseForChange, inr: rep.inr, patient: arg.patient, medecin: arg.medecin }).then(function (res) {
                            console.log(res);
                            if (res['status'] == true) {
                                _this.avk.nom = _this.avkName;
                                _this.avk.heure_prise = _this.heurePrise;
                                _this.avk.dose = _this.doseForChange;
                                _this.updateAVK = "";
                            }
                            /* this._serviceIcoeur.getAVK(localStorage.getItem('idPatient')).then(res=>{
                               if(res['status'] == true){
                                 this.avk = res['Massage'];
                                 this.isModify = true;
                               }
                             })*/
                        });
                    }
                });
            }
        });
    };
    SuiviPatientPage.prototype.changeDoseHaparine = function (arg) {
        var _this = this;
        console.log(arg);
        this._serviceIcoeur.UpdateHeparine({ nom: arg.nom, heure_prise: arg.heure_prise, dose: this.doseForChangeHeparine, date_debut_prise: this.date_debut_h, date_fin_prise: this.date_fin_h, id: arg.id }).then(function (res) {
            if (res['status'] == true) {
                console.log(res);
                _this._serviceIcoeur.getLastTpInr({ patient: arg.patient }).then(function (res) {
                    if (res['status'] == true) {
                        var rep = res['Message'];
                        _this._serviceIcoeur.createHistoriqueHeparine({ type: "heparine", nom: arg.nom, heure_prise: arg.heure_prise, dose: _this.doseForChangeHeparine, inr: rep.inr, date_debut_prise: arg.date_debut_prise, date_fin_prise: arg.date_fin_prise, patient: arg.patient, medecin: arg.medecin }).then(function (res) {
                            console.log(res);
                            if (res['status'] == true) {
                                _this.heparine.dose = _this.doseForChangeHeparine;
                                _this.updateHeparine = "";
                            }
                            /* this._serviceIcoeur.getAVK(localStorage.getItem('idPatient')).then(res=>{
                               if(res['status'] == true){
                                 this.avk = res['Massage'];
                                 this.isModify = true;
                               }
                             })*/
                        });
                    }
                });
            }
        });
    };
    SuiviPatientPage.prototype.stopHeparine = function (arg) {
        var _this = this;
        this._serviceIcoeur.stopHeparine(arg.id).then(function (res) {
            if (res['status'] == true) {
                _this.heparine.etat = 0;
                _this.updateHeparine = "";
            }
        });
    };
    SuiviPatientPage.prototype.checktpinr = function (arg) {
        if (arg == "oui") {
            this.tpinr = true;
        }
        if (arg == 'non') {
            this.tpinr = false;
        }
    };
    SuiviPatientPage.prototype.checkAutreTraitement = function (arg) {
        if (arg == "oui") {
            this.traitement = true;
        }
        if (arg == 'non') {
            this.traitement = false;
        }
    };
    SuiviPatientPage.prototype.checkcourbe = function (arg) {
        if (arg == "oui") {
            this.courbe = true;
        }
        if (arg == 'non') {
            this.courbe = false;
        }
    };
    SuiviPatientPage.prototype.checkAccidant = function (arg) {
        if (arg == "oui") {
            this.Accidant = true;
        }
        if (arg == 'non') {
            this.Accidant = false;
        }
    };
    SuiviPatientPage.prototype.checkSOusAVK = function (rep) {
        if (rep == 'oui') {
            this.checkAVK = true;
        }
        if (rep == "non") {
            this.checkAVK = false;
        }
    };
    SuiviPatientPage.prototype.checkvoirplus = function (arg) {
        if (arg == "oui") {
            this.voirplus = true;
        }
        if (arg == 'non') {
            this.voirplus = false;
        }
    };
    SuiviPatientPage.prototype.ionViewDidEnter = function () {
        this.createBarChart();
    };
    SuiviPatientPage.prototype.displayDate = function (date) {
        return new Date(date).toLocaleString().split('à')[0];
    };
    SuiviPatientPage.prototype.createBarChart = function () {
        var _this = this;
        this._serviceIcoeur.getChartTpInr(localStorage.getItem('idPatient')).then(function (res) {
            if (res['status'] == true) {
                var rep = res['Message'];
                console.log(rep);
                rep.reverse();
                for (var _i = 0, rep_1 = rep; _i < rep_1.length; _i++) {
                    var i = rep_1[_i];
                    _this.dates.push(_this.displayDate(i.date_ajout));
                    _this.datas.push(i.inr);
                }
                _this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](_this.barChart.nativeElement, {
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
    SuiviPatientPage.prototype.showDetail = function (arg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(arg);
                        return [4 /*yield*/, this.alertController.create({
                                header: arg.nom + " " + arg.dose,
                                message: '<ul class="list-group"><li class="list-group-item"><label class="control-label">Début prise : ' + this.displayDate(arg.date_debut_prise) + '</label></li><li class="list-group-item"><label class="control-label">Fin prise : ' + this.displayDate(arg.date_fin_prise) + '</label></li></ul>',
                                buttons: [{
                                        text: 'Valider',
                                        cssClass: 'success',
                                        handler: function (data) {
                                            console.log("clicked -> " + data);
                                            //this.updateAVK = data;
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
    SuiviPatientPage.prototype.presentAlert = function (arg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: arg.nom + " " + arg.dose,
                            inputs: [
                                {
                                    name: 'maintenir',
                                    label: 'Maintenir la même posologie d’AVK',
                                    type: "radio",
                                    value: 'maintenir'
                                },
                                {
                                    name: 'changer',
                                    label: 'Changer la posologie',
                                    type: "radio",
                                    value: 'changer'
                                },
                                {
                                    name: 'changerAVK',
                                    label: 'Changer l\'AVK',
                                    type: "radio",
                                    value: 'changerAVK'
                                }
                            ],
                            buttons: [{
                                    text: 'Valider',
                                    cssClass: 'success',
                                    handler: function (data) {
                                        if (data == 'maintenir') {
                                            _this._serviceIcoeur.UpdateAVK({ nom: arg.nom, heure_prise: arg.heure_prise, dose: arg.dose, id: arg.id }).then(function (res) {
                                                if (res['status']) {
                                                    _this._serviceIcoeur.getLastTpInr({ patient: arg.patient }).then(function (res) {
                                                        if (res['status'] == true) {
                                                            var rep = res['Message'];
                                                            _this._serviceIcoeur.createHistorique({ type: "avk", nom: arg.nom, heure_prise: arg.heure_prise, dose: arg.dose, inr: rep.inr, patient: arg.patient, medecin: arg.medecin }).then(function (res) {
                                                                console.log(res);
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                        console.log("clicked -> " + data);
                                        _this.updateAVK = data;
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
    SuiviPatientPage.prototype.presentAlert1 = function (arg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: arg.nom + " " + arg.dose,
                            inputs: [
                                {
                                    name: 'maintenir',
                                    label: 'Maintenir la même posologie d’heparine',
                                    type: "radio",
                                    value: "maintenir"
                                },
                                {
                                    name: 'changer',
                                    label: 'Changer la posologie',
                                    type: "radio",
                                    value: "changer"
                                },
                                {
                                    name: 'stopHeparine',
                                    label: 'Arrêt Heparine',
                                    type: "radio",
                                    value: "stopHeparine"
                                },
                            ],
                            buttons: [{
                                    text: 'Valider',
                                    cssClass: 'success',
                                    handler: function (data) {
                                        //this.valider()
                                        console.log(arg.date_fin_prise);
                                        console.log(new Date(arg.date_fin_prise).toJSON());
                                        console.log(new Date(arg.date_debut_prise).toJSON().split('T')[0]);
                                        _this.date_debut_h = new Date(arg.date_debut_prise).toJSON().split('T')[0];
                                        _this.date_fin_h = new Date(arg.date_fin_prise).toJSON().split('T')[0];
                                        if (data == 'maintenir') {
                                            _this._serviceIcoeur.UpdateHeparine({ nom: arg.nom, heure_prise: arg.heure_prise, dose: arg.dose, id: arg.id }).then(function (res) {
                                                if (res['status']) {
                                                    _this._serviceIcoeur.getLastTpInr({ patient: arg.patient }).then(function (res) {
                                                        if (res['status'] == true) {
                                                            var rep = res['Message'];
                                                            _this._serviceIcoeur.createHistoriqueHeparine({ type: "Heparine", nom: arg.nom, heure_prise: arg.heure_prise, dose: arg.dose, inr: rep.inr, date_debut_prise: arg.date_debut_prise, date_fin_prise: arg.date_fin_prise, patient: arg.patient, medecin: arg.medecin }).then(function (res) {
                                                                console.log(res);
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                        _this.updateHeparine = data;
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
    SuiviPatientPage.prototype.calculateDate = function (dateNaissance) {
        //console.log(dateNaissance)
        var diff = Date.now() - new Date(dateNaissance).getTime();
        var age_dt = new Date(diff);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    };
    SuiviPatientPage.prototype.addTraitement = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ajout Traitement',
                            inputs: [
                                {
                                    name: 'nom',
                                    placeholder: 'Nom'
                                },
                                {
                                    name: 'dose',
                                    placeholder: 'Dose',
                                },
                                {
                                    name: 'posologie',
                                    placeholder: 'Posologie',
                                }
                            ],
                            buttons: [{
                                    text: 'Valider',
                                    role: 'cancel',
                                    cssClass: 'success',
                                    handler: function (data) {
                                        _this.insertTraitement(data);
                                        //this.valider()
                                        // this.gestesliste.gestesliste = this.gesteAutre
                                        //this.router.navigate(['/login']);
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
    SuiviPatientPage.prototype.insertTraitement = function (data) {
        var _this = this;
        this._serviceIcoeur.addTraitement({ nom: data.nom, dose: data.dose, posologie: data.posologie, patient: localStorage.getItem('idPatient'), medecin: JSON.parse(localStorage.getItem('currentUser')).id }).then(function (res) {
            if (res['status'] == true) {
                //this.ConfirmAlert(res['Message']); 
                _this._serviceIcoeur.getAllmedicament(localStorage.getItem('idPatient')).then(function (res) {
                    if (res['status'] == true) {
                        _this.medicamentHistorique = res['Message'];
                        // alert.dismiss();
                    }
                    else {
                        //alert.dismiss();
                    }
                });
            }
        });
    };
    SuiviPatientPage.prototype.ConfirmAlert = function (arg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Message',
                            //subHeader: 'Subtitle',
                            //subHeader: arg,
                            message: "<label style='color:green;'>" + arg + "</label>",
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
    //updateDateProchainTPINT
    SuiviPatientPage.prototype.presentLoading = function () {
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
                            console.log({ dateProChainTpInr: _this.datePrechainTpInr, patient: localStorage.getItem('idPatient') });
                            var param = { dateProChainTpInr: _this.datePrechainTpInr, patient: localStorage.getItem('idPatient') };
                            _this._serviceIcoeur.updateDateProchainTPINT(JSON.stringify(param)).then(function (res) {
                                console.log(res);
                                if (res['status'] == true) {
                                    loading.dismiss();
                                    _this.maladie.dateProchainTpInr = _this.datePrechainTpInr;
                                    _this.pinErrorAlert("DAte prochain TP/INR changé");
                                    _this.prochainTPINR = false;
                                }
                                else {
                                    loading.dismiss();
                                    _this.pinErrorAlert("DAte prochain TP/INR erreur non changé");
                                }
                            });
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    SuiviPatientPage.prototype.pinErrorAlert = function (arg) {
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
    SuiviPatientPage.prototype.displayDateNew = function (date) {
        var frdate = new Date(date).toLocaleString().split(' ')[0];
        return frdate;
    };
    SuiviPatientPage.prototype.loadBlog = function () {
        this.router.navigate(['/blog']);
    };
    SuiviPatientPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem('idPatient'));
        var idPatient = localStorage.getItem('idPatient');
        this._serviceIcoeur.getPatient(idPatient).then(function (res) {
            if (res['Message']) {
                _this.patient = res['Message'];
                _this.image = _this.patient.image;
                console.log(_this.image);
                _this._serviceIcoeur.getMaladie(idPatient).then(function (res) {
                    if (res['Message']) {
                        console.log(res['Message']);
                        _this.maladie = res['Message'];
                        _this.listeAutregeste = _this.maladie.autre_gestes.split(',');
                        _this.listeAutreaffection = _this.maladie.autres_affection.split(',');
                        _this._serviceIcoeur.getAVK(idPatient).then(function (res) {
                            if (res['Message']) {
                                _this.avk = res['Message'];
                                _this._serviceIcoeur.getHeparine(idPatient).then(function (res) {
                                    console.log(res['Message']);
                                    if (res['Message']) {
                                        _this.heparine = res['Message'];
                                        _this._serviceIcoeur.getAllAVK(idPatient).then(function (res) {
                                            _this.avkHistorique = res['Message'];
                                            _this._serviceIcoeur.getAllHeparine(idPatient).then(function (res) {
                                                _this.heparineHistorique = res['Message'];
                                                _this._serviceIcoeur.getAllmedicament(idPatient).then(function (res) {
                                                    _this.medicamentHistorique = res['Message'];
                                                    _this._serviceIcoeur.getAllTpInr(idPatient).then(function (res) {
                                                        _this.inrHistorique = res['Message'];
                                                        _this._serviceIcoeur.getLastTpInr({ patient: idPatient }).then(function (res) {
                                                            _this.lasttpinr = res['Message'];
                                                            console.log(_this.lasttpinr.tp);
                                                            console.log(res['Message']);
                                                            console.log(_this.avk);
                                                            console.log(_this.heparine);
                                                            _this.isDone = true;
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    };
    SuiviPatientPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_5__["ICoeurServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SuiviPatientPage.prototype, "barChart", void 0);
    SuiviPatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suivi-patient',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./suivi-patient.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/medecin/suivi-patient/suivi-patient.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./suivi-patient.page.scss */ "./src/app/medecin/suivi-patient/suivi-patient.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_i_coeur_service_service__WEBPACK_IMPORTED_MODULE_5__["ICoeurServiceService"]])
    ], SuiviPatientPage);
    return SuiviPatientPage;
}());



/***/ })

}]);
//# sourceMappingURL=medecin-suivi-patient-suivi-patient-module.js.map