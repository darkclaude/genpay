import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryDataPage } from './historydata';
import { SearchCatPipe } from '../../pipes/search/searchcat';
@NgModule({
  declarations: [
    HistoryDataPage,
   SearchCatPipe
  ],
  imports: [
    IonicPageModule.forChild(HistoryDataPage),
  ],
})
export class HistoryDataPageModule {}
