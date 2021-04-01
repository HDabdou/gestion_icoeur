import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { ICoeurServiceService } from '../services/i-coeur-service.service';
import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passcode:string = "";
  passcheck:string;
  email
  autreheparine
  heparine
  errorMessage
  isMedecin:boolean =false;
  password
  constructor(private _serviceLogin:ICoeurServiceService,private menuCtrl: MenuController,private router:Router,private pinCheck: PinCheck,private loadingController: LoadingController,private alertController: AlertController) { }
  inscription(){
    this.router.navigate(['/inscription']);
  }

  async medecinLog() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      if(this.password == "passer"){
        loading.dismiss();
        //localStorage.clear()
        this.isMedecin = false;
        this.email = undefined;
        localStorage.setItem("medecin","medecin")
        this.router.navigate(['/accueil']);
      }else{
        //this.pinErrorAlert()
        loading.dismiss();
        
      }
    }, 5000);
  }
  async presentLoading() {
    let login = this.email;
    
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      this._serviceLogin.login({login:this.email,password:sha1(this.password)}).then(res =>{
        console.log(res['Message'])
        if(res['status'] != false){
          let user = res['Message'];
          localStorage.setItem("currentUser",JSON.stringify(user));
          if(user['first_log'] == 0){
            loading.dismiss();
            this.router.navigate(['/first-log'])
          }else{
            
          if(user['access_level']== 3){
            loading.dismiss();
            //localStorage.clear()
            console.log(localStorage.getItem('currentUser'))
            localStorage.setItem("patient","patient");
            this.router.navigate(['/home']);
            console.log('after')
          }
          if(user['access_level']== 2){
            loading.dismiss();
            localStorage.setItem("medecin","medecin")
            this.router.navigate(['/accueil']);
          }
          }
        }else{
          loading.dismiss();
          this.pinErrorAlert(res['Message']);
        }
       
      })
     /* if(login == "patient"){
        loading.dismiss();
        //localStorage.clear()
        localStorage.setItem("patient","patient");
        this.router.navigate(['/home']);
      }
      if(login == "medecin"){
        loading.dismiss();
        this.isMedecin = true;
      }
      if(login != "patient" && login != 'medecin'){
        this.pinErrorAlert()
        loading.dismiss();
      }*/
    }, 5000);
    
   // const { role, data } = await loading.onDidDismiss();

  }
  async pinErrorAlert(arg) {
    const alert = await this.alertController.create({
      header: 'Erreur',
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
  ionViewWillLeave(){
    this.email = undefined
    this.password = undefined
  }
  ngOnInit() {
    this.menuCtrl.enable(false)
  }

}
