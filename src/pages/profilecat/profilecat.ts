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
  templateUrl: 'profilecat.html',
})



export class ProfilePageCat {
datas : any;
data : any = [];
data2: any=[];
gdata : any;
sparam: string;
term: string = '';
snip: boolean=true;
snip2: boolean = false;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
   
   
   


  this.data= JSON.parse(this.navParams.get("data")); 

  }
  ga(){
    
  }
 passdata(val: any) {
     
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  var url="http://172.18.12.212:8000/api/billers/"+val.merchantId.toString()+"/"+val.ova.toString();
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
