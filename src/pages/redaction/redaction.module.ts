import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedactionPage } from './redaction';

@NgModule({
  declarations: [
    RedactionPage,
  ],
  imports: [
    IonicPageModule.forChild(RedactionPage),
  ],
})
export class RedactionPageModule {}
