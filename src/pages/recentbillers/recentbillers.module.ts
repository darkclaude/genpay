import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentBillersPage } from './recentbillers';
import { SearchCatPipe } from '../../pipes/search/searchcat';
@NgModule({
  declarations: [
    RecentBillersPage,
   SearchCatPipe
  ],
  imports: [
    IonicPageModule.forChild(RecentBillersPage),
  ],
})
export class RecentBillersPageModule {}
