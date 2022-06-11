import { Component, OnInit } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faExclamationTriangle,
  faCheck,
  faKey,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { matchPasswords } from 'src/app/shared/validators/match-password';
import { onlySoulcode } from 'src/app/shared/validators/only-soulcode';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  faUser = faUserAlt;
  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;
  faCheck = faCheck;
  faKey = faKey;
  faGoogle = faGoogle;

  signupForm = this.fb.group(
    {
      displayName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, onlySoulcode]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      password_confirm: [null],
    },
    { validators: [matchPasswords] }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: HotToastService,
    private error: ErrorService,
    private title: Title
  ) {}

  signingIn = false;

  onSubmit() {
    this.signingIn = true;
    this.authService.signup(this.signupForm.value).subscribe({
      next: () => (this.signingIn = false),
      error: (err) => this.onError(err),
    });
  }

  onGoogle() {
    this.signingIn = true;
    this.authService.signInGoogle().subscribe({
      next: () => (this.signingIn = false),
      error: (err) => this.onError(err),
    });
  }

  onError(err: FirebaseError) {
    console.log(err.code);
    this.toast.error(this.error.get(err.code));
    this.signingIn = false;
  }

  get displayName() {
    return this.signupForm.get('displayName')!;
  }

  get email() {
    return this.signupForm.get('email')!;
  }

  get password() {
    return this.signupForm.get('password')!;
  }

  ngOnInit(): void {
    this.title.setTitle('Cadastrar | Pro Attendance');
  }
}
