import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import * as sha1 from 'js-sha1';
import { ICoeurServiceService } from '../services/i-coeur-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  montant :any;
  numero:any;
  etudiantOReleve:boolean = false;
  etatpeInscription:number = 1;
  patient ={nom:'',prenom:'',sexe:'',dateNaissance:'',age:0,origin:'',lieuResidence:'',profession:'',lieuExercice:'',tel1:'',tel2:'',etude:'',typeEtude:''}
  cardiologue ={cardiologueReferent:'',lieuExercice:'',tel1:'',tel2:''}
  accompagnant ={accompagnantReferent:'',tel1:'',tel2:''}
  valvulopathieCardiaque = {im:'',rm:'',ia:'',ra:'',it:'',autre:'',anneeDecouverte:'',acfa:'',autreAffection:''}
  ctcv ={annee:'',mois:''}
  typevalve ={positionMitrale:{positionMitrale:'',type:'',tailleValve:'',fabriquant:'',date:""},
              positionAortique:{positionAortique:'',type:'',tailleValve:'',fabriquant:'',date:""},
              plastieStricuspide: {plastieStricuspide:'',typePlastie:'',date:""}
            }
  vpf
  vpt
  vaf
  Gestes =[]
  autreGestes
  checkAutreGeste:boolean=false;
  avk 
  autreAvk
  doseavk
  inrMax
  inrMin
  heurepriseavk
  autremedicament
  doseautremedicament
  heparine 
  autreheparine
  numeroDossier
  nomAutreMedoc
  doseAutreMedoc
  posologieAutreMedoc
  autremedicamenttab = []
  heureheparine
  doseheparine
  dateDebutheparine
  dateFinheparine;
  photoAVK = "";
  photoHeparine = "";
  avkChoosen:any;
  heparineChoosen:any;
  selectedMedoc;
  removeMedic(arg){
    console.log(arg)
    this.autremedicamenttab.splice(arg,1)

  }
  
  addMedicament(){
    if(this.nomAutreMedoc != undefined && this.doseAutreMedoc != undefined && this.posologieAutreMedoc != undefined){
    this.autremedicamenttab.push({nom:this.nomAutreMedoc,dose:this.doseAutreMedoc,posologie:this.posologieAutreMedoc})
   }
    this.nomAutreMedoc = undefined
    this.doseAutreMedoc = undefined
    this.posologieAutreMedoc = undefined
  }

  origin =[
    {name:'Dakar'},
    {name:'Diourbel'},
    {name:'Fatick'},
    {name:'Kaffrine'},
    {name:'Kaolack'},
    {name:'Kédougou'},
    {name:'Kolda'},
    {name:'Louga'},
    {name:'Matam'},
    {name:'Saint-Louis'},
    {name:'Sédhiou'},
    {name:'Tambacounda'},
    {name:'Thiès'},
    {name:'Ziguinchor'},
    {name:'Autre pays (précisez)'},
  ]
  checkEtude(arg){
    if(arg == "oui"){
      console.log(arg);
      this.patient.etude = 'oui';
      this.etudiantOReleve = true;
    }
    if(arg == "non"){
      console.log(arg);
      this.patient.etude = 'non';
      this.patient.typeEtude = ''
      this.etudiantOReleve = false;
    }
  }
  autreaffection = [];
  addaffection(){
    if(this.valvulopathieCardiaque.autre !="" || this.valvulopathieCardiaque.autre == undefined){
      this.autreaffection.push(this.valvulopathieCardiaque.autre);
    }
    //this.autreaffection.push(this.valvulopathieCardiaque.autre);
    this.valvulopathieCardiaque.autre = undefined;
    this.valvulopathieCardiaque.autreAffection = this.autreaffection.toString();
  }
  suivant1(){
    const index = this.Gestes.indexOf('Autres');
    if (index > -1) {
      this.Gestes.splice(index, 1);
    }
    if(this.autreGestes != "" || this.autreGestes != undefined){
      this.Gestes.push(this.autreGestes)
    } else{
      this.Gestes.push('aucun');
    }
    if(this.typevalve.positionAortique.fabriquant == 'Autre'){
      this.typevalve.positionAortique.fabriquant = this.vaf
    }
    if(this.typevalve.positionMitrale.fabriquant == 'Autre'){
      this.typevalve.positionMitrale.fabriquant= this.vpf
    }
    if(this.typevalve.plastieStricuspide.typePlastie == 'Autre'){
      this.typevalve.plastieStricuspide.typePlastie = this.vpt;
    }
    if(this.typevalve.positionAortique.date == ""){
      this.typevalve.positionAortique.date = "0000-00-00"
    }
    if(this.typevalve.positionMitrale.date == ""){
      this.typevalve.positionMitrale.date= "0000-00-00"
    }
    if(this.typevalve.plastieStricuspide.date == ""){
      this.typevalve.plastieStricuspide.date = "0000-00-00";
    }
    console.log(this.valvulopathieCardiaque)
  
   
    this.etatpeInscription ++;
    
  }
 async  suivant(){
     
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'home'
    });
    await loading.present();
    console.log(this.gsrc);
    console.log(this.gsrc.toString());
   
    
    console.log(this.typevalve)
    
    this._icoeurService.checkNumber(this.patient.tel1).then(res =>{
      console.log(res)
      if(res['status'] == "ok"){
        loading.dismiss();
        this.pinErrorAlert('Le premier numéro de téléphone du patient est déjà utilisé par un autre')
      }
      if(res['status'] == "ko"){
       if(this.etatpeInscription == 0){
        loading.dismiss();
        this.etatpeInscription = this.etatpeInscription + 2;
      }else{
        loading.dismiss();
        this.etatpeInscription = this.etatpeInscription + 1;
      }
    }
    })

  }
  precedant(){
    this.etatpeInscription = 1;
  }
  retour(){
    this.etatpeInscription = this.etatpeInscription -1;
    if(this.etatpeInscription == 0){

        this.router.navigate(['/accueil'])
      }
  }
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  constructor(private menuCtrl: MenuController,private loadingController:LoadingController,private router:Router,private alertController:AlertController,private _icoeurService:ICoeurServiceService) { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Ok',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'annuler',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
  dateNaissance:Date;
  age:any;
  origins:string;
  gestes
  message
  calculateDate(){
    console.log(this.dateNaissance)
    var diff = Date.now() - new Date(this.dateNaissance).getTime();
    var age_dt = new Date(diff);
    this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    this.patient.age = this.age
    this.patient.dateNaissance = this.dateNaissance.toString();
    this.patient.dateNaissance = this.patient.dateNaissance.split('T')[0]
  }
  mois =[{name:'Janvier'}, {name:'Février'}, {name:'Mars'}, {name:'Avril'}, {name:'Mai'}, {name:'Juin'}, {name:'Juillet'}, {name:'Aout'}, {name:'Septembre'}, {name:'Octobre'}, {name:'Novembre'}, {name:'Decembre'}]
 
  geste1
  geste2
  geste3
  geste4
  geste4d
  gesteAutre 
  patientOrigin
  gsrc
  loading:any;
  async presentLoading() {
    
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'home'
    });
    await this.loading.present();
  }
  onGeste4(){
    if(this.geste4 == "autre"){
      this.geste4d = this.geste4
    }
    
  }
   onChange(){
    this.calculateDate()
    
  }
  onChange1(){
    console.log(this.Gestes)
    console.log(this.Gestes.toString())
    if(this.Gestes.toString().includes('Autres')){
      //this.Gestes.push(this.autreGestes)
      this.checkAutreGeste = true;
    }else{
      this.checkAutreGeste = false
    }
    //autreGestes
  
    
  }
  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Identification du medecin createur',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [ {
        text: 'Valider',
        cssClass: 'success',
        handler: data=> {
          //this.valider()
          if(this.avk == 'Autre'){
            this.avk = this.autreAvk;
            this.photoAVK = "";
          }else{
            console.log(this.avk)
           for(let i of this.listeavk){
             if(i.nom == this.avk){
              this.photoAVK = i.photo;
             }
           }
            //this.photoAVK = pucture.photo;
          }    //this.valider()
          if(this.heparine == 'Autre'){
            console.log(this.heparine)
            this.heparine = this.autreheparine;
            this.photoHeparine = "";
          }else{
            for(let i of this.listeHeparine){
              if(i.nom == this.heparine){
                this.photoHeparine = i.photo;
              }
            }
            console.log(this.heparineChoosen)
            //this.photoHeparine = pucture.photo;
          }
          let patient = {'prenom':this.patient.prenom,
          'nom':this.patient.nom,
            'adresse':this.patient.lieuResidence, 
            'lieuxExercice':this.patient.lieuExercice,
            'dateNaissance':this.patient.dateNaissance,
            'profession':this.patient.profession,
            'scolarise':this.patient.etude,
            'typeEtude':this.patient.typeEtude,
            'tel1':this.patient.tel1,
            'tel2':this.patient.tel2,
            'login':this.patient.tel1,
            'password':sha1('12345'),
            'region':this.patient.origin,
            'sexe':this.patient.sexe,
            'depends_on':1,
            'gsrh':this.gsrc.toString(),
            'accompagnant':this.accompagnant.accompagnantReferent,
            'accompagnantTel1':this.accompagnant.tel1,
            'accompagnantTel2':this.accompagnant.tel2,
            'cardioReferent':this.cardiologue.cardiologueReferent,
            'cardioReferentLieuExercice':this.cardiologue.lieuExercice,
            'cardioReferentTel1':this.cardiologue.tel1,
            'cardioReferentTel2':this.cardiologue.tel2,
           };
           let maladie = {
            'acfa':this.valvulopathieCardiaque.acfa,
            'anneeDecouverte':this.valvulopathieCardiaque.anneeDecouverte.split('-')[0],
           'autreAffection':this.valvulopathieCardiaque.autreAffection, 
           'ia':this.valvulopathieCardiaque.ia,
           'im':this.valvulopathieCardiaque.im,
           'it':this.valvulopathieCardiaque.it,
           'ra':this.valvulopathieCardiaque.ra,
           'rm':this.valvulopathieCardiaque.rm,
           'annee':this.ctcv.annee.split('-')[0],
           'mois':this.ctcv.mois,
           'numeroDossier':this.numeroDossier,
           'plastieStricuspide_plastieStricuspide':this.typevalve.plastieStricuspide.plastieStricuspide,
           'plastieStricuspide_typePlastie':this.typevalve.plastieStricuspide.typePlastie,
           'plastieStricuspide_date':this.typevalve.plastieStricuspide.date,
      
           'positionAortique_positionAortique':this.typevalve.positionAortique.positionAortique,
           'positionAortique_type':this.typevalve.positionAortique.type,
           'positionAortique_tailleValve':this.typevalve.positionAortique.tailleValve,
           'positionAortique_fabriquant':this.typevalve.positionAortique.fabriquant,
           'positionAortique_date':this.typevalve.positionAortique.date,
      
           'positionMitrale_positionMitrale':this.typevalve.positionMitrale.positionMitrale,
           'positionMitrale_type':this.typevalve.positionMitrale.type,
           'positionMitrale_tailleValve':this.typevalve.positionMitrale.tailleValve,
           'positionMitrale_fabriquant':this.typevalve.positionMitrale.fabriquant,
           'positionMitrale_date':this.typevalve.positionMitrale.date,
            
           'autres_gestes':this.Gestes.toString(),
           'inr_cible_min':this.inrMin,
           'inr_cible_max':this.inrMax,
          
         };
         let avk = {
          'avk':"",
          'heure_prise_avk':"",
          'dose_avk':"",
          'photo':""
        }
         if(!this.avk){
           avk = {
            'avk':"aucun",
            'heure_prise_avk':"",
            'dose_avk':"",
            'photo':""
          }
         }else{
           avk = {
            'avk':this.avk,
            'heure_prise_avk':this.heurepriseavk,
            'dose_avk':this.doseavk,
            'photo':this.photoAVK
          }
         }
         
          let heparine = {
            'heparine':"",
            'heure_prise_avk':"",
            'dose_avk':"",
            'date_debut_heparine':"",
            'date_fin_heparine':"",
            'photo':"",

          }
          if(!this.heparine){
             heparine = {
              'heparine':"aucun",
              'heure_prise_avk':"",
              'dose_avk':"",
              'date_debut_heparine':"",
              'date_fin_heparine':"",
              'photo':"",
  
            }
          }else{
             heparine = {
              'heparine':this.heparine,
              'heure_prise_avk':this.heureheparine,
              'dose_avk':this.doseheparine,
              'date_debut_heparine':this.dateDebutheparine,
              'date_fin_heparine':this.dateFinheparine,
              'photo':this.photoHeparine,
  
            }
          }
          let medecin = {
            'login':data.username,
            'password':sha1(data.password)
          }
          console.log(data.username+' '+data.password);
          console.log(this.autremedicamenttab)
          console.log(avk)
          console.log(heparine)
          //this.presentLoading();
          this._icoeurService.checkNumber(this.patient.tel1).then(res =>{
            console.log(res)
            if(res['status'] == "ok"){
              this.pinErrorAlert('Le premier numéro de téléphone (1) du patient est déjà utilisé par un autre');
              //loading.dismiss();
            }
            if(res['status'] == "ko"){
              this._icoeurService.createPaitient(medecin,patient,maladie,avk,heparine,this.autremedicamenttab).then(res =>{
                if(res['status'] == true){
                 // loading.dismiss();
                  this.ConfirmAlert("patient incrit avec succées");

                  this.router.navigate(['/login']);
                }else{
                  //loading.dismiss();
                  this.ConfirmAlert(res['Message']);
                }
                //this.router.navigate(['/login']);
              })
            }
          
          })
         
           // this.gestesliste.gestesliste = this.gesteAutre
          //this.router.navigate(['/login']);
          }
      }]
    });

    await alert.present();
    
  }
  async pinErrorAlert(arg) {
    const alert = await this.alertController.create({
      header: 'Message',
      //subHeader: 'Subtitle',
      //subHeader: arg,
      message:"<p style='color:red;'>"+arg+"</p>",
    
      buttons: [ {
        text: 'OK',
        cssClass: 'success',
        handler: () => {
          //this.valider()
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
  async ConfirmAlert(arg) {
    const alert = await this.alertController.create({
      header: 'Message',
      //subHeader: 'Subtitle',
      //subHeader: arg,
      message:"<label style='color:green;'>"+arg+"</label>",
    
      buttons: [ {
        text: 'OK',
        cssClass: 'success',
        handler: () => {
          //this.valider()
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
  listeHeparine = [];
  listeavk = [];
  ngOnInit() {
    this.menuCtrl.enable(false)
    this._icoeurService.listetratement().then(res =>{
      console.log(res)
      let rep = res['Message'];
      for(let i of rep){
        if(i.type == 'avk'){
          this.listeavk.push(i)
        }else{
          this.listeHeparine.push(i)
        }
      }
    })
  }

}
