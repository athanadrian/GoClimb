import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CragsMapPage } from './crags-map';

@NgModule({
  declarations: [
    CragsMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CragsMapPage),
  ],
})
export class CragsMapPageModule {}
