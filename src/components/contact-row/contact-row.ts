import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact';

/**
 * Generated class for the ContactRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-row',
  templateUrl: 'contact-row.html'
})
export class ContactRowComponent {

  @Input() contactItem: Contact;

  constructor() {
    console.log('Hello ContactRowComponent Component');
  }

}
