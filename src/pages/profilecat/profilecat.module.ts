import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePageCat } from './profilecat';
import { SearchCatPipe } from '../../pipes/search/searchcat';
@NgModule({
  declarations: [
    ProfilePageCat,
   SearchCatPipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePageCat),
  ],
})
export class ProfilePageCatModule {}
