import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';
import { AuthenticatePage } from '../../pages/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';
import { SettingsPage } from '../../pages/settings/settings';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
name : string='';
data : any;
class :string;

udata : any;
phone : string='';
btnt : string;
url : string;

  constructor(private oneSignal: OneSignal,private loadingCtrl: LoadingController ,private navParams: NavParams,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
  try{
    
    this.storage.get('id').then((val) => {
      this.url="http://172.18.12.212:8000/api/redis";
      //alert(this.url);
    //  alert(val);
      this.oneSignal.getIds().then((ids) => {
    // alert(ids.userId);
      var body = {'userId': val,'notificationToken': ids.userId}
      //alert(body.userId+"()"+body.notificationToken);
     this.getPost2(this.url,body);
        });
     });
    
  }
  catch(error){

  }
  
 try {
  this.data= JSON.parse(this.navParams.get("data"));
  //this.oneSignal.sendTag("tokenid",this.data.data.phoneNumber);
  
 } catch (error) {
   
 }
  
  }
  getPost2(url: string,body : any){
    this.remoteService.getPosts2(url,body).subscribe((result)=>{
  console.log(result);
  //alert(result);

    });
    
  }

  activate() :  void{
    //this.isd = true;
     this.btnt = "Please wait.....";
   
     this.url="http://172.18.12.212:8000/api/verifyCode";
     //alert(this.url);
     var body = {}
     console.log(body)
    this.getPost(this.url,body);
   
    
    //this.getPost(this.url);
  }
  getPost(url: string,body: any){
    this.remoteService.getPosts2(url,body).subscribe((data)=>{
  console.log(data);
  this.udata = data;
  this.btnt="Continue";
  //this.isd = false;
  if(data.responseCode==0){
    this.class ="toast-failure";
  this.presentToast("Invalid Code!");
  
  }
  else if(data.responseCode==1){
    this.class ="toast-success";
  this.presentToast("Account Activated!");
  }
  else if(data.status=="02"){
    this.class ="toast-failure";
  this.presentToast("Access Denied!");
  }
  else{
    this.class ="toast-success";
  this.presentToast("Access Granted!")
  }
  
  //console.log(data);
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
    
   if(this.class=="allbillers"){
     
   
      this.storage.set('billerlist',JSON.stringify(this.udata))
      this.navCtrl.push("ProfilePage",{data : JSON.stringify(this.udata)});
   
    
   }
   
  });

  toast.present();
}
logout(){
  this.navCtrl.setRoot(HomePage);
}

torecentbillers(){
  
  
  
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    this.class ="toast-failure";
    this.presentToast("No Recent billers found!");
  }, 5000);
 
  

  
  
}
topaymenthistory(){

  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    this.class ="toast-failure";
    this.presentToast("No Payment history found!");
  }, 5000);
 
  
}
tosettings(){
  this.navCtrl.push(SettingsPage);
}
tobillers(){
   
    
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
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    try{
      this.storage.get('firstname').then((val) => {
     //   alert(val);
      this.name= " "+val;
   
  
    });
    this.storage.get('phone').then((val) => {
      this.phone = " "+val;
    
    
  
    });
   
  }
    catch(error){

    }
   

  }

}
