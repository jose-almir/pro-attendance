import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function onlySoulcode(
  control: AbstractControl
): ValidationErrors | null {
  if (
    Validators.email(control) === null &&
    Validators.required(control) === null
  ) {
    if (!control.value.includes('@soulcodeacademy.org')) {
      return { onlysoulcode: true };
    }
  }
  return null;
}
