import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MainPage } from '../../pages/main/main';
import { RegisterPage } from '../../pages/register/register';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { ForgotPage } from '../../pages/forgot/forgot';
import { AuthenticatePage } from '../../pages/authenticate/authenticate';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 postList = [];
 phone : string;
 password : string;
 f1 : string ="Enter Phone Number";
 f2: string = "Enter Password";
 class : string;
 btnt : string = "Continue";
isd:  boolean = false;
udata :  any;

  url: string = "";
getApiUrl : string = "https://jsonplaceholder.typicode.com/posts/1";

  constructor(public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
   // storage.set('test2', 'Max');
    
      // Or to get a key/value pair
     
    
  }

  forgot(): void {

this.navCtrl.push(ForgotPage);
  }

login() :  void{
  
  // this.url="http://gyara.herokuapp.com/logintest/"+this.user.toString()+"/"+this.pass.toString();
    //this.url="http://172.18.12.212:8000/api/login";
    this.url = "http://34.242.75.122/api/v1/login";
  //alert(this.url);
  if(!this.phone){
    this.class ="toast-failure";
    this.presentToast("Phone Number Required");
  }
  else if(!this.password){
    this.class ="toast-failure";
    this.presentToast("Password Required");
  }else{
    this.isd = true;
    this.btnt = "Please wait.....";
    var body = {'phoneNumber':this.phone.toString(),'password':this.password.toString()}
    this.getPost2(this.url,body);
  }
  
}
getPost2(url: string,body : any){
  console.log("ENTERD HTTP");
  this.remoteService.getPosts2(url,body).subscribe((data)=>{
console.log(data);
this.udata = data;
this.btnt="Login";
this.isd = false;
if(data.responseCode== "200"){
  this.class ="toast-success";
  console.log(data);
  this.storage.set('phone',this.udata.data.network);
  this.storage.set('phone',this.udata.data.phoneNumber);
  this.storage.set('firstname',this.udata.data.firstName);
  this.storage.set('fullname',this.udata.data.fullName);
  this.storage.set('lastname',this.udata.data.lastName);
  this.storage.set('id',this.udata.data.id);
  this.storage.set('apikey',this.udata.data.api_token);
  this.presentToast("Welcome "+data.data.fullName);
  
}
else if(data.responseCode=="44"){
  this.class ="toast-failure";
  this.presentToast("Account not found!");
 // this.class="str";

}
else if(data.responseCode=="43"){
  this.class ="toast-failure";
  this.presentToast("Account Not Activated!");
  this.navCtrl.setRoot(AuthenticatePage,{data: this.phone.toString()});
  
 // this.class="str";

}
else if(data.responseCode=="46"){
  this.class ="toast-failure";
  this.presentToast("Invalid Password!");
//  this.class="str";

}


else{}
  });
  
}


searchchanged1(ch: any){
  if(ch.length>0){
    this.f1 ="";
 
  }
  else{
   this.f1="Enter Phone Number";
   
  }
    console.log(ch);
  }

searchchanged2(ch: any){
  if(ch.length>0){
   
    this.f2= "";
  }
  else{
  
    this.f2 = "Enter Password";
  }
    console.log(ch);
  }
presentToast(msg: string) {
  const toast = this.toastCtrl.create({
    message: msg,
    duration: 1000,
    cssClass: this.class,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
   // alert(this.)
   if(this.class=="toast-success"){
    //alert("moving to Authen");
    this.storage.set('phone',this.udata.data.phoneNumber);
    this.storage.set('firstname',this.udata.data.firstName);
    this.storage.set('fullname',this.udata.data.fullName);
    this.storage.set('lastname',this.udata.data.lastName);
    this.storage.set('id',this.udata.data.id);
    this.storage.set('apikey',this.udata.data.api_token);
    
    
   this.navCtrl.setRoot(MainPage,{data: JSON.stringify(this.udata)});
  }
 
  //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
    
   
  });

  toast.present();
}
openregister(){
  this.navCtrl.setRoot(RegisterPage);
}
ionViewDidLoad() {
  /*
  this.storage.ready().then(() => {
    this.storage.get('test2').then((val) => {
          console.log(val);
        });
        
      
  
        });
        */
  this.btnt = "Log in"
}
}
