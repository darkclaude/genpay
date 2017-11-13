import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillerPayPage } from './billerpay';

@NgModule({
  declarations: [
    BillerPayPage,
  ],
  imports: [
    IonicPageModule.forChild(BillerPayPage),
  ],
})
export class BillerPayPageModule {}
