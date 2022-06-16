import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassesComponent,
    ClassAddComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ClassesModule { }
