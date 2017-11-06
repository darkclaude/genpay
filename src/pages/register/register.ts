import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthenticatePage } from '../../pages/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  postList = [];
  phone : string;
  password : string;
  firstname : string;
  lastname : string;
  passwordc : string;
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
 
 register() :  void{
  
   //alert(this.url);
   if(!this.firstname){
    this.class ="toast-failure";
    this.presentToast("Firstname required!");
   }
   else if(!this.lastname){
     this.class = "toast-failure";
     this.presentToast("Lastname required!")
   }
   else if( !this.phone ||this.phone.length < 10 || this.phone.length>10 ){
    this.class = "toast-failure";
    this.presentToast("Invalid Phone Number!")
   }
   else{
    this.isd = true;
    this.btnt = "Please wait.....";
   // this.url="http://gyara.herokuapp.com/logintest/"+this.user.toString()+"/"+this.pass.toString();
     this.url="http://172.18.12.212:8000/api/register";
    var body = {'phoneNumber':this.phone.toString() || '','firstName':this.firstname.toString()|| '','lastName':this.lastname.toString()|| '','password': this.password.toString()||'','password_confirmation':this.passwordc.toString()||''}
     console.log(body);
    this.getPost2(this.url,body);
   }
   
  
 }
 getPost2(url: string,body : any){
   this.remoteService.getPosts2(url,body).subscribe((data)=>{
 console.log(data);
 this.udata = this.phone.toString();
 this.btnt="Continue";
 this.isd = false;
 if(data.responseCode== 1){
   this.class ="toast-success";
   this.presentToast("Registration succesfull");
  // this.class ="str";
 }
 else if(data.responseCode==0){
   this.class ="toast-failure";
   this.presentToast("Account Already Exists!");
   this.class="str";
 
 }
 else if(data.responseCode==2){
  this.class ="toast-failure";
  this.presentToast("Passwords do not Match");
  this.class="str";
 }
 else if(data.responseCode==3){
  this.class ="toast-failure";
  this.presentToast("Invalid Phone Number");
  this.class="str";
 }
   })
  }
 
 presentToast(msg: string) {
   const toast = this.toastCtrl.create({
     message: msg,
     duration: 1000,
     cssClass: this.class,
     position: 'button'
   });
 
   toast.onDidDismiss(() => {
    // alert(this.)
    if(this.class=="toast-success"){
     //alert("moving to Authen");
    this.navCtrl.setRoot(AuthenticatePage,{data: JSON.stringify(this.udata)});
   }
  
   //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
     
    
   });
 
   toast.present();
 }
 goback(){
  this.navCtrl.setRoot(HomePage)
}
 ionViewDidLoad() {
   /*
   this.storage.ready().then(() => {
     this.storage.get('test2').then((val) => {
           console.log(val);
         });
         
       
   
         });
         */
   this.btnt = "Continue"
 }
 }
 