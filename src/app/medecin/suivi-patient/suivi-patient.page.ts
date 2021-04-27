import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { AlertController, LoadingController } from '@ionic/angular';
import { ICoeurServiceService } from '../../services/i-coeur-service.service';

@Component({
  selector: 'app-suivi-patient',
  templateUrl: './suivi-patient.page.html',
  styleUrls: ['./suivi-patient.page.scss'],
})
export class SuiviPatientPage implements OnInit {

  bars: any;
  colorArray: any;

  voirplus:boolean=false;
  voirplusprofile:boolean=false;
  voirplusValve:boolean=false;
  checkAVK:boolean=false;
  Accidant:boolean=false;
  courbe:boolean=false;
  traitement:boolean=false;
  tpinr:boolean=false;
  updateAVK;
  updateHeparine;
  datas:any =[];
  dates:any = [];
  heurePrise:any;
  avkName
  avkHistorique = [] 
  heparineHistorique = []
  medicamentHistorique = [];
  inrHistorique =[];
  lasttpinr
  doseForChange
  doseForChangeHeparine
  prochainTPINR:boolean = false;
  avkActuel = {avk:'Sintron 5mg',dose:'1x2/j'}
  heparineActuel = {heparine:'Novex',dose:'1x2/j',etat:1}
  isModify:boolean = false;
  datePrechainTpInr
  changeDose(arg){
    this._serviceIcoeur.UpdateAVK({nom:arg.nom,heure_prise:arg.heure_prise,dose:this.doseForChange,id:arg.id}).then(res =>{
      if(res['status'] == true){
        console.log('UpdateAVK done !!')
        this._serviceIcoeur.getLastTpInr({patient:arg.patient}).then(res =>{
          if(res['status'] == true){
            console.log('getLastTpInr done !!')

            let rep  =res['Message'];
            this._serviceIcoeur.createHistorique({type:"avk",nom:arg.nom,heure_prise:arg.heure_prise,dose:this.doseForChange,inr:rep.inr,patient:arg.patient,medecin:arg.medecin}).then(res=>{
              console.log(res)
             /* this._serviceIcoeur.getAVK(localStorage.getItem('idPatient')).then(res=>{
                if(res['status'] == true){
                  this.avk = res['Massage'];
                  this.isModify = true;
                }
              })*/
            })
    
          }else{
            console.log('getLastTpInr not done !!')
          }
        })
      }else{
        console.log('UpdateAVK not done !!')
      }
    })
    
    this.avk.dose = this.doseForChange;
    this.updateAVK ="";
  }
  changeAVK(arg){
    this._serviceIcoeur.UpdateAVK({nom:this.avkName,heure_prise:this.heurePrise,dose:this.doseForChange,id:arg.id}).then(res =>{
      if(res['status'] == true){
        this._serviceIcoeur.getLastTpInr({patient:arg.patient}).then(res =>{
          if(res['status'] == true){
            let rep  =res['Message'];
            this._serviceIcoeur.createHistorique({type:"avk",nom:arg.nom,heure_prise:arg.heure_prise,dose:this.doseForChange,inr:rep.inr,patient:arg.patient,medecin:arg.medecin}).then(res=>{
              console.log(res)
              if(res['status'] == true){
                this.avk.nom = this.avkName;
                this.avk.heure_prise = this.heurePrise;
                this.avk.dose = this.doseForChange;
                this.updateAVK ="";
              }
             /* this._serviceIcoeur.getAVK(localStorage.getItem('idPatient')).then(res=>{
                if(res['status'] == true){
                  this.avk = res['Massage'];
                  this.isModify = true;
                }
              })*/
            })
    
          }
        })
      }
    })
   
  }
  date_debut_h;
  date_fin_h;
  changeDoseHaparine(arg){
    console.log(arg)
    this._serviceIcoeur.UpdateHeparine({nom:arg.nom,heure_prise:arg.heure_prise,dose:this.doseForChangeHeparine,date_debut_prise:this.date_debut_h,date_fin_prise:this.date_fin_h,id:arg.id}).then(res =>{
      if(res['status'] == true){
        console.log(res)
        this._serviceIcoeur.getLastTpInr({patient:arg.patient}).then(res =>{
          if(res['status'] == true){
            let rep  =res['Message'];
            this._serviceIcoeur.createHistoriqueHeparine({type:"heparine",nom:arg.nom,heure_prise:arg.heure_prise,dose:this.doseForChangeHeparine,inr:rep.inr,date_debut_prise:arg.date_debut_prise,date_fin_prise:arg.date_fin_prise,patient:arg.patient,medecin:arg.medecin}).then(res=>{
              console.log(res)
              if(res['status'] == true){
                this.heparine.dose = this.doseForChangeHeparine;
                this.updateHeparine ="";
              }
             /* this._serviceIcoeur.getAVK(localStorage.getItem('idPatient')).then(res=>{
                if(res['status'] == true){
                  this.avk = res['Massage'];
                  this.isModify = true;
                }
              })*/
            })
    
          }
        })
      }
    })
  }
  stopHeparine(arg){
    
    this._serviceIcoeur.stopHeparine({id:arg.id,etat:0}).then(res =>{
      if(res['status'] == true){                 
        this.heparine.etat = 0;
        this.updateHeparine = "";
      }
    })
  
  }
  restartHeparine(arg){
    
    this._serviceIcoeur.stopHeparine({id:arg.id,etat:1}).then(res =>{
      if(res['status'] == true){                 
        this.heparine.etat = 1;
        this.updateHeparine = "";
      }
    })
  
  }
  @ViewChild('barChart',{static:false}) barChart:ElementRef;

