import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-crags-list',
  templateUrl: 'crags-list.html',
})
export class CragsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(page: string) {
    this.navCtrl.push(page);
  }

}
