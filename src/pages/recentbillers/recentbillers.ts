import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {RecentBillers2Page} from '../../pages/recentbillers2/recentbillers2';
import { AuthenticatePage } from '../../pages/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';
import {BillerPage} from '../../pages/biller/biller';
import { SettingsPage } from '../../pages/settings/settings';
import { BillerRefPage } from '../billeref/billeref';
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

  templateUrl: 'recentbillers.html',
})



export class RecentBillersPage {
datas : any;
data : any = [];
data2: any=[];
gdata : any;
sparam: string;
term: string = '';
snip: boolean=true;
snip2: boolean = false;
  constructor(private loadingCtrl: LoadingController,private remoteService : RemoteServiceProvider,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController, private navParams: NavParams) {
   
   
   


  this.data= this.navParams.get("data").data; 

  }
  ga(){
    
  }

recentacc(biller: any){
console.log(biller)
this.storage.set('billeracc',biller.accountRef);
  this.storage.set('ovat',biller.ova);
  //console.log(account);
  console.log(this.data);
  //console.log(account.ova);
  var passer ;
  var dataa = [];
  dataa.push(biller);
  passer = {'r':1,'b':2,data: dataa};
  console.log(passer);
  this.navCtrl.push(BillerRefPage,{data : passer});
//console.log(biller);
/*
let loading = this.loadingCtrl.create({
  content: 'Please wait...'
});

loading.present();
// http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
 
this.storage.get('id').then((val) => {
  let url="http://34.242.75.122/api/v1/recent/"+val+"/accounts";

//alert(this.url);
var body = {'merchant_id':biller.merchant_id};
this.remoteService.getPosts2(url,body).subscribe((data)=>{
  console.log(data);
  loading.dismiss();
  //this.udata = data;
  //this.isd = false;
  if(data.responseCode=="200"){
   // this.class ="toast-success";
   //alert()
   this.navCtrl.push(RecentBillers2Page,{data: data})
  
  }
 
  else{
  alert("Sorry an Error occured try again ");
  }
  //console.log(data);
    });
});
*/
}
/*

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
*/
}
