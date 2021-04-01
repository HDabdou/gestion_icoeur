import { Component, OnInit } from '@angular/core';
import { ICoeurServiceService } from '../services/i-coeur-service.service';

@Component({
  selector: 'app-autre-medicament',
  templateUrl: './autre-medicament.page.html',
  styleUrls: ['./autre-medicament.page.scss'],
})
export class AutreMedicamentPage implements OnInit {
 
  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkAVK:boolean=false;
  Accidant:boolean = false;
  autresCheck:boolean =false;
  data:any;
  avkHistorique = [] 
  constructor(private _serviceIcoeur:ICoeurServiceService) { 
   
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
    this._serviceIcoeur.getAllmedicament(this.data.id).then(res =>{
      if(res['status'] == true){
        this.avkHistorique = res['Message'];
      }
      
    })
  }
  
 

}
