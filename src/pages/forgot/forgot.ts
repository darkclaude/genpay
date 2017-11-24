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
/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

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
payref: string;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
 
    
      this.data= this.navParams.get("data");
      console.log(this.data);
      
   
  }
  forgot(){
    var body = {'phoneNumber':this.phone};
    //this.url = 
    this.url="http://172.18.12.212:8000/api/forgot";
  this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
  console.log(data);
  this.udata = data;
  
  if(data.responseCode== 1){
    this.class ="toast-success";
    console.log(data)
    this.presentToast("New Temp Password Sent Via SMS Please Login and Change to Desired Password");
    
  }

  else{
    this.class ="toast-failure";
    this.presentToast("An Error Occuered!");
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
     this.navCtrl.setRoot(HomePage);
    }
   
    //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
      
     
    });
  
    toast.present();
  }
  ionViewDidLoad() {
  }
    
}
