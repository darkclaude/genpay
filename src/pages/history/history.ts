import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChangepasswordPage} from '../../pages/changepassword/changepassword';
import {EditprofilePage} from '../../pages/editprofile/editprofile';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthenticatePage } from '../../pages/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { StatementPage } from '../statement/statement';
import { HistoryDataPage } from '../historydata/historydata';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  templateUrl: 'history.html',
})
export class HistoryPage {
  name : string;
  data : any;
  class :string;
  accountno: string;
  udata : any;
  phone : string;
  btnt : string;
 
  url : string;
 // placeholderDate: null;
billername: string='';
options : any= {
  message:'',
  duration: 1000,
  cssClass: this.class,
  position: 'middle'
};
  constructor(private loadingCtrl: LoadingController ,private navParams: NavParams,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
 

  }
 
 
  today(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
   // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
     
   this.storage.get('id').then((val) => {
  this.url="http://34.242.75.122/api/v1/user/"+val+"/payHistory/today";
  
    //alert(this.url);
    var body = {}
    this.remoteService.getPosts(this.url).subscribe((data)=>{
      console.log(data);
      loading.dismiss();
      this.udata = data;
      //this.isd = false;
      if(data.responseCode=="200"){
        this.class ="toast-success";
     this.options.duration=1;
      this.presentToast("");
      
      
      }
      else{
        this.class ="toast-failure";
        alert("No History Data Available")
       //  this.presentToast("No History Data Available");
      }    
      
      //console.log(data);
        });
   });
   
  }
  week(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
   // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
     
   this.storage.get('id').then((val) => {
  this.url="http://34.242.75.122/api/v1/user/"+val+"/payHistory/week";
  
    //alert(this.url);
    var body = {}
    this.remoteService.getPosts(this.url).subscribe((data)=>{
      console.log(data);
      loading.dismiss();
      this.udata = data;
      //this.isd = false;
      if(data.responseCode=="200"){
        this.class ="toast-success";
     this.options.duration= 1;
      this.presentToast("");
      
      
      }
     
      else{
        this.class ="toast-failure";
        alert("No History Data Available")
       //  this.presentToast("No History Data Available");
      }
      //console.log(data);
        });
   });
   
  }
month(){
  
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
 // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
   
 this.storage.get('id').then((val) => {
this.url="http://34.242.75.122/api/v1/user/"+val+"/payHistory/month";

  //alert(this.url);
  var body = {}
  this.remoteService.getPosts(this.url).subscribe((data)=>{
    console.log(data);
    loading.dismiss();
    this.udata = data;
    //this.isd = false;
    if(data.responseCode=="200"){
      this.class ="toast-success";
      this.navCtrl.push(HistoryDataPage,{data: this.udata})
    
    //this.options.duration= 1;
    //this.presentToast("");
    
    
    }
   else{
    this.class ="toast-failure";
  alert("No History Data Available")
     //this.presentToast("No History Data Available");
     
   }
    
    //console.log(data);
      });
 });
 
      
  }
  statement(){

this.navCtrl.push(StatementPage);
    
  }
  
    
  presentToast(msg: string) {
    this.options.message = msg;
    const toast = this.toastCtrl.create(this.options);
  var s = 2;
    toast.onDidDismiss(() => {
      
       this.navCtrl.push(HistoryDataPage,{data: this.udata})
    
     
    });
  
    toast.present();
  }
  

  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
