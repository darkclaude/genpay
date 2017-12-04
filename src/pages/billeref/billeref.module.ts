import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillerRefPage } from './billeref';

@NgModule({
  declarations: [
    BillerRefPage,
  ],
  imports: [
    IonicPageModule.forChild(BillerRefPage),
  ],
})
export class BillerRefPageModule {}
