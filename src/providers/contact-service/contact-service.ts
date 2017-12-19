import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {

  contacts: Contact[] = [
    { name: 'Daenerys',
      lastName: 'Targaryen',
      mail:'danyTar69@gmail.com',
      phone:'+591 72347923',
      photo: '/assets/imgs/dany.jpg',
      description:'Working all day'}
    ,
    { name: 'John',
      lastName: 'Snow',
      mail:'johnWinter09@gmail.com',
      phone:'+591 72342342',
      photo: '/assets/imgs/john.jpg',
      description:'Fighting'}
    ,
    { name: 'Ramsay',
      lastName: 'Bolton',
      mail:'bolton@gmail.com',
      phone:'+591 72770759',
      photo: '/assets/imgs/ramsay.jpg',
      description:'Desollar es mi vida'}
    ,
    { name: 'Jaime',
      lastName: 'Lannister',
      mail:'jaimeL@gmail.com',
      phone:'+591 72770759',
      photo: '/assets/imgs/jaime.jpg',
      description:'Dame una mano'}
  ];

  constructor() {
    console.log('Hello ContactServiceProvider Provider');
  }

  getContacts(): Contact[]{
    return this.contacts;
  }

  filterContacts(searchQuery: String): Contact[]{
    return this.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

}
