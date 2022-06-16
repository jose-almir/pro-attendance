import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassesComponent } from './classes.component';

const routes: Routes = [
  { path: '', component: ClassesComponent },
  { path: 'add', component: ClassAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesRoutingModule {}
