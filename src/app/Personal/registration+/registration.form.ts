import { FormControl, FormGroup } from '@angular/forms';

export function RegistrationForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('test'),
    userName: new FormControl('test'),
    email: new FormControl('test@gmail.com'),
    password: new FormControl('123456'),
    confirmPassword: new FormControl('123456'),
    phone: new FormControl('123456'),
  });
}
