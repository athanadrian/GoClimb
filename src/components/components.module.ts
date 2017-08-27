import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from "../providers/auth-service/auth.service";

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent
    ],
    imports: [IonicModule],
    exports: [
        LoginFormComponent,
        RegisterFormComponent
    ],
    providers: [
    AuthService
  ]
})

export class ComponentsModule {

}