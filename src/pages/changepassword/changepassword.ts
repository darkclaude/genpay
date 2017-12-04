import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoadingController} from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { RegisterPage } from '../../pages/register/register';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  name : string;
  data : any;
  class :string;
  oldpass:string='';
  newpass:string='';
  newpassc: string='';
  udata : any;
  phone : string;
  btnt : string;
  url : string;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
  }

changepass(){
  if(this.newpass.length<1 || this.oldpass.length<1 || this.newpassc.length<1){
    this.class="toast-failure";
    this.presentToast("Empty Fields!");
  }
  else if(this.newpass!= this.newpassc){
    this.class="toast-failure";
    this.presentToast("Passwords do not match")
  }
else{
   
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  this.storage.get('id').then((val)=>{
    var body = {'userId':val,'oldPassword':this.oldpass,'newPassword':this.newpass};
    //this.url = 
    console.log(body);
    this.url="http://34.242.75.122/api/v1/password/change";
  this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
    loading.dismiss();
  console.log(data);
  this.udata = data;
  
  if(data.responseCode== "200"){
    this.class ="toast-success";
    console.log(data)
    this.presentToast("Password changed successfully!");
    
  }
  else if(data.responseCode=="46"){
    this.class ="toast-failure";
    this.presentToast("Old password Incorrect!");
   // this.class="str";
  
  }
  
  
  
  else{}
    });
});

}
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
   this.navCtrl.setRoot(MainPage);
  }
 
  //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
    
   
  });

  toast.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

}
