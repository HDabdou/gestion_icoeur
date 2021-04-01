import { Component, OnInit } from '@angular/core';
import { ICoeurServiceService } from '../services/i-coeur-service.service';
import { Router } from '@angular/router';
import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-first-log',
  templateUrl: './first-log.page.html',
  styleUrls: ['./first-log.page.scss'],
})
export class FirstLogPage implements OnInit {

  oldPassword : any;
  newPassword : any;
  confirmNewPassword : any;
  errorMessage : number = 0;
  etapDisplay = 1;
  itemChecked:boolean  = false;
  approuved(){
    if(this.itemChecked){
      this.itemChecked =false;
    }else{
      this.itemChecked = true;
    }
  }
  constructor(private _serviceIcoeur:ICoeurServiceService,private router:Router) { }

  valider(){
     if(this.newPassword == this.confirmNewPassword){
       this._serviceIcoeur.firstLog({newPassword:sha1(this.newPassword),id:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
         if(res['status'] == true){
          this.router.navigate(['/login'])
          localStorage.clear()
         }else{
          alert('Mot de passe incorrect !!!')
        }
       })
     }else{
       alert('les mots de passe sont différents')
     }
  }
  ngOnInit() {
  }

}
