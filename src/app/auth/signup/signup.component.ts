import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faExclamationTriangle,
  faCheck,
  faKey,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
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

  constructor(private fb: FormBuilder) {}

  submitting = false;
  signingIn = false;

  onSubmit() {
    this.submitting = true;
    console.log(this.signupForm.value);
  }

  onGoogle() {
    this.signingIn = true;
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

  ngOnInit(): void {}
}
