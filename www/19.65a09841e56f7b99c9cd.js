(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{bHo2:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),o=e("pMnS"),i=e("oBZk"),r=e("ZZ/e"),a=e("Ip0R"),s=e("gIcY"),c=e("EbUN"),d=e("YZm+"),p=function(){function l(l,n){this._serviceIcoeur=l,this.router=n,this.errorMessage=0,this.etapDisplay=1,this.itemChecked=!1}return l.prototype.approuved=function(){this.itemChecked=!this.itemChecked},l.prototype.valider=function(){var l=this;this.newPassword==this.confirmNewPassword?this._serviceIcoeur.firstLog({newPassword:d(this.newPassword),id:JSON.parse(localStorage.getItem("currentUser")).id}).then((function(n){1==n.status?(l.router.navigate(["/login"]),localStorage.clear()):alert("Mot de passe incorrect !!!")})):alert("les mots de passe sont différents")},l.prototype.ngOnInit=function(){},l}(),b=e("ZYCi"),g=u.zb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.myCard[_ngcontent-%COMP%]{margin-top:5px!important;margin-bottom:5px!important;border-radius:8px!important;-webkit-margin-start:6px!important;-webkit-margin-end:5px!important}span[_ngcontent-%COMP%]{font-size:1.2rem;margin:3px}.rowHome[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);margin:10px 5px;background-color:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:url('topBar.aad7ed20f653134f5aeb.JPG');--color:white;--box-shadow:0!important}ion-content[_ngcontent-%COMP%]{--background:url('logoLogin.9d489c309013fa7ebbdc.jpeg');background-size:cover}.container[_ngcontent-%COMP%]{margin:5px;background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}ion-row[_ngcontent-%COMP%]{background:0 0!important}"]],data:{}});function m(l){return u.Ub(0,[(l()(),u.Bb(0,0,null,null,5,"ion-item",[["style","background-color: #ebcccc;;"]],null,null,null,i.T,i.q)),u.Ab(1,49152,null,0,r.G,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,1,"ion-icon",[["name","close-circle-outline"],["style","font-size: 45px;color:#a94442"]],null,null,null,i.R,i.o)),u.Ab(3,49152,null,0,r.B,[u.j,u.p,u.F],{name:[0,"name"]},null),(l()(),u.Bb(4,0,null,0,1,"p",[["style","color:#a94442;font-size: 18px;"]],null,null,null,null,null)),(l()(),u.Tb(-1,null,["Error : Échec d'authentification !!!"]))],(function(l,n){l(n,3,0,"close-circle-outline")}),null)}function h(l){return u.Ub(0,[(l()(),u.Bb(0,0,null,null,34,"ion-card",[["class","welcome-card "],["style","background-color: #1E90FF;height: 100%;margin: 0"]],null,null,null,i.L,i.f)),u.Ab(1,49152,null,0,r.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,4,"ion-card-header",[["style","\n    background-color: white;\n    border-top-left-radius: 5%;\n    border-top-right-radius: 5%;"]],null,null,null,i.J,i.h)),u.Ab(3,49152,null,0,r.n,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,2,"ion-card-title",[["style","color: darkgreen;text-align: center;font-size: 2rem;"]],null,null,null,i.K,i.i)),u.Ab(5,49152,null,0,r.p,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,["Modification mot de passe"])),(l()(),u.Bb(7,0,null,0,27,"ion-card-content",[["style","\n    background-color: white;\n    /* border-radius: 5%; */\n    border-bottom-left-radius: 5%;\n    border-bottom-right-radius: 5%;"]],null,null,null,i.I,i.g)),u.Ab(8,49152,null,0,r.m,[u.j,u.p,u.F],null,null),(l()(),u.qb(16777216,null,0,1,null,m)),u.Ab(10,16384,null,0,a.i,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Bb(11,0,null,0,9,"ion-item",[],null,null,null,i.T,i.q)),u.Ab(12,49152,null,0,r.G,[u.j,u.p,u.F],null,null),(l()(),u.Bb(13,0,null,0,7,"ion-input",[["placeholder","Nouveau Mot de passe"],["style","color: darkgreen;font-size: 1.5rem;text-align: center;"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Nb(l,14)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Nb(l,14)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.newPassword=e)&&t),t}),i.S,i.p)),u.Ab(14,16384,null,0,r.Nb,[u.p],null,null),u.Qb(1024,null,s.c,(function(l){return[l]}),[r.Nb]),u.Ab(16,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),u.Pb(17,{standalone:0}),u.Qb(2048,null,s.d,null,[s.h]),u.Ab(19,16384,null,0,s.e,[[4,s.d]],null,null),u.Ab(20,49152,null,0,r.F,[u.j,u.p,u.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),u.Bb(21,0,null,0,9,"ion-item",[],null,null,null,i.T,i.q)),u.Ab(22,49152,null,0,r.G,[u.j,u.p,u.F],null,null),(l()(),u.Bb(23,0,null,0,7,"ion-input",[["placeholder","Confirmer Mot de passe"],["style","color: darkgreen;font-size: 1.5rem;text-align: center;"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Nb(l,24)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Nb(l,24)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.confirmNewPassword=e)&&t),t}),i.S,i.p)),u.Ab(24,16384,null,0,r.Nb,[u.p],null,null),u.Qb(1024,null,s.c,(function(l){return[l]}),[r.Nb]),u.Ab(26,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),u.Pb(27,{standalone:0}),u.Qb(2048,null,s.d,null,[s.h]),u.Ab(29,16384,null,0,s.e,[[4,s.d]],null,null),u.Ab(30,49152,null,0,r.F,[u.j,u.p,u.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),u.Bb(31,0,null,0,3,"div",[["style","text-align: center !important;margin-top: 1rem;"]],null,null,null,null,null)),(l()(),u.Bb(32,0,null,null,2,"ion-button",[["color","success"],["type","submit"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.valider()&&u),u}),i.G,i.d)),u.Ab(33,49152,null,0,r.j,[u.j,u.p,u.F],{color:[0,"color"],type:[1,"type"]},null),(l()(),u.Tb(-1,0,["Valider"]))],(function(l,n){var e=n.component;l(n,10,0,-1==e.errorMessage);var u=e.newPassword,t=l(n,17,0,!0);l(n,16,0,u,t),l(n,20,0,"Nouveau Mot de passe","password");var o=e.confirmNewPassword,i=l(n,27,0,!0);l(n,26,0,o,i),l(n,30,0,"Confirmer Mot de passe","password"),l(n,33,0,"success","submit")}),(function(l,n){l(n,13,0,u.Nb(n,19).ngClassUntouched,u.Nb(n,19).ngClassTouched,u.Nb(n,19).ngClassPristine,u.Nb(n,19).ngClassDirty,u.Nb(n,19).ngClassValid,u.Nb(n,19).ngClassInvalid,u.Nb(n,19).ngClassPending),l(n,23,0,u.Nb(n,29).ngClassUntouched,u.Nb(n,29).ngClassTouched,u.Nb(n,29).ngClassPristine,u.Nb(n,29).ngClassDirty,u.Nb(n,29).ngClassValid,u.Nb(n,29).ngClassInvalid,u.Nb(n,29).ngClassPending)}))}function f(l){return u.Ub(0,[(l()(),u.Bb(0,0,null,null,27,"ion-card",[["class","welcome-card "],["style","min-height: 100%;margin: 0"]],null,null,null,i.L,i.f)),u.Ab(1,49152,null,0,r.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,4,"ion-card-header",[["style","\n    background-color: white;\n    border-top-left-radius: 5%;\n    border-top-right-radius: 5%;"]],null,null,null,i.J,i.h)),u.Ab(3,49152,null,0,r.n,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,2,"ion-card-title",[["style","color: darkgreen;text-align: center;font-size: 1.5rem;"]],null,null,null,i.K,i.i)),u.Ab(5,49152,null,0,r.p,[u.j,u.p,u.F],null,null),(l()(),u.Tb(-1,0,["Consentement PATIENT"])),(l()(),u.Bb(7,0,null,0,20,"ion-card-content",[],null,null,null,i.I,i.g)),u.Ab(8,49152,null,0,r.m,[u.j,u.p,u.F],null,null),(l()(),u.Bb(9,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),u.Bb(10,0,null,null,9,"div",[["style","border-radius: 11px;background: white;width: 100%;margin-top: 1rem;padding: 9px;"]],null,null,null,null,null)),(l()(),u.Bb(11,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),u.Bb(12,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),u.Tb(-1,null,["i-cœur’"])),(l()(),u.Tb(-1,null,[" est une application mobile pour la «Télésurveillance» des patients sous Anti Vitamine-K (AVK) permettant de faciliter la connexion entre les patients sous AVK au long cours et le personnel médical. Elle est simple d’utilisation, limite les déplacements des patients tout en leur permettant d’avoir des informations utiles à leur traitement. A cause des nombreuses complications (thrombo-emboliques) que ce traitement engendre, les patients sont soumis à une surveillance rigoureuse clinique (guetter les signes de thrombose et d’hémorragie) et biologique (dosage sanguin du TP (Taux de Prothrombine et de l’INR (International Normalized Ratio) au moins 2 fois par mois). Cette application est destinée à rassembler des données indispensables au suivi de votre traitement notamment les résultats de vos examens de laboratoire (INR) et à répondre à des questions pratiques : mieux comprendre votre traitement par AVK, comment le prendre, les règles pour bien suivre votre traitement, les interactions alimentaires et médicamenteuses, les risques d’un traitement par AVK... Elle permet aussi de mieux informer les professionnels de santé qui vous suivent. Le corps médical étant soumis au secret médical et au respect absolu du code d’éthique et de déontologie, il est primordial pour nous de protéger les données personnels des patients. C’est pourquoi nous nous sommes soumis aux règles établies par l’État du Sénégal (Demande d’agrément auprès du Ministère de la Santé et de l’Action Sociale (MSAS) et Demande d’autorisation auprès de la Commission de protection des Données Personnelles (CDP)). Vos informations (médicales) peuvent être utilisées à des fins scientifiques, en ne divulguant jamais vos informations personnelles d’Etat Civil, comme cela se fait couramment en milieu Hospitalier. L’application est (non obligatoire) proposée aux patients qui le désirent avec la possibilité d’arrêter son utilisation à tout moment (après une simple information du médecin qui s’occupe de votre suivi). En accédant à l’application vous acceptez de manière claire et consentie les conditions d’utilisations. "])),(l()(),u.Bb(15,0,null,null,4,"div",[["style","text-align: right;"]],null,null,null,null,null)),(l()(),u.Bb(16,0,null,null,3,"span",[["style","margin-top: 1rem;"]],null,null,null,null,null)),(l()(),u.Bb(17,0,null,null,1,"p",[["style","text-decoration: underline;font-size: 1.2rem;"]],null,null,null,null,null)),(l()(),u.Tb(-1,null,["SenAssistanceMedical"])),(l()(),u.Tb(-1,null,[" Dakar le 4 Mars 2021 "])),(l()(),u.Bb(20,0,null,0,7,"div",[["style","text-align: center !important;margin-top: 1rem;padding: 5px;background: white;"]],null,null,null,null,null)),(l()(),u.Bb(21,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),u.Bb(22,0,null,null,0,"input",[["id","vehicle1"],["name","vehicle1"],["type","checkbox"],["value","Bike"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.approuved()&&u),u}),null,null)),(l()(),u.Bb(23,0,null,null,1,"label",[["for","vehicle1"]],null,null,null,null,null)),(l()(),u.Tb(-1,null,[" lu et approuvé"])),(l()(),u.Bb(25,0,null,null,2,"ion-button",[["color","success"],["type","submit"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==(l.component.etapDisplay=2)&&u),u}),i.G,i.d)),u.Ab(26,49152,null,0,r.j,[u.j,u.p,u.F],{color:[0,"color"],disabled:[1,"disabled"],type:[2,"type"]},null),(l()(),u.Tb(-1,0,["Valider"]))],(function(l,n){l(n,26,0,"success",!n.component.itemChecked,"submit")}),null)}function v(l){return u.Ub(0,[(l()(),u.Bb(0,0,null,null,5,"ion-content",[],null,null,null,i.N,i.k)),u.Ab(1,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.qb(16777216,null,0,1,null,h)),u.Ab(3,16384,null,0,a.i,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(16777216,null,0,1,null,f)),u.Ab(5,16384,null,0,a.i,[u.W,u.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,2==e.etapDisplay),l(n,5,0,1==e.etapDisplay)}),null)}function x(l){return u.Ub(0,[(l()(),u.Bb(0,0,null,null,1,"app-first-log",[],null,null,null,v,g)),u.Ab(1,114688,null,0,p,[c.a,b.m],null,null)],(function(l,n){l(n,1,0)}),null)}var C=u.xb("app-first-log",p,x,{},{},[]),w=function(){return function(){}}();e.d(n,"FirstLogPageModuleNgFactory",(function(){return y}));var y=u.yb(t,[],(function(l){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[o.a,C]],[3,u.m],u.D]),u.Lb(4608,a.k,a.j,[u.z,[2,a.t]]),u.Lb(4608,s.j,s.j,[]),u.Lb(4608,r.b,r.b,[u.F,u.g]),u.Lb(4608,r.Hb,r.Hb,[r.b,u.m,u.w]),u.Lb(4608,r.Kb,r.Kb,[r.b,u.m,u.w]),u.Lb(1073742336,a.b,a.b,[]),u.Lb(1073742336,s.i,s.i,[]),u.Lb(1073742336,s.b,s.b,[]),u.Lb(1073742336,r.Db,r.Db,[]),u.Lb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),u.Lb(1073742336,w,w,[]),u.Lb(1073742336,t,t,[]),u.Lb(1024,b.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);