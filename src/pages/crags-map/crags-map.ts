import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-crags-map',
  templateUrl: 'crags-map.html',
})
export class CragsMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(page: string) {
    this.navCtrl.push(page);
  }

}
