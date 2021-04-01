import { Component, OnInit } from '@angular/core';
import { ICoeurServiceService } from '../services/i-coeur-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  writer : number = 0;
  question
  response
  chatMessage = []
  sendQuestion(){
    this._icoeurService.createBlog({patient:JSON.parse(localStorage.getItem('currentUser')).id,medecin:JSON.parse(localStorage.getItem('currentUser')).depends_on,type:"q",message:this.question,categorie:"text"}).then(res=>{
      console.log(res)
      if(res['status'] == true){
        this._icoeurService.getBlog({patient:JSON.parse(localStorage.getItem('currentUser')).id,medecin:JSON.parse(localStorage.getItem('currentUser')).depends_on}).then(res=>{

          if(res['status'] == true){
              this.chatMessage = res['Message']
              this._icoeurService.onUserUpdate({id:JSON.parse(localStorage.getItem('currentUser')).id,new:1}).then(res=>{
                console.log(res);
                this.question = undefined
              })
         }
        })
      }
    })
    this.question = undefined
    document.getElementsByTagName('ion-content')[0].scrollToBottom()
  }
  sendResponse(){
    this._icoeurService.createBlog({patient:localStorage.getItem('idPatient'),medecin:JSON.parse(localStorage.getItem('currentUser')).id,type:"r",message:this.response,categorie:"text"}).then(res=>{
      console.log(res);
      if(res['status'] == true){
        this._icoeurService.getBlog({patient:localStorage.getItem('idPatient'),medecin:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
          console.log(res)
          if(res['status'] == true){
              this.chatMessage = res['Message']
             /* this._icoeurService.onUserUpdate({id:localStorage.getItem('idPatient'),new:1}).then(res=>{
                console.log(res);
                this.question = undefined
              })*/
         }
        })
      }else{
        alert('Error')
      }

    })
    this.response = undefined;
    document.getElementsByTagName('ion-content')[0].scrollToBottom()
  }
  constructor(private _icoeurService:ICoeurServiceService) { }
  displayDate(date){
    let dd = ((new Date()).toJSON()).split("T",2)[0];
    if(date != ""){
      let d = date.split(" ")[0];
      if(dd == d){
        return "à "+date.split(" ")[1];
      }else{
        return d.split('-')[2]+"-"+d.split('-')[1]+"-"+d.split('-')[0]+" "+date.split(" ")[1];
      }
      
    }
  }
  ionViewDidEnter(){
    
    this.writer = JSON.parse(localStorage.getItem('currentUser')).access_level;
    //console.log(JSON.parse(localStorage.getItem('currentUser')).access_level)
    if(this.writer == 3){
      this._icoeurService.getBlog({patient:JSON.parse(localStorage.getItem('currentUser')).id,medecin:JSON.parse(localStorage.getItem('currentUser')).depends_on}).then(res=>{
        console.log(res)
        if(res['status'] == true){
            this.chatMessage = res['Message']
       }
      })
    }
    if(this.writer == 2){
      this._icoeurService.getBlog({patient:localStorage.getItem('idPatient'),medecin:JSON.parse(localStorage.getItem('currentUser')).id}).then(res=>{
        console.log(res)
        if(res['status'] == true){
            this.chatMessage = res['Message']
       }
      })
    }
   
  }
  ngOnInit() {
    this.writer = JSON.parse(localStorage.getItem('currentUser')).access_level;
  }

}
