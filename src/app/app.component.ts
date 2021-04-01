import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ICoeurServiceService } from './services/i-coeur-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public appPages = [
    {
      title: 'Mon compte',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Mon AVK',
      url: '/orange',
      icon: 'medkit'
    },
    {
      title: 'Mes TP-INR',
      url: '/tp-inr',
      icon: 'thermometer'
    },
    {
      title: 'Mes Autres Traitements',
      url: '/autre-medicament',
      icon: 'contrast'
    },
    {
      title: 'Mes RDV',
      url: '/free',
      icon: 'calendar'
    },
    {
      title: 'Education Thérapeutique ',
      url: '/education-therapeutique',
      icon: 'sunny'
    },
    
    {
      title: 'Mes accidents aux AVK',
      url: '/accident-avk',
      icon: 'bonfire'
    },
    {
      title: 'Mes questions?',
      url: '/blog',
      icon: 'help'
    },{
      title: 'Modifier mon compte',
      url: '/update-patient',
      icon: 'person-add'
    },
    

  ];

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
          
        }
      }, {
        text: 'Valider',
        
        cssClass: 'success',
        handler: () => {
          this._icoeurService.logout(JSON.parse(localStorage.getItem('currentUser')).login).then(access=>
            {
              console.log(access) ;
    
              if(access['status']  == true){
                this.router.navigate(['/login']);
                localStorage.clear()
                this.medecin = false;
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
  image:any = null;
  checker
  medecin:boolean = false;
  ionViewWillLeave(){
    console.log('ionViewWillLeave')
    this._icoeurService.logout(JSON.parse(localStorage.getItem('currentUser')).login).then(access=>
      {
        console.log(access) ;

        if(access['status']  == true){
          this.router.navigate(['/login']);
          localStorage.clear()
          this.medecin = false;
         // window.location.reload() ;
        }else{
          localStorage.removeItem('isLoggedin');
          sessionStorage.clear();
          this.router.navigate(['']);
          // window.location.reload() ;
        }
      });
  }
  ionViewDidLeave(){
    this._icoeurService.logout(JSON.parse(localStorage.getItem('currentUser')).login).then(access=>
      {
        alert('ionViewDidLeave')
        console.log(access) ;

        if(access['status']  == true){
          this.router.navigate(['/login']);
          localStorage.clear()
          this.medecin = false;
         // window.location.reload() ;
        }else{
          localStorage.removeItem('isLoggedin');
          sessionStorage.clear();
          this.router.navigate(['']);
          // window.location.reload() ;
        }
      });
  } 
  ngOnDestroy(){
    alert('ngOnDestroy')
    this._icoeurService.logout(JSON.parse(localStorage.getItem('currentUser')).login).then(access=>
      {
        console.log(access) ;

        if(access['status']  == true){
          this.router.navigate(['/login']);
          localStorage.clear()
          this.medecin = false;
         // window.location.reload() ;
        }else{
          localStorage.removeItem('isLoggedin');
          sessionStorage.clear();
          this.router.navigate(['']);
          // window.location.reload() ;
        }
      });
  }
  ngOnInit() {
    // localStorage.clear()
     setInterval(() => {
      if(localStorage.getItem('patient') != null){
        
        this.medecin =false
        //clearInterval(this.checker);
      }
      if(localStorage.getItem('medecin') != null){
        //console.log("some one logged "+localStorage.getItem('medecin'))
        this.medecin =true
        //clearInterval(this.checker);
      }
      if(localStorage.getItem('currentUser') != null){
       this.image =JSON.parse(localStorage.getItem('currentUser')).image;
       //console.log(this.image)
      }
    }, 5000);
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private alertController:AlertController,
    private _icoeurService:ICoeurServiceService
  ) {
    this.initializeApp();
  }
   
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
