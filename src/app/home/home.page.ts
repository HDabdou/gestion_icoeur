import { Component, OnInit } from '@angular/core';
import { Platform, PopoverController, MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OrangeComponent } from '../orange/orange.component';
import { FreeComponent } from '../free/free.component';
import { ICoeurServiceService } from '../services/i-coeur-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkEtude:any;
  operation:boolean =false;
  ctcv;
  telAcc;
  telCTCV;
  nomCTCV;
  loading:any;
  currentAVK:any;
  isAVK:boolean = false;
  isHeparine:boolean = false;
  currentHeparine:any;
  isMaladie:boolean = false;
  currentMaladie:any;
  isTpinr:boolean = false;
  lastTpinr:any;
  isRDV:boolean = false;
  lastRDV:any;
  heureRDVC:any = "0000-00-00";
  heureCHI:any;
  lastChirurgie:any = "0000-00-00";
  autreGestes =[];
  autres_affection = [];
  constructor(private platform:Platform,private alertController:AlertController,private _serviceIcoeur:ICoeurServiceService,private loadingController:LoadingController,private menuCtrl: MenuController,private router:Router,public popoverController: PopoverController) { 
   this.platform.backButton.subscribeWithPriority(11, () => {
      this.deconnexion();
    });
   
  }
   async deconnexion() {
    const alert = await this.alertController.create({
      header: 'I-coeur',
      //subHeader: 'Subtitle',
      subHeader: 'voulez vous quitter cette page',
      //message: 'Montant : '+this.montant+' Fcfa',
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'danger',
        handler: () => {
          console.log('Confirm Cancel');
          this.router.navigate(['/home']);
        }
      }, {
        text: 'Valider',
        
        cssClass: 'success',
        handler: () => {
          this._serviceIcoeur.logout(JSON.parse(localStorage.getItem('currentUser')).login).then(access=>
            {
              console.log(access) ;
    
              if(access['status']  == true){
                this.router.navigate(['/login']);
                localStorage.clear()
               // window.location.reload() ;
              }else{
                localStorage.removeItem('isLoggedin');
                sessionStorage.clear();
                this.router.navigate(['']);
                // window.location.reload() ;
              }
            });
         
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FreeComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
 
  traitement =[
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
  ]
  checkOperation(rep:any){
    if(rep == "oui"){
      this.operation = true;
    }
    if(rep == "non"){
      this.operation = false;
    }
  }
  data:any;
  nom = "";
   calculateDate(dateNaissance){
    ////console.log(dateNaissance)
    var diff = Date.now() - new Date(dateNaissance).getTime();
    var age_dt = new Date(diff);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
   
  }
 /* ionViewWillEnter(){
    this.menuCtrl.enable(true);
    this.data = JSON.parse(localStorage.getItem('currentUser'));
    this.nom = this.data.nom
    //console.log(this.nom);
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(true);
    this.data = JSON.parse(localStorage.getItem('currentUser'));
    this.nom = this.data.nom
    //console.log(this.nom);
  }*/
  async presentLoading() {
    
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'home'
    });
    await this.loading.present();
  }
  displayDate(date){
    let frdate = new Date(date).toLocaleString().split(' ')[0];
    return frdate
  }
  ionViewWillEnter(){
  
    this.menuCtrl.enable(true);
  }
  ionViewDidLoad(){
    this.menuCtrl.enable(true);
  }
  displayGRHS(arg){
    if(arg.includes('plus')){
      return arg.replace("plus","+")
    }
    if(arg.includes('moins')){
      return arg.replace("moins","-")
    }
    return arg;
  }
  ngOnInit() {
    //this.presentLoading()
    //console.log(((new Date()).toJSON()).split("T",2)[0])
    
    this.menuCtrl.enable(true);
    this.data = JSON.parse(localStorage.getItem('currentUser'));
    this.nom = this.data.nom
    ////console.log(this.nom);
    this._serviceIcoeur.getAVK(this.data.id).then(res =>{
      ////console.log(res);
      if(res['status'] == true){
        this.currentAVK = res['Message'];
        ////console.log(this.currentAVK)
        this.isAVK =true
       // this.loading.dismiss();
      }
    
    })
    this._serviceIcoeur.getLastRDV(JSON.parse(localStorage.getItem('currentUser')).id).then(res=>{
      //console.log(res['Message']);
      let rep = res['Message'];
      if(res['status'] == true){
        for(let i of rep){
          if(i.service == "Cardiologie"){
             this.lastRDV = i.date;
             this.heureRDVC = i.heure;
             this.isRDV = true;
             //console.log(this.lastRDV)

          }
          if(i.service == "Chirurgie"){
             this.lastChirurgie = i.date;
             this.heureCHI = i.heure;
             this.isRDV = true;
             //console.log(this.lastChirurgie)
          }
       }
       
      }

    })
    this._serviceIcoeur.getLastTpInr({patient:JSON.parse(localStorage.getItem('currentUser')).id}).then(res =>{
      if(res['status'] == true){
        this.lastTpinr = res['Message'];
        //console.log(this.lastTpinr)
        //console.log("Date lastUpdate "+this.lastTpinr.lastUpdate)
        let date1 = new Date(this.lastTpinr.lastUpdate).getDay()
        //console.log("Date lastUpdate plus un j "+date1)
        this.isTpinr = true;
      }
    })
    this._serviceIcoeur.getHeparine(this.data.id).then(res =>{
      ////console.log(res);
      if(res['status']==true){
        this.currentHeparine = res['Message'];
        ////console.log(this.currentHeparine)
        this.isHeparine = true;
        //this.loading.dismiss();
      }
     
    })
    this._serviceIcoeur.getMaladie(this.data.id).then(res =>{
      //console.log(res);
      if(res['status'] == true){
        this.currentMaladie = res['Message'];
        //console.log(res['Message'])
        //console.log(this.currentMaladie)
        this.autreGestes = this.currentMaladie.autre_gestes.split(',')
       
        this.autres_affection = this.currentMaladie.autres_affection.split(',')
        this.isMaladie = true;
      }
     
      //this.loading.dismiss();
    })
  }

  getNotiffiaction(date:Date){
    let sys = ((new Date()).toJSON()).split("T",2)[0];
    let app = ((new Date(date)).toJSON()).split("T",2)[0];
    //console.log(sys);
    //console.log(app);
    if(sys.split('-')[0] == app.split('-')[0]){
      ////console.log(sys.getFullYear()+" == "+app.getFullYear())
      if(sys.split('-')[1] == app.split('-')[1]){
        ////console.log(sys.getMonth()+" == "+app.getMonth())

        if(sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) +1){
          ////console.log(sys.getDay()+" == "+app.getDay())

          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  
  getNotiffiaction1(date){
    if(date != null){
      let sys = ((new Date()).toJSON()).split("T",2)[0];
      let app = ((new Date(date)).toJSON()).split("T",2)[0];
      //console.log(sys);
      //console.log(app);
      if(sys.split('-')[0] == app.split('-')[0]){
        ////console.log(sys.getFullYear()+" == "+app.getFullYear())
        if(sys.split('-')[1] == app.split('-')[1]){
          ////console.log(sys.getMonth()+" == "+app.getMonth())
  
          if(sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) +1){
            ////console.log(sys.getDay()+" == "+app.getDay())
  
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }else{
        return false;
      }
    }else{
      return false;
    }
   
  }
  getNotiffiactionRDVC(date){
    if(date != null){
      
    let sys = ((new Date()).toJSON()).split("T",2)[0];
    let app = ((new Date(date)).toJSON()).split("T",2)[0];
    ////console.log(sys);
    ////console.log(parseInt(app.split('-')[2]) -1);
    if(sys.split('-')[0] == app.split('-')[0]){
      ////console.log(sys.getFullYear()+" == "+app.getFullYear())
      if(sys.split('-')[1] == app.split('-')[1]){
        ////console.log(sys.getMonth()+" == "+app.getMonth())

        if(sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) -1){
          ////console.log(sys.getDay()+" == "+app.getDay())

          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }else{
      return false;
    }
    }else{
      return false;
    }
  }
  getNotiffiactionRDVCh(date:Date){
    if(date != null){
      
    let sys = ((new Date()).toJSON()).split("T",2)[0];
    let app = ((new Date(date)).toJSON()).split("T",2)[0];
   // //console.log(sys);
    //// //console.log(app);
    if(sys.split('-')[0] == app.split('-')[0]){
      ////console.log(sys.getFullYear()+" == "+app.getFullYear())
      if(sys.split('-')[1] == app.split('-')[1]){
        ////console.log(sys.getMonth()+" == "+app.getMonth())

        if(sys.split('-')[2] == app.split('-')[2] || parseInt(sys.split('-')[2]) == parseInt(app.split('-')[2]) -1){
          ////console.log(sys.getDay()+" == "+app.getDay())

          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }else{
      return false;
    }
    }else{
      return false;
    }
  }
}
