import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FreeComponent } from '../free/free.component';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Router } from '@angular/router';
import { ICoeurServiceService } from '../services/i-coeur-service.service';


@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss'],
})
export class OrangeComponent implements OnInit {

  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkAVK:boolean=false;
  Accidant:boolean = false;
  autresCheck:boolean =false;
  data:any;
  avkHistorique = [] 
  heparineHistorique = []
  constructor(private router:Router,private _serviceIcoeur:ICoeurServiceService) { 
   
  }
  checkAutre(rep:any){
    if(rep == 'oui'){
      this.autresCheck =true;
    }
    if(rep == "non"){
      this.autresCheck = false;
    }
  }
  checkAccidant(rep:any){
    if(rep == 'oui'){
      this.Accidant =true;
    }
    if(rep == "non"){
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
  displayDate(date){
    let frdate = new Date(date).toLocaleString().split(' ')[0];
    return frdate
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('currentUser'));
    this.data.nom
    console.log(this.data.id);
    this._serviceIcoeur.getAllAVK(this.data.id).then(res =>{
      this.avkHistorique = res['Message'];
    })
    this._serviceIcoeur.getAllHeparine(this.data.id).then(res =>{
      this.heparineHistorique = res['Message'];
    })
  }

}
