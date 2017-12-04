import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillerPage } from './biller';

@NgModule({
  declarations: [
    BillerPage,
  ],
  imports: [
    IonicPageModule.forChild(BillerPage),
  ],
})
export class BillerPageModule {}
