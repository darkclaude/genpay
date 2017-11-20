import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage2 } from './profile2';
import { SearchPipe } from '../../pipes/search/search';
@NgModule({
  declarations: [
    ProfilePage2,
    SearchPipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage2),
  ],
})
export class ProfilePageModule {}
