import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStatusPage } from './register-status';

@NgModule({
  declarations: [
    RegisterStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterStatusPage),
  ],
})
export class RegisterStatusPageModule {}
