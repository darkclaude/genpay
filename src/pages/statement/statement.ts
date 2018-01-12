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
  from : Date;
  to: Date;
  phone : string;
  btnt : string;
  url : string;
  startDate: string;
endDate: string;
billername: string='';
  constructor(private loadingCtrl: LoadingController ,private navParams: NavParams,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
 

  }
 
  setDate(event){
    this.from = new Date(event);
   
         }
         setDateT(event){
           this.to = new Date(event);
          
                }
  
  statement(){


    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
   // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
     
   this.storage.get('id').then((val) => {
  this.url="http://34.242.75.122/api/v1/user/"+val+"/statement";
  
    //alert(this.url);
    var body = {'user_id': val,'from': this.from, 'to': this.to}
  console.log(body);
    this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
      console.log(data);
      
  setTimeout(() => {
    loading.dismiss();
   
  }, 6000);
      loading.dismiss();
      this.udata = data;
      //this.isd = false;
      if(data.responseCode=="200"){
      alert("Success! Statement has been sent your email");
      
      }
      else if(data.responseCode=="400"){
      alert("Please Add an Email First in Settings");
      }    
      else if(data.responseCode=="401"){
        alert("Kindly Verify your email the Link has been sent")
      }
      else if(data.responseCode=="44"){
        alert("No Transaction History Available");
      }
      else{

      }
      //console.log(data);
        });
   });
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
