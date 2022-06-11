import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faExclamationTriangle,
  faCheck,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ErrorService } from 'src/app/core/error/error.service';
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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: HotToastService,
    private error: ErrorService
  ) {}

  onSubmit() {
    this.submitting = true;
    this.authService.resetPassword(this.email.value).subscribe({
      next: () => {
        this.toast.success('Email enviado com sucesso');
        this.deactivate.emit();
        this.submitting = false;
      },
      error: (err) => {
        this.toast.error(this.error.get(err.code));
        this.submitting = false;
      },
    });
  }

  get email() {
    return this.resetPasswordForm.get('email')!;
  }

  ngOnInit(): void {}
}
