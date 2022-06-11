import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UserVerifiedGuard } from './shared/guards/user-verified.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: HeaderComponent,
    canActivate: [UserVerifiedGuard],
    children: [
      {
        path: '',
        redirectTo: 'turmas',
        pathMatch: 'full',
      },
      {
        path: 'turmas',
        loadChildren: () =>
          import('./classes/classes.module').then((m) => m.ClassesModule),
      },
      {
        path: 'chamadas',
        loadChildren: () =>
          import('./attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
