import { AbstractControl, ValidationErrors } from '@angular/forms';

export function matchPasswords(
  control: AbstractControl
): ValidationErrors | null {
  return control.get('password')!.value !== control.get('password_confirm')!.value
    ? { matchPasswords: true }
    : null;
}
