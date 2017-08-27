import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';
@Injectable()
export class NotificationService {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController) {

  }

  createAlert(title: string, message: string): any {
    return this.alertController.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
  }

  toast(message: string) {//( errors: string[]) {
    let toast = this.toastController.create({
      message: message,
      duration: 3000,
      cssClass: "inValidStyle"
    });
    toast.present();
  }

}
