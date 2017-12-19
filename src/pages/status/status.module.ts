import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';
import { StatusListComponent } from '../../components/status-list/status-list';

@NgModule({
  declarations: [
    StatusPage,
    StatusListComponent
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
  ],
})
export class StatusPageModule {}
