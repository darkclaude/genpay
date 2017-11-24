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
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  templateUrl: 'statement.html',
})
export class StatementPage {
  name : string;
  data : any;
  class :string;
  accountno: string;
  udata : any;
  phone : string;
  btnt : string;
  url : string;
  startDate: string;
endDate: string;
billername: string='';
  constructor(private loadingCtrl: LoadingController ,private navParams: NavParams,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
 

  }
 
  week(){
  /*
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.url="http://172.18.12.212:8000/api/billers";
    //alert(this.url);
    var body = {}
    this.remoteService.getPosts(this.url).subscribe((data)=>{
      console.log(data);
      loading.dismiss();
      this.udata = data;
      //this.isd = false;
      if(data.responseCode==1){
        this.class ="toast-success";
        this.storage.set('billerlist',JSON.stringify(this.udata))
      this.presentToast("Got biller list!");
      this.class="allbillers";
      
      }
     
      
      //console.log(data);
        });
        */
  }
month(){
  /*
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  this.url="http://172.18.12.212:8000/api/billers";
  //alert(this.url);
  var body = {}
  this.remoteService.getPosts(this.url).subscribe((data)=>{
    console.log(data);
    loading.dismiss();
    this.udata = data;
    //this.isd = false;
    if(data.responseCode==1){
      this.class ="toast-success";
      this.storage.set('billerlist',JSON.stringify(this.udata))
    this.presentToast("Got biller list!");
    this.class="allbillers";
    
    }
   
    
    //console.log(data);
      });
      */
  }
  statement(){


    
  }
  
    
  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      cssClass: this.class,
      position: 'button'
    });
  var s = 2;
    toast.onDidDismiss(() => {
      
    
     
    });
  
    toast.present();
  }
  

  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
