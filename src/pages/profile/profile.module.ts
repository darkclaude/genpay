import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { SearchPipe } from '../../pipes/search/search';
@NgModule({
  declarations: [
    ProfilePage,
    SearchPipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
