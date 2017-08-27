import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CragsListPage } from './crags-list';

@NgModule({
  declarations: [
    CragsListPage,
  ],
  imports: [
    IonicPageModule.forChild(CragsListPage),
  ],
})
export class CragsListPageModule {}
