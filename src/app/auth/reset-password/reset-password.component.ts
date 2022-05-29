import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle, faCheck, faKey } from '@fortawesome/free-solid-svg-icons';
import { onlySoulcode } from 'src/app/shared/validators/only-soulcode';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() deactivate = new EventEmitter<void>();

  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;
  faCheck = faCheck;
  faKey = faKey;
  faGoogle = faGoogle;

  resetPasswordForm = this.fb.group({
    email: [null, [Validators.required, Validators.email, onlySoulcode]],
  });

  submitting = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.submitting = true;
  }

  get email() {
    return this.resetPasswordForm.get('email')!;
  }

  ngOnInit(): void {}
}
