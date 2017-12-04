import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthenticatePage } from '../../pages/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';
import {BillerPage} from '../../pages/biller/biller';
 
import { SettingsPage } from '../../pages/settings/settings';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
//import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//profile page

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})



export class ProfilePage {
datas : any;
data : any = [];
data2: any=[];
gdata : any;
sparam: string;
term: string = '';
snip: boolean=true;
snip2: boolean = false;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
   
   
   
 try {
  this.storage.get('billerlist').then((val) => {
  //  console.log(val)
   this.data= JSON.parse(val).data;
   console.log(this.data)
  // console.log(this.gdata);
  });
  //this.gdata= JSON.parse(this.navParams.get("data"));
  //this.data = this.gdata.data;
  
 } catch (error) {
   
 }
    

  }
   

  ga(){
    this.storage.get('governlist').then((val) => {
      //  console.log(val)
     //  this.data= JSON.parse(val);

   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
       
     
        
  }
  sl(){
    this.storage.get('schoollist').then((val) => {
      //  console.log(val)

      this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  fn(){
    this.storage.get('financelist').then((val) => {
      //  console.log(val)
   
      this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  bng(){
    this.storage.get('bettinggameslist').then((val) => {
      //  console.log(val)
     
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  ut(){
    this.storage.get('utilitylist').then((val) => {
      //  console.log(val)
     
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  pt(){
    this.storage.get('paytv').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  hc(){
    this.storage.get('healthcare').then((val) => {
       console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  it(){
    this.storage.get('internet').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  air(){
    this.storage.get('airline').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  
  at(){
    this.storage.get('airtime').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
     
  }
  ins(){
    this.storage.get('insurance').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
  }
  ong(){
    this.storage.get('oilgas').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
  }
  ngo(){
    this.storage.get('ngof').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
  }
  ch(){
    this.storage.get('church').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
  }
  mcn(){
    this.storage.get('merchants').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
  }
  od(){
    this.storage.get('others').then((val) => {
      //  console.log(val)
    
   this.navCtrl.push("ProfilePageCat",{data: val});
      // console.log(this.gdata);
      });
  }
  

 logdata (val: any) {
     
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  var url="http://34.242.75.122/api/v1/billers/"+val.merchantId.toString()+"/"+val.ova.toString();
  //alert(this.url);
  var body = {}
  this.remoteService.getPosts(url).subscribe((data)=>{
    console.log(data);
    loading.dismiss();
   // this.udata = data;
    this.navCtrl.push(BillerPage,{data : data});
    
    //console.log(data);
      });
  
  //console.log(val)
  // alert(val.phonenumber);
  // this.sparam = val.phonenumber;
   //console.log("Happy");
 }
 searchFn(ev: any) {
  this.term = ev.target.value;
}
searchchanged(ch: any){
if(ch.length>0){
  this.snip=false;
  this.snip2=!this.snip;
  console.log(this.snip);
  console.log(this.snip2);
  console.log("Search Active");
}
else{
  this.snip=true;
  this.snip2=!this.snip;
  console.log(this.snip);
  console.log(this.snip2);
  console.log("Now Empty");
}
  console.log(ch);
}
}
