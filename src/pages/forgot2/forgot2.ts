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
  selector: 'page-forgot2',
  templateUrl: 'forgot2.html',
})
export class Forgot2Page {
  name : string;
  data : any;
  class :string;
  
  udata : any;
  phone : string;
  btnt : string;
  code : string;
  url : string;
billername: string='';
payref: string;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
 
    
      this.data= this.navParams.get("data");
      console.log(this.data);
      
   
  }
  forgot(){
  
    var body = {'phoneNumber':this.data,'code': this.code};
    console.log(body);

    //this.url = 
   this.url="http://34.242.75.122/api/v1/password/reset";
    //this.url="http://172.18.12.212:8000/api/v1/password/reset"
     
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
    this.presentToast("New Temp Password Sent Via SMS Please Login and Change to Desired Password");
    
  }
  else if(data.responseCode== "400"){
    this.class ="toast-failure";
    console.log(data)
    this.presentToast("Verification Code is Not Correct!");
    
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
