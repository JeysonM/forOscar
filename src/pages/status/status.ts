import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusServiceProvider } from '../../providers/status-service/status-service';
import { Status } from '../../models/status';
import { RegisterStatusPage } from '../register-status/register-status';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  

  statusList: Status[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public statusService: StatusServiceProvider,
              public modalCtrl: ModalController) {

              this.statusList = statusService.getStatusList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  goToRegisterStatus(){
    let modal = this.modalCtrl.create(RegisterStatusPage, {
    });

    modal.present();
    modal.onDidDismiss(data => console.log(data));
  }
}
