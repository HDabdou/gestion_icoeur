import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ICoeurServiceService } from '../services/i-coeur-service.service';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-tp-inr',
  templateUrl: './tp-inr.page.html',
  styleUrls: ['./tp-inr.page.scss'],
})
export class TpInrPage implements OnInit {

  @ViewChild('barChart',{static:false}) barChart;

  bars: any;
  colorArray: any;
  listeDisplay:boolean =false
  tp:any
  inr:any
  datePrechainTpInr:any
  isMaladie:boolean=  false;
  isTpinr:boolean=  false;
  maladie:any;
  constructor(private _serviceIcoeur:ICoeurServiceService,private alertController:AlertController,private loadingController:LoadingController) { }
  inrHistorique =[]
  ionViewDidEnter() {
    this.createBarChart();
  }
  async presentLoading() {
    
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {

      this._serviceIcoeur.createTpInr({tp:this.tp,inr:this.inr,dateProChainTpInr:((new Date()).toJSON()).split("T",2)[0],patient:JSON.parse(localStorage.getItem('currentUser')).id}).then(res =>{
        console.log(res['Message'])
        if(res['status'] != false){
          loading.dismiss();
          this._serviceIcoeur.onUserUpdate({id:JSON.parse(localStorage.getItem('currentUser')).id,new:1}).then(resp=>{
            if(resp['status'] == true){
              this.pinErrorAlert(res['Message'])
              this.tp =undefined;
              this.inr =undefined;
              this.datePrechainTpInr =undefined;
                        
              this._serviceIcoeur.getAllTpInr(JSON.parse(localStorage.getItem('currentUser')).id).then(res =>{
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
  displayDate(date){
    let frdate = new Date(date).toLocaleString().split(' ')[0];
    return frdate
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
 
  ngOnInit() {
    this._serviceIcoeur.getMaladie(JSON.parse(localStorage.getItem('currentUser')).id).then(res =>{
      if(res['status'] != false){
        this.maladie = res['Message']
        this.isMaladie = true
      }else{
        console.log('pas de reponse');
      }
    })
    
    this._serviceIcoeur.getAllTpInr(JSON.parse(localStorage.getItem('currentUser')).id).then(res =>{
      if(res['status'] != false){
        this.inrHistorique = res['Message']
        this.isTpinr = true
      }else{
        console.log('pas de reponse');
      }
    })
  }
  dislplayListe(arg){
    if(arg =="oui"){
      console.log(arg)
      this.listeDisplay = true;
    }
    if(arg =="non"){
      console.log(arg)
      this.listeDisplay = false
    }
  }
  dates = [];
  datas =[];
  createBarChart() {
    this._serviceIcoeur.getChartTpInr(JSON.parse(localStorage.getItem('currentUser')).id).then(res =>{
      if(res['status'] == true){
        let rep = res['Message'];
        rep.reverse() 
        for(let i of rep){
          this.datas.push(i.inr);
          this.dates.push(this.displayDate(i.date_ajout))
        }

        this.bars = new Chart(this.barChart.nativeElement, {
          type: 'line',//
          data: {
            labels: this.dates,
            datasets: [{
              label: 'Courbe suivi INR',
              data: this.datas,
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

}
