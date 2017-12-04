import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChangepasswordPage} from '../../pages/changepassword/changepassword';
import {EditprofilePage} from '../../pages/editprofile/editprofile';
import { ToastController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthenticatePage } from '../../pages/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private loadingCtrl: LoadingController ,private navParams: NavParams,public storage: Storage,private toastCtrl : ToastController ,private navCtrl: NavController,private remoteService : RemoteServiceProvider) {
 

  }

  tochangepassword(){
this.navCtrl.push(ChangepasswordPage);
  }
  toeditprofile(){
this.navCtrl.push(EditprofilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
