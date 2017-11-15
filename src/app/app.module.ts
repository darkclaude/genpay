import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';
import { IonicStorageModule } from '@ionic/storage';

import { AuthenticatePage } from '../pages/authenticate/authenticate';

import { RegisterPage } from '../pages/register/register';

import {SettingsPage} from '../pages/settings/settings';
import { MainPage } from '../pages/main/main';
import {ChangepasswordPage} from '../pages/changepassword/changepassword';
import {EditprofilePage} from '../pages/editprofile/editprofile';
import {BillerPage} from '../pages/biller/biller';
import {BillerRefPage} from '../pages/billeref/billeref';
import {BillerPayPage} from '../pages/billerpay/billerpay';
import { BillerLookupPage} from '../pages/billerlookup/billerlookup';
//import {SearchPipe} from '../pipes/search/search';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    BillerRefPage,
    MainPage,
    BillerPayPage,
    BillerLookupPage,
    SettingsPage,
    ChangepasswordPage,
    BillerPage,
   
    EditprofilePage,
 
    AuthenticatePage
  //  SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['sqlite','websql','indexeddb']
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    BillerPayPage,
    BillerLookupPage,
    AuthenticatePage,
    BillerPage,
    BillerRefPage,
    ChangepasswordPage,
    EditprofilePage,
    SettingsPage
  ],
 
  providers: [
    StatusBar,
    OneSignal,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}
