import { FormControl, FormGroup } from '@angular/forms';

export function RegistrationForm(): FormGroup {
  return new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phone: new FormControl(''),
    code: new FormControl(''),
  });
}
