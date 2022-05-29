import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faCheck,
  faExclamationTriangle,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
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

  constructor(private fb: FormBuilder) {}

  submitting = false;
  signingIn = false;
  activeModal = false;

  onToggleModal() {
    this.activeModal = !this.activeModal;
  }

  onSubmit() {
    this.submitting = true;
    console.log(this.loginForm.value);
  }

  onGoogle() {
    this.signingIn = true;
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {}
}
