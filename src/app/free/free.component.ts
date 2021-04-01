import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { ICoeurServiceService } from '../services/i-coeur-service.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss'],
})
export class FreeComponent implements OnInit {

  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkAVK:boolean=false;
  Accidant:boolean = false;
  service
  dateRDV:any;
  heurRDV:any;
  heurchirurgie:any;
  datechirurgie:any;
  rdv:boolean =false;
  checkSOusAVK(arg){
    if(arg == "oui"){
      this.rdv = true; 
    }
    if(arg == "non"){
      this.rdv = false;
    }
  }
  listRDV =[]
  constructor(private _serviceIcoeur:ICoeurServiceService,private loadingController:LoadingController,private alertController:AlertController) { 
   
  }
  async presentLoading(arg) {
    let param
    if(arg == 'Cardiologie'){
      param = {service:arg,dateRDV:this.dateRDV,heure:this.heurRDV,patient:JSON.parse(localStorage.getItem('currentUser')).id}
    }else{
      param = {service:arg,dateRDV:this.datechirurgie,heure:this.heurchirurgie,patient:JSON.parse(localStorage.getItem('currentUser')).id}

    }
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      this._serviceIcoeur.createRDV(param).then(res =>{
        console.log(res['Message'])
        if(res['status'] != false){
          this._serviceIcoeur.getAllRDV(JSON.parse(localStorage.getItem('currentUser')).id).then(res =>{
            if(res['status'] ==true){
              this.listRDV = res['Message'];
              loading.dismiss();
              this.pinErrorAlert("Insertion effectué")
              this.dateRDV =undefined;
              this.heurRDV =undefined;
              this.datechirurgie =undefined;
              this.heurchirurgie =undefined;
            }else{
              loading.dismiss();
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
  displayDate(date){
    let frdate = new Date(date).toLocaleString().split(' ')[0];
    return frdate
  }
  ngOnInit() {
    this._serviceIcoeur.getAllRDV(JSON.parse(localStorage.getItem('currentUser')).id).then(res =>{
      if(res['status'] ==true){
        this.listRDV = res['Message'];
      }
      
    })
  }

}
