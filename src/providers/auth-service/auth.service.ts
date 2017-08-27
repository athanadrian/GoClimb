import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { NotificationService } from '../notification/notification.service';
import { Account } from '../../models/account/account.interface';

@Injectable()
export class AuthService {

  account = {} as Account;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private notificationService:NotificationService) {
  }

  //A function to return the currently logged user anywhere from the app.
  getUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }


  async loginUser(account:Account) {
    try {
      const result=await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password);
    } catch (e) {
      console.log('Error', e);
    }
  }

  async registerUser(account:Account) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password);
      this.notificationService.toast(`Successfully registered ${account.email}`)
      console.log('Result', result);
    }
    catch (error) {
      this.notificationService.toast(`Error: ${error}`)
      console.log('Error', error);
    }
  }
}
