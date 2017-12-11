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
import { HistoryPage } from '../../pages/history/history';
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
sl: any=[];
ga : any=[];
ut : any=[];
bng : any=[];
rt: any=[];
pt: any=[];
it: any=[];
fn: any=[];
at: any=[];
ngof: any=[];
od:any=[];
ch:any = [];
mch : any =[];
ins : any=[];
ong: any=[];
air: any=[];
hc : any=[];

udata : any;
phone : string='';
btnt : string;
url : string;

  constructor(private oneSignal: OneSignal,private loadingCtrl: LoadingController ,private navParams: NavParams,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
  try{
    
    this.storage.get('id').then((val) => {
      this.url="http://34.242.75.122/api/v1/pushtoken";
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
    duration: 2000,
    cssClass: this.class,
    position: 'middle'
  });
var s = 2;
  toast.onDidDismiss(() => {
    
   if(this.class=="allbillers"){
     
     for(var i in this.udata.data){
     //  console.log(this.udata.data[i]);
       if(this.udata.data[i].category=="school"){
         this.sl.push(this.udata.data[i]);
       }
      else if(this.udata.data[i].category=="utilities"){
        this.ut.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="government"){
        this.ga.push(this.udata.data[i]);
      }
     else if(this.udata.data[i].category=="gaming"){
        this.bng.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="finance"){
        this.fn.push(this.udata.data[i]);
      }
     else if(this.udata.data[i].category=="paytv"){
        this.pt.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="healthcare"){
        this.hc.push(this.udata.data[i]);
        console.log(this.hc);
      }
      else if(this.udata.data[i].category=="internet"){
        this.it.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category="oil_and_gas"){
        this.ong.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="airline"){
        this.air.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="ngos_and_foundations"){
        this.ngof.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="merchants"){
        this.mch.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="church"){
        this.ch.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="airtime"){
        this.at.push(this.udata.data[i]);
      }
      else if(this.udata.data[i].category=="other" || this.udata.data[i].category=="dummyCategory" ){
        this.od.push(this.udata.data[i]);
      }
      else{}
     }
     this.storage.set('schoollist',JSON.stringify(this.sl));
     this.storage.set('financelist',JSON.stringify(this.fn));
     this.storage.set('governlist',JSON.stringify(this.ga));
     this.storage.set('bettinggameslist',JSON.stringify(this.bng));
     this.storage.set('utilitylist',JSON.stringify(this.ut));
      this.storage.set('paytv',JSON.stringify(this.pt));
      this.storage.set('healthcare',JSON.stringify(this.hc));
      this.storage.set('internet',JSON.stringify(this.it));
      this.storage.set('oilgas',JSON.stringify(this.ong));
      this.storage.set('airline',JSON.stringify(this.air));
      this.storage.set('ngof',JSON.stringify(this.ngof));
      this.storage.set('merchants',JSON.stringify(this.mch));
      this.storage.set('church',JSON.stringify(this.ch));
      this.storage.set('airtime',JSON.stringify(this.at));
      this.storage.set('others',JSON.stringify(this.od));
      this.storage.set('billerlist',JSON.stringify(this.udata));
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
/*
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    this.class ="toast-failure";
    this.presentToast("No Payment history found!");
  }, 5000);
 */
this.navCtrl.push(HistoryPage);
  
}
tosettings(){
  this.navCtrl.push(SettingsPage);
}
tobillers(){
   
    
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  this.url="http://34.242.75.122/api/v1/billers";
  //alert(this.url);
  var body = {}
  this.remoteService.getPosts(this.url).subscribe((data)=>{
    console.log(data);
    loading.dismiss();
    this.udata = data;
    //this.isd = false;
    if(data.responseCode=="200"){
      this.class ="toast-success";
      this.storage.set('billerlist',JSON.stringify(this.udata))
    this.presentToast("Success!");
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
