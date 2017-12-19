import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list';
import { StatusListComponent } from './status-list/status-list';
import { MessageListComponent } from './message-list/message-list';
import { ContactRowComponent } from './contact-row/contact-row';
@NgModule({
	declarations: [ContactListComponent,
    StatusListComponent,
    MessageListComponent,
    ContactRowComponent],
	imports: [],
	exports: [ContactListComponent,
    StatusListComponent,
    MessageListComponent,
    ContactRowComponent]
})
export class ComponentsModule {}
