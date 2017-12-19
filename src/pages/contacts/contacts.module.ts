import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import { ContactListComponent } from '../../components/contact-list/contact-list';
import { ContactRowComponent } from '../../components/contact-row/contact-row';

@NgModule({
  declarations: [
    ContactsPage,
    ContactListComponent,
    ContactRowComponent
  ],
  imports: [
    IonicPageModule.forChild(ContactsPage),
  ],
})
export class ContactsPageModule {}
