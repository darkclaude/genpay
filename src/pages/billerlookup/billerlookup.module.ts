import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillerLookupPage } from './billerlookup';

@NgModule({
  declarations: [
    BillerLookupPage,
  ],
  imports: [
    IonicPageModule.forChild(BillerLookupPage),
  ],
})
export class BillerLookupPageModule {}
