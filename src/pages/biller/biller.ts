import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoadingController} from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { RegisterPage } from '../../pages/register/register';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biller',
  templateUrl: 'biller.html',
})
export class BillerPage {
  name : string;
  data : any;
  class :string;
  
  udata : any;
  phone : string;
  btnt : string;
  url : string;
billername: string='';
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
 
    
      this.data= this.navParams.get("data");
      console.log(this.data);
      
   
  }
changepass(){
    var body = {};
    //this.url = 
    this.url="http://172.18.12.212:8000/api/verifyCode";
  this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
  console.log(data);
  this.udata = data;
  
  if(data.responseCode== 1){
    this.class ="toast-success";
    console.log(data)
    this.presentToast("Welcome "+data.data.fullName);
    
  }
  else if(data.responseCode==0){
    this.class ="toast-failure";
    this.presentToast("Account not found!");
   // this.class="str";
  
  }
  else if(data.responseCode==2){
    this.class ="toast-failure";
    this.presentToast("Invalid Password!");
  //  this.class="str";
  
  }
  
  
  else{}
    });
    
  }
  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 500,
      cssClass: this.class,
      position: 'button'
    });
  
    toast.onDidDismiss(() => {
     // alert(this.)
     if(this.class=="toast-success"){
      //alert("moving to Authen");
     this.navCtrl.setRoot(MainPage,{data: JSON.stringify(this.udata)});
    }
   
    //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
      
     
    });
  
    toast.present();
  }
  ionViewDidLoad() {
    try{
      this.billername= this.data.name;
    }
    catch(error){ this.billername='None';}
   
   
  }
  continue(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.class ="toast-failure";
      this.presentToast("No Further Data");
    }, 2000);
  }

}
