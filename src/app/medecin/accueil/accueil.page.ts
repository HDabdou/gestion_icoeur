import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ICoeurServiceService } from '../../services/i-coeur-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  filtre;
  patient = []
  motcle;
  patientSave = []
  constructor(private menuCtrl: MenuController,private router:Router,private _serviceIcoeur:ICoeurServiceService) { }

  includesStr(values, str) {
    return values.map(function (value) {
      return String(value);
    }).find(function (value) {
      return value.includes("Lets");
    });
  }

  doFilter() { // without type info
 

}
searchAll(){
  let value = this.motcle;
    console.log("PASS", { value });
  
    const filterTable = this.patientSave.filter(o =>
      Object.keys(o).some(k =>
        String(o[k])
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
    this.patient = filterTable;
}
inscription(){
  this.router.navigate(['/inscription']);
}
loadPatient(id){
  this._serviceIcoeur.onUserUpdate({id:id,new:0}).then(res=>{
    if(res['status'] == true){
      localStorage.setItem('idPatient',id);
      this.router.navigate(['/suivi-patient'])
    }
  })
  
}
transform(items: any[], searchText: string): any[] {
  console.log(searchText)
  console.log(items)
  if(!items){ return []};
  if(!searchText){
     return items
    }else{
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      console.log(it.numero_dossier.toLowerCase().includes(searchText))
        return it.numero_dossier.toLowerCase().includes(searchText);
      })
    }
 }
ionViewWillEnter(){
  
  console.log("ionViewWillEnter")
  this.currentUser = JSON.parse(localStorage.getItem('currentUser')).nom;
  this._serviceIcoeur.getPatientByMedcin({medecin:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
    if(res['status'] == true){
      this.patient = res['Message'];
      this.patientSave = this.patient

    }
  })
}
ionViewDidLoad(){
  console.log("ionViewDidLoad")
  this.currentUser = JSON.parse(localStorage.getItem('currentUser')).nom;
  this._serviceIcoeur.getPatientByMedcin({medecin:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
    if(res['status'] == true){
      this.patient = res['Message'];
      this.patientSave = this.patient

    }
  })
}
currentUser
  ngOnInit() {
    console.log('ngOnInit')
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).nom;
    this._serviceIcoeur.getPatientByMedcin({medecin:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
      if(res['status'] == true){
        this.patient = res['Message'];
        this.patientSave = this.patient
      }
    })

    this.menuCtrl.enable(true)
  }

}
