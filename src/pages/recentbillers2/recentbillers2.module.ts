import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentBillers2Page } from './recentbillers2';
import { SearchCatPipe } from '../../pipes/search/searchcat';
@NgModule({
  declarations: [
    RecentBillers2Page,
   SearchCatPipe
  ],
  imports: [
    IonicPageModule.forChild(RecentBillers2Page),
  ],
})
export class RecentBillers2PageModule {}
