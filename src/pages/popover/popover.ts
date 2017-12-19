import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ContactInfoPage } from '../contact-info/contact-info';
import { Contact } from '../../models/contact';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
  template: `
    <ion-list>
      <button ion-item (click)="goToContactInfoPage(contact); close()">Ver contacto</button>
    </ion-list>`
})
  // <ion-list>
  //     <ion-list-header>Ionic</ion-list-header>
  //     <button ion-item (click)="close()">Ver contacto</button>
  //   </ion-list>


export class PopoverPage {

  //item: Contact;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    //this.item = navParams.get('contact');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  goToContactInfoPage(){

    this.navCtrl.push(ContactInfoPage, {'contact': this.navParams.data});
    
  }
    

}