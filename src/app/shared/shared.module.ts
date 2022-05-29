import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrLabelComponent } from './hr-label/hr-label.component';



@NgModule({
  declarations: [
    HrLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HrLabelComponent
  ]
})
export class SharedModule { }
