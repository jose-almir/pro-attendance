import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserVerifiedGuard } from '../shared/guards/user-verified.guard';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnloggedInToLogin = () => redirectUnauthorizedTo(['/auth/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    ...canActivate(redirectLoggedInToHome),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'email',
    component: VerifyEmailComponent,
    ...canActivate(redirectUnloggedInToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
