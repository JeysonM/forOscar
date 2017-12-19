import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../../models/status';
import { ContactInfoPage } from '../../pages/contact-info/contact-info';
import { Contact } from '../../models/contact';

/*
  Generated class for the StatusServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatusServiceProvider {
  myDate: Date = new Date();
  //myDate: String = new Date().toISOString();
  myContact1: Contact = 
    { name: 'Ramsay',
      lastName: 'Bolton',
      mail:'bolton@gmail.com',
      phone:'+591 72770759',
      photo: '/assets/imgs/ramsay.jpg',
      description:'Desollar es mi vida'};

  myContact2: Contact = 
    { name: 'Jaime',
      lastName: 'Lannister',
      mail:'jaimeL@gmail.com',
      phone:'+591 72770759',
      photo: '/assets/imgs/jaime.jpg',
      description:'Dame una mano'};
  

  statusList: Status[] = [
    { text: 'Tarde de juegos',
      date: this.myDate,
      contact: this.myContact1,
      image:'/assets/imgs/dany.jpg'}
    ,
    { text:'Me siento mal',
      date: this.myDate,
      contact: this.myContact2,
      image: '/assets/imgs/john.jpg'}
  ];

  //constructor(public http: HttpClient) {
  constructor() {
    console.log('Hello StatusServiceProvider Provider');
  }

  getStatusList(): Status[]{
    return this.statusList;
  }

}
