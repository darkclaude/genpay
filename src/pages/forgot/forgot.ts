import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoadingController} from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { RegisterPage } from '../../pages/register/register';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import {BillerPayPage} from '../../pages/billerpay/billerpay';
import { HomePage } from '../home/home';
import { Forgot2Page } from '../forgot2/forgot2';
/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  name : string;
  data : any;
  class :string;
  
  udata : any;
  phone : string;
  btnt : string;
  url : string;
billername: string='';
pt: string='';
payref: string;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
 
    
      
  }
  forgot(){
    
    var body = {'phoneNumber':this.phone};
    this.pt = this.phone;
    //this.url = 
    this.url="http://34.242.75.122/api/v1/password/verify";
   //  this.url="http://172.18.12.212:8000/api/v1/password/verify"
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
   
  this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
    loading.dismiss();
  console.log(data);
  this.udata = data;
  
  if(data.responseCode== "200"){
    this.class ="toast-success";
    console.log(data)
    this.presentToast("Verification SMS has been sent to you");
    
  }
  else if(data.responseCode== "44"){
    this.class ="toast-failure";
    console.log(data)
    this.presentToast("This Account does not exist");
    
  }
  else{
    this.class ="toast-failure";
    this.presentToast("An Error Occured!");
  }
    });
    

  }
changepass(){
  
    
  }
  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      cssClass: this.class,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
     // alert(this.)
     if(this.class=="toast-success"){
      //alert("moving to Authen");
         // this.navCtrl.push(Forgot2Page);
         console.log(this.phone)
         console.log(this.pt)
         console.log(".................")
     this.navCtrl.push(Forgot2Page,{data: this.pt});
    }
   
    //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
      
     
    });
  
    toast.present();
  }
  ionViewDidLoad() {
  }
    
}
