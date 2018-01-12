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
 phone : string;
 class: string;
 sfn: boolean=true;
  constructor(private toastCtrl: ToastController,private remoteService: RemoteServiceProvider,private navCtrl: NavController, private navParams: NavParams) {
  
   
 try {
  this.data= JSON.parse(this.navParams.get("data"));
  
 } catch (error) {
   
 }
 let TIME_IN_MS = 1000*60*1;
 let hideFooterTimeout = setTimeout( () => {
      this.resd = false;
 }, TIME_IN_MS);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticatePage');
    this.btnt = "Activate";
    this.phone = this.data;
    alert("Code Resend Will be Available after 1 minutes incase you dont receive any verification code")
  }

  resend(): void{ 
    var body = {'phoneNumber':this.data}
    this.url="http://34.242.75.122/api/v1/sendCode";
    this.remoteService.getPosts2(this.url,body).subscribe((data)=>{
      console.log(data);
      this.udata = data;
      if(data.responseCode=="200"){
alert("Code has been Resent");
      }
      else{
        alert("An Error Occuered please check your details");
      }
    
      //console.log(data);
        });
  }
  activate() :  void{
    this.isd = true;
     this.btnt = "Please wait.....";
   
     this.url="http://34.242.75.122/api/v1/verifyCode";
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
  if(data.responseCode=="49"){
    this.class ="toast-failure";

  this.presentToast("Invalid Code!");
  
  }
  else if(data.responseCode=="200"){
   // this.class ="toast-success";
    this.navCtrl.setRoot(HomePage);
    
  alert("Account Activated!");
  }
  else if(data.status=="02"){
    this.class ="toast-failure";
  alert("Access Denied!");
  }
  else{
    this.class ="toast-success";
    this.navCtrl.setRoot(HomePage);
    
  //this.presentToast("Access Granted!")
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
