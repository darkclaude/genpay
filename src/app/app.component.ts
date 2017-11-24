import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthenticatePage } from '../pages/authenticate/authenticate';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { OneSignal } from '@ionic-native/onesignal';
import {SettingsPage} from '../pages/settings/settings';
import { MainPage } from '../pages/main/main';
import {ChangepasswordPage} from '../pages/changepassword/changepassword';
import {EditprofilePage} from '../pages/editprofile/editprofile';
import {BillerPage} from '../pages/biller/biller';
import { HistoryPage} from '../pages/history/history';
import { StatementPage } from '../pages/statement/statement';

//import {  ItemDetailsPageRegister  } from '../pages/item-details-register/item-details-register';
@Component({
  templateUrl: 'app.html'     
})
export class MyApp {
rootPage:any = HomePage;

  constructor(private oneSignal : OneSignal,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
    
      
      //  this.oss.startInit("4975cd1d-9d10-41c8-9cda-c5852513ab7f", "347536568651")
      //  .handleNotificationOpened(this.notificationOpenedCallback)
      //  .endInit();
    

      try {
      
      //this.oneSignal.startInit('4975cd1d-9d10-41c8-9cda-c5852513ab7f', '347536568651');
      this.oneSignal.startInit('82928709-50f8-4861-830f-a57f718bb3f7', '813645120142');
      
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });
      
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });
     //this.oneSignal.enableVibrate(true);
      this.oneSignal.endInit();
     
      } catch (error) {
        
      }

    });
  }


   notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  getApiUrl : string = "https://jsonplaceholder.typicode.com/posts";

  
  
}

