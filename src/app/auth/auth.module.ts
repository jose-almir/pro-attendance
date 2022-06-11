import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
