import { Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @Input() item: Contact;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.item = navParams.get('contact');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, this.item);
    popover.present({
      ev: myEvent
    });
  }

}
