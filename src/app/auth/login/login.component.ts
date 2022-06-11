import { Component, OnInit } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faCheck,
  faExclamationTriangle,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { onlySoulcode } from 'src/app/shared/validators/only-soulcode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;
  faCheck = faCheck;
  faKey = faKey;
  faGoogle = faGoogle;

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email, onlySoulcode]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: HotToastService,
    private error: ErrorService,
    private title: Title
  ) {}

  signingIn = false;
  activeModal = false;

  onToggleModal() {
    this.activeModal = !this.activeModal;
  }

  onSubmit() {
    this.signingIn = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => (this.signingIn = false),
      error: (err) => this.onError(err),
    });
  }

  onGoogle() {
    this.signingIn = true;
    this.authService.signInGoogle().subscribe({
      error: (err) => this.onError(err),
    });
  }

  onError(err: FirebaseError) {
    this.toast.error(this.error.get(err.code));
    this.signingIn = false;
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {
    this.title.setTitle('Login | Pro Attendance');
  }
}
