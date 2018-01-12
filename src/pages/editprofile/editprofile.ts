import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoadingController} from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { SettingsPage } from '../../pages/settings/settings';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  name : string;
  data : any;
  class :string;
 newemail: string;
  email: string;
  udata : any;
  phone : string;
  btnt : string;
  url : string;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
    this.storage.get('fullname').then((val) => {
      //  console.log(val)
      this.name = val;
      });
      this.storage.get('phone').then((val) => {
this.phone = val; 
      });
      this.storage.get('email').then((val) => {
        //  console.log(val)
        this.email = val;
      });
  }

  addemail(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
   // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
     
   this.storage.get('id').then((val) => {
  this.url="http://34.242.75.122/api/v1/user/"+val+"/email";
  
    //alert(this.url);
    var body = {'email': this.newemail}
  console.log(body);
    this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
      console.log(data);
      loading.dismiss();
      this.udata = data;
      //this.isd = false;
      if(data.responseCode=="200"){
      alert("Your email has been added Succesfully");
      this.email = this.udata.data.email;
      this.storage.set('email',this.udata.data.email);
      this.storage.set('email',this.udata.data.email);
      this.newemail="";
      
      }
    
      else{
alert("An Error Occured Try again");
      }
      //console.log(data);
        });
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
     this.navCtrl.setRoot(MainPage);
     this.navCtrl.push(SettingsPage);
     if(this.class=="toast-success"){
      //alert("moving to Authen");
     this.navCtrl.setRoot(MainPage,{data: JSON.stringify(this.udata)});
    }
   
    //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
      
     
    });
  
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

}
