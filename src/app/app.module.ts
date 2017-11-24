import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
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
import { HistoryDataPage } from '../pages/historydata/historydata';
import {BillerRefPage} from '../pages/billeref/billeref';
import {BillerPayPage} from '../pages/billerpay/billerpay';
import { BillerLookupPage} from '../pages/billerlookup/billerlookup';
import { HistoryPage} from '../pages/history/history';
import { StatementPage } from '../pages/statement/statement';
import { Statement } from '@angular/compiler/src/output/output_ast';
import { ForgotPage } from '../pages/forgot/forgot';
import { Forgot2Page } from '../pages/forgot2/forgot2';
//mport { SearchPipe } from '../pipes/search/search';
//import { SearchBarLayout3 } from '../components/search-bar/layout-3/search-bar-layout-3';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    BillerRefPage,
    MainPage,
    Forgot2Page,
    HistoryDataPage,
    HistoryPage,
    StatementPage,
    ForgotPage,
    BillerPayPage,
    //ProfilePage2,
    BillerLookupPage,
    SettingsPage,
    ChangepasswordPage,
    BillerPage,
  //SearchPipe,
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
    HttpModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    HistoryDataPage,
    BillerPayPage,
    ForgotPage,
    Forgot2Page,
   // ProfilePage2,
    BillerLookupPage,
    AuthenticatePage,
    HistoryPage,
    BillerPage,
    BillerRefPage,
    StatementPage,
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
