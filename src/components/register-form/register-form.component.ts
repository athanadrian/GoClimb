import { Component } from '@angular/core';

import { AuthService } from '../../providers/auth-service/auth.service';
import { Account } from '../../models/account/account.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  constructor(
    private authService: AuthService) {
  }

  register(){
    this.authService.registerUser(this.account);
  }

}
