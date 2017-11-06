import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { MainPage } from '../../pages/main/main';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the AuthenticatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authenticate',
  templateUrl: 'authenticate.html',
})
export class AuthenticatePage {
 btnt : string;
 url: string;
 udata: any=[];
 fullname: string;
 code : string;
 resd: boolean = true;
 data : any;
 isd: boolean=false;
 class: string;
 sfn: boolean=true;
  constructor(private toastCtrl: ToastController,private remoteService: RemoteServiceProvider,private navCtrl: NavController, private navParams: NavParams) {
  
   
 try {
  this.data= JSON.parse(this.navParams.get("data"));
  
 } catch (error) {
   
 }
 let TIME_IN_MS = 1000*60*5;
 let hideFooterTimeout = setTimeout( () => {
      this.resd = false;
 }, TIME_IN_MS);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticatePage');
    this.btnt = "Activate";
  }

  resend(): void{

  }
  activate() :  void{
    this.isd = true;
     this.btnt = "Please wait.....";
   
     this.url="http://172.18.12.212:8000/api/verifyCode";
     //alert(this.url);
     var body = {'code': this.code,'phoneNumber':this.data.toString()}
     console.log(body)
    this.getPost(this.url,body);
   
    
    //this.getPost(this.url);
  }
  getPost(url: string,body: any){
    this.remoteService.getPosts2(url,body).subscribe((data)=>{
  console.log(data);
  this.udata = data;
  this.btnt="Continue";
  this.isd = false;
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

  toast.onDidDismiss(() => {
   if(this.class=="toast-success"){

    this.navCtrl.setRoot(HomePage);
    
   }
  });

  toast.present();
}

}
