import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ICoeurServiceService } from '../services/i-coeur-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.page.html',
  styleUrls: ['./update-patient.page.scss'],
})
export class UpdatePatientPage implements OnInit {
  imagePath
  imgURL
  loaded:boolean = false;
  image:any = null;
  private url:string='https://icoeursam.com/images/uploadImage.php';

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
      console.log(formData);
      let header :HttpHeaders;
        header = new HttpHeaders();
        header.append('Accept', 'application/json');
        let param = 'image='+formData
        this.http.post(this.url,formData,{headers:header}).toPromise().then( res => {
          
           res['name'];
           this._serviceIcoeur.changeImage({image:res['name'],patient:JSON.parse(localStorage.getItem('currentUser')).id}).then(res =>{
             console.log(res)
             this.pinErrorAlert(res['Message']);
           })
           }
            ).catch(error => {console.log('bad') });
      var reader = new FileReader();
    this.imagePath = fileList;
    reader.readAsDataURL(fileList[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.loaded = true;
    }
    }
}
  constructor(private http:HttpClient,private _serviceIcoeur:ICoeurServiceService,private alertController:AlertController ) { }
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
    
    if(localStorage.getItem('currentUser') != null){
      this.image =JSON.parse(localStorage.getItem('currentUser')).image;
      console.log(this.image)
     }
  }

}
