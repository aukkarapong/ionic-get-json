import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertFormPage } from './insert-form';

@NgModule({
  declarations: [
    InsertFormPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertFormPage),
  ],
})
export class InsertFormPageModule {}
