import { FormControl, FormGroup } from '@angular/forms';

export function RegistrationForm(): FormGroup {
  return new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    roleId: new FormControl(''),
    phone: new FormControl(''),
    code: new FormControl(''),
  });
}
