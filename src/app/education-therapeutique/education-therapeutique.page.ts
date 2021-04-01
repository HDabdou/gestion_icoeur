import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-therapeutique',
  templateUrl: './education-therapeutique.page.html',
  styleUrls: ['./education-therapeutique.page.scss'],
})
export class EducationTherapeutiquePage implements OnInit {

 
  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkAVK:boolean=false;
  Accidant:boolean = false;
  autresCheck:boolean =false;
  constructor() { 
   
  }
  listeInformation =[
    "Diapositive1",
    "Diapositive2",
    "Diapositive3",
    "Diapositive4",
    "Diapositive5",
    "Diapositive6",
    "Diapositive7",
    "Diapositive8",
    "Diapositive9",
    "Diapositive10",
    "Diapositive11",
    "Diapositive12",
    "Diapositive13",
    "Diapositive14",
    "Diapositive15",
    "Diapositive16",
    "Diapositive17",
    "Diapositive18",
  ]
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
  ngOnInit() {}

}