  constructor(private router:Router,private loadingController:LoadingController,private alertController:AlertController,private _serviceIcoeur:ICoeurServiceService) { }
  checktpinr(arg){
    if(arg =="oui"){
      this.tpinr =true;
    }
    if(arg == 'non'){
      this.tpinr = false;
    }
  }
  checkAutreTraitement(arg){
    if(arg =="oui"){
      this.traitement =true;
    }
    if(arg == 'non'){
      this.traitement = false;
    }
  }
  checkcourbe(arg){
    if(arg =="oui"){
      this.courbe =true;
    }
    if(arg == 'non'){
      this.courbe = false;
    }
  }
  checkAccidant(arg){
    if(arg =="oui"){
      this.Accidant =true;
    }
    if(arg == 'non'){
      this.Accidant = false;
    }
  }
  checkSOusAVK(rep:any){
    if(rep == 'oui'){
      this.checkAVK =true;
    }
    if(rep == "non"){
      this.checkAVK = false;
    }
  }
  checkvoirplus(arg){
    if(arg =="oui"){
      this.voirplus =true;
    }
    if(arg == 'non'){
      this.voirplus = false;
    }
  }
  ionViewDidEnter() {
    this.createBarChart();
  }
  displayDate(date){
    return new Date(date).toLocaleString().split('à')[0];
  }
  createBarChart() {
    this._serviceIcoeur.getChartTpInr(localStorage.getItem('idPatient')).then(res =>{
      if(res['status'] == true){
        let rep = res['Message'];
        console.log(rep)
        rep.reverse()
        for(let i of rep){
          this.dates.push(this.displayDate(i.date_ajout));
          this.datas.push(i.inr)
        }
          this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',//
            data: {
              labels: this.dates,
              datasets: [{
                label: 'Courbe suivi INR',
                data:this.datas,
                //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 229)',// array should have same number of elements as number of dataset
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
    })
  }
  async showDetail(arg) {
    console.log(arg)
    const alert = await this.alertController.create({
      header: arg.nom+" "+arg.dose,
     message:'<ul class="list-group"><li class="list-group-item"><label class="control-label">Début prise : '+this.displayDate(arg.date_debut_prise)+'</label></li><li class="list-group-item"><label class="control-label">Fin prise : '+this.displayDate(arg.date_fin_prise)+'</label></li></ul>',
      buttons: [ {
        text: 'Valider',
        cssClass: 'success',
        handler: data=> {
         
            console.log("clicked -> "+data)
            //this.updateAVK = data;
          }
      }]
    });

    await alert.present();
  }
  async presentAlert(arg) {
    const alert = await this.alertController.create({
      header: arg.nom+" "+arg.dose,
      inputs: [
       
        {
          name: 'changer',
          label: 'Changer la posologie',
          type:"radio",
          value:'changer'
        },
        {
          name: 'changerAVK',
          label: 'Changer l\'AVK',
          type:"radio",
          value:'changerAVK'
        }

      ],
      buttons: [ {
        text: 'Valider',
        cssClass: 'success',
        handler: data=> {
          if(data == 'maintenir'){

        
            
          }
            console.log("clicked -> "+data)
            this.updateAVK = data;
          }
      }]
    });

    await alert.present();
  }
  maintenirLaDoseAVK(arg){
    this._serviceIcoeur.UpdateAVK({nom:arg.nom,heure_prise:arg.heure_prise,dose:arg.dose,id:arg.id}).then(res=>{
      if(res['status']){
        this._serviceIcoeur.getLastTpInr({patient:arg.patient}).then(res =>{
          if(res['status'] == true){
            let rep  =res['Message'];
            this._serviceIcoeur.createHistorique({type:"avk",nom:arg.nom,heure_prise:arg.heure_prise,dose:arg.dose,inr:rep.inr,patient:arg.patient,medecin:arg.medecin}).then(res=>{
              console.log(res)
            })

          }
        })
      }
    })
  }
  async presentAlert1(arg) {
    const alert = await this.alertController.create({
      header: arg.nom+" "+arg.dose,
      inputs: [
        {
          name: 'maintenir',
          label: 'Maintenir la même posologie d’heparine',
          type:"radio",
          value:"maintenir"
        },
        {
          name: 'changer',
          label: 'Changer la posologie',
          type:"radio",
          value:"changer"
        },
        {
          name: 'stopHeparine',
          label: 'Arrêt Heparine',
          type:"radio",
          value:"stopHeparine"
        },
        {
          name: 'restartHeparine',
          label: 'Reprendre Heparine',
          type:"radio",
          value:"restartHeparine"
        },
        
        ],
        buttons: [ {
          text: 'Valider',
          cssClass: 'success',
          handler: data=> {
            //this.valider()
            console.log(arg.date_fin_prise)
            console.log(new Date(arg.date_fin_prise).toJSON())
            console.log(new Date(arg.date_debut_prise).toJSON().split('T')[0])
            this.date_debut_h = new Date(arg.date_debut_prise).toJSON().split('T')[0];
            this.date_fin_h = new Date(arg.date_fin_prise).toJSON().split('T')[0];

            if(data == 'maintenir'){
              this._serviceIcoeur.UpdateHeparine({nom:arg.nom,heure_prise:arg.heure_prise,dose:arg.dose,id:arg.id}).then(res=>{
                if(res['status']){
                  this._serviceIcoeur.getLastTpInr({patient:arg.patient}).then(res =>{
                    if(res['status'] == true){
                      let rep  =res['Message'];
                      this._serviceIcoeur.createHistoriqueHeparine({type:"Heparine",nom:arg.nom,heure_prise:arg.heure_prise,dose:arg.dose,inr:rep.inr,date_debut_prise:arg.date_debut_prise,date_fin_prise:arg.date_fin_prise,patient:arg.patient,medecin:arg.medecin}).then(res=>{
                        console.log(res)
                      })
        
                    }
                  })
                }
              })

              }

             this.updateHeparine = data;
            }
        }]
      });

      await alert.present();
    }
    maintenirLaDoseHeparine(arg){
      this._serviceIcoeur.UpdateHeparine({nom:arg.nom,heure_prise:arg.heure_prise,dose:arg.dose,id:arg.id}).then(res=>{
        if(res['status']){
          this._serviceIcoeur.getLastTpInr({patient:arg.patient}).then(res =>{
            if(res['status'] == true){
              let rep  =res['Message'];
              this._serviceIcoeur.createHistoriqueHeparine({type:"Heparine",nom:arg.nom,heure_prise:arg.heure_prise,dose:arg.dose,inr:rep.inr,date_debut_prise:arg.date_debut_prise,date_fin_prise:arg.date_fin_prise,patient:arg.patient,medecin:arg.medecin}).then(res=>{
                console.log(res)
              })

            }
          })
        }
      })
    }
    calculateDate(dateNaissance){
      //console.log(dateNaissance)
      var diff = Date.now() - new Date(dateNaissance).getTime();
      var age_dt = new Date(diff);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
     
    }
    patient:any;
    maladie:any;
    avk:any;
    heparine:any;
    isDone:boolean = false;
    image:any =null;
    async addTraitement() {

      const alert = await this.alertController.create({
        header: 'Ajout Traitement',
        inputs: [
          {
            name: 'nom',
            placeholder: 'Nom'
          },
          {
            name: 'dose',
            placeholder: 'Dose',
            type: 'text'
          },
          {
            name: 'posologie',
            placeholder: 'Posologie',
            type: 'text'
          }
        ],
        buttons: [ {
          text: 'Valider',
          cssClass: 'success',
          handler: data=> {
           
            console.log(data);
            this.insertTraitement(data)
            //this.router.navigate(['/login']);
            }
        }]
      });
  
      await alert.present();
      
    }
   /* async addTraitement() {

      const alert = await this.alertController.create({
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
        buttons: [ {
          text: 'Valider',
          role: 'cancel',
          cssClass: 'success',
          handler: data=> {
            this.insertTraitement(data)
            //this.valider()
             // this.gestesliste.gestesliste = this.gesteAutre
            //this.router.navigate(['/login']);
            }
        }]
      });
  
      await alert.present();
      
    }*/
    insertTraitement(data){
      this._serviceIcoeur.addTraitement({nom:data.nom,dose:data.dose,posologie:data.posologie,patient:localStorage.getItem('idPatient'),medecin:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
        if(res['status'] == true){
          //this.ConfirmAlert(res['Message']); 
          this._serviceIcoeur.getAllmedicament(localStorage.getItem('idPatient')).then(res=>{
            if(res['status'] == true){
              this.medicamentHistorique=res['Message'];
             // alert.dismiss();
            }else{
              //alert.dismiss();
            }
          })
        }
      })
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
  listeAutregeste =[]
  listeAutreaffection =[]
  //updateDateProchainTPINT
  
  async presentLoading() {
    
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      console.log({dateProChainTpInr:this.datePrechainTpInr,patient:localStorage.getItem('idPatient')})
      let param = {dateProChainTpInr:this.datePrechainTpInr,patient:localStorage.getItem('idPatient')};
        this._serviceIcoeur.updateDateProchainTPINT(JSON.stringify(param)).then(res=>{
          console.log(res);
          if(res['status'] == true){
            loading.dismiss();
            this.maladie.dateProchainTpInr = this.datePrechainTpInr;
            this.pinErrorAlert("DAte prochain TP/INR changé")
            this.prochainTPINR = false;
          }else{
            loading.dismiss();
            this.pinErrorAlert("DAte prochain TP/INR erreur non changé")
          }
        })
    }, 5000);
    
   // const { role, data } = await loading.onDidDismiss();
   //loading.dismiss();
  }
  async pinErrorAlert(arg) {
    const alert = await this.alertController.create({
      header: 'Message',
      //subHeader: 'Subtitle',
      subHeader: arg,
    
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
  displayDateNew(date){
    let frdate = new Date(date).toLocaleString().split(' ')[0];
    return frdate
  }  
  loadBlog(){
   
    
    this.router.navigate(['/blog'])

  }
  ngOnInit() {
   console.log(localStorage.getItem('idPatient'));
   let idPatient = localStorage.getItem('idPatient')
   this._serviceIcoeur.getPatient(idPatient).then(res=>{
     if(res['Message']){
        this.patient = res['Message'];
        this.image = this.patient.image;
        console.log(this.image);
        this._serviceIcoeur.getMaladie(idPatient).then(res=>{
          if(res['Message']){
            console.log(res['Message'])
            this.maladie = res['Message'];
            this.listeAutregeste = this.maladie.autre_gestes.split(',');
            this.listeAutreaffection = this.maladie.autres_affection.split(',');
            this._serviceIcoeur.getAVK(idPatient).then(res=>{
              if(res['Message']){
                this.avk = res['Message'];
                this._serviceIcoeur.getHeparine(idPatient).then(res =>{
                  console.log(res['Message'])
                  if(res['Message'] ){
                    this.heparine = res['Message'];
                    this._serviceIcoeur.getAllAVK(idPatient).then(res=>{
                      this.avkHistorique=res['Message'];
                      this._serviceIcoeur.getAllHeparine(idPatient).then(res=>{
                        this.heparineHistorique = res['Message'];
                        this._serviceIcoeur.getAllmedicament(idPatient).then(res=>{
                          this.medicamentHistorique = res['Message'];
                          this._serviceIcoeur.getAllTpInr(idPatient).then(res=>{
                            this.inrHistorique = res['Message'];
                            this._serviceIcoeur.getLastTpInr({patient:idPatient}).then(res=>{
                              this.lasttpinr = res['Message'];
                              console.log( this.lasttpinr.tp)
                              console.log(res['Message'])
                              console.log(this.avk)
                              console.log(this.heparine)
                              this.isDone = true;
                            })
                           
                          })
                         
                        })
                        
                      })
                    })
                   
                  }
                })
              }
            })
          }
        })
     }
   })
  }
  async insertTpINR() {

    const alert = await this.alertController.create({
      header: 'Ajout TP/INR',
      inputs: [
        {
          name: 'tp',
          placeholder: 'TP'
        },
        {
          name: 'inr',
          placeholder: 'INR',
          type: 'text'
        }
      ],
      buttons: [ {
        text: 'Valider',
        cssClass: 'success',
        handler: data=> {
         
          console.log(data.tp+' '+data.inr);
          this.addTpINR(data)
          //this.router.navigate(['/login']);
          }
      }]
    });

    await alert.present();
    
  }
  /*sync insertTpINR() {

    const alert = await this.alertController.create({
      header: 'Ajout TP/INR',
      inputs: [
        {
          name: 'tp',
          placeholder: 'TP'
        },
        {
          name: 'inr',
          placeholder: 'INR',
        }
       
      ],
      buttons: [ {
        text: 'Valider',
        role: 'cancel',
        cssClass: 'success',
        handler: data=> {
          console.log(data)
          this.addTpINR(data)
          //this.valider()
           // this.gestesliste.gestesliste = this.gesteAutre
          //this.router.navigate(['/login']);
          }
      }]
    });

    await alert.present();
    
  }*/

  isTpinr
  async addTpINR(data) {
    console.log(data)
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {

      this._serviceIcoeur.createTpInr({tp:data.tp,inr:data.inr,dateProChainTpInr:((new Date()).toJSON()).split("T",2)[0],patient:localStorage.getItem('idPatient')}).then(res =>{
        console.log(res['Message'])
        if(res['status'] != false){
          loading.dismiss();
          this._serviceIcoeur.onUserUpdate({id:localStorage.getItem('idPatient'),new:1}).then(resp=>{
            if(resp['status'] == true){
              this.pinErrorAlert(res['Message'])

              //this.datePrechainTpInr =undefined;
                        
              this._serviceIcoeur.getAllTpInr(localStorage.getItem('idPatient')).then(res =>{
                if(res['status'] != false){
                  this.inrHistorique = res['Message']
                  this.isTpinr = true
                }else{
                  console.log('pas de reponse');
                }
              })
            }
          })
          
        }else{
          loading.dismiss();
          this.pinErrorAlert(res['Message'])
        }
      })
  
    }, 5000);
    
   // const { role, data } = await loading.onDidDismiss();
   //loading.dismiss();
  }
}
