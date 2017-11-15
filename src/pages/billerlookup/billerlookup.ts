import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoadingController} from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { RegisterPage } from '../../pages/register/register';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import {BillerRefPage} from '../../pages/billeref/billeref';
/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biller',
  templateUrl: 'billerlookup.html',
})
export class BillerLookupPage {
  name : string;
  data : any;
  class :string;
  
  udata : any;
  phone : string;
  btnt : string;
  url : string;
  holder: string;
billername: string='';
payref: string;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
 
    
      this.data= this.navParams.get("data");
      console.log(this.data);
      
   
  }

 
  ionViewDidLoad() {
    try{
      this.billername= this.data.data[0].merchantName;
      this.storage.get('holder').then((val) => {
         this.holder = val;
      });
    }
    catch(error){ this.billername='None';}
   
   
  }
  continue(){
    
    this.navCtrl.push(BillerRefPage,{data : this.data});
  
  }
}
