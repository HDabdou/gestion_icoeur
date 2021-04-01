import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ICoeurServiceService {
  private url:string='https://icoeursam.com/i_coeure_backend/index.php';
  private header=new HttpHeaders();
    private token;
  constructor(private http:HttpClient) {
    this.header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    this.token="JSON.parse(sessionStorage.getItem('currentUser')).baseToken";
    console.log("token = "+this.token);
   }

   
   //token="b21efc053cc7e16ce4729c2ce0e8ad90";
   public createPaitient(medecin,patient,maladie,avk,heparine,listeMedicament): Promise<any>{
    let params="param="+JSON.stringify({medecin:medecin,patient:patient,maladie:maladie,avk:avk,heparine:heparine,medicaments:listeMedicament});
    console.log(params);
    
    let link=this.url+"/icoeur/createPaitient";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
  } 
  public createtratement(param): Promise<any>{
   let params="param="+JSON.stringify(param);
   console.log(params);
   
   let link=this.url+"/icoeur/createtratement";
   return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
 } 
 public getBlog(param): Promise<any>{
  let params="param="+JSON.stringify(param);
  console.log(params);
  
  let link=this.url+"/icoeur/getBlog";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public createBlog(param): Promise<any>{
  let params="param="+JSON.stringify(param);
  console.log(params);
  
  let link=this.url+"/icoeur/createBlog";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
 public listetratement(): Promise<any>{
  let params//="param="+JSON.stringify(param);
  console.log(params);
  
  let link=this.url+"/icoeur/listetratement";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
}
public checkNumber(tel): Promise<any>{
  let params="param="+JSON.stringify(tel);
  console.log(params);
  
  let link=this.url+"/icoeur/checkNumber";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public login(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/login";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getAVK(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/getAVK";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getHeparine(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/getHeparine";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getAllAVK(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/getAllAVK";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getAllHeparine(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/getAllHeparine";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public updateDateProchainTPINT(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/updateDateProchainTPINT";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getMaladie(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/getMaladie";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getAllmedicament(param): Promise<any>{
 let params="param="+param;
 console.log(params);
 
 let link=this.url+"/icoeur/getAllmedicament";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public createTpInr(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/createTpInr";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getLastTpInr(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getLastTpInr";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public createRDV(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/createRDV";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getAllRDV(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getAllRDV";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getLastRDV(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getLastRDV";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getAllTpInr(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getAllTpInr";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getChartTpInr(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getChartTpInr";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public changeImage(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/changeImage";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getPatientByMedcin(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getPatientByMedcin";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public getPatient(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/getPatient";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public createHistorique(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/createHistorique";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public UpdateAVK(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/UpdateAVK";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public UpdateHeparine(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/UpdateHeparine";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
public stopHeparine(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/stopHeparine";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
 
public addTraitement(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/addTraitement";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
 
public createHistoriqueHeparine(param): Promise<any>{
 let params="param="+JSON.stringify(param);
 console.log(params);
 
 let link=this.url+"/icoeur/createHistoriqueHeparine";
 return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
} 
 
public onUserUpdate(param): Promise<any>{
  let params="param="+JSON.stringify(param);
  console.log(params);
  
  let link=this.url+"/icoeur/onUserUpdate";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
 } 
 public firstLog(param): Promise<any>{
  let params="param="+JSON.stringify(param);
  console.log(params);
  
  let link=this.url+"/icoeur/firstLog";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
 } 
 public logout(param): Promise<any>{
  let params="param="+JSON.stringify(param);
  console.log(params);
  
  let link=this.url+"/icoeur/logout";
  return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
}  

}
