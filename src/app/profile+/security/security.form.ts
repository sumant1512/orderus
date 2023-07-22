import { FormControl, FormGroup } from '@angular/forms';

export function twoFactorAuthForm(): FormGroup {
  return new FormGroup({
    phone: new FormControl(''),
  });
}

export function passwordForm(): FormGroup {
  return new FormGroup({
    currentPw: new FormControl(''),
    newPw: new FormControl(''),
    confirmPw: new FormControl(''),
  });
}
