import { FormControl, FormGroup, Validators } from '@angular/forms';

export function RegistrationForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('test', [Validators.required]),
    userName: new FormControl('test', [Validators.required]),
    email: new FormControl('test@gmail.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
    confirmPassword: new FormControl('123456', [Validators.required]),
    phone: new FormControl('123456', [Validators.required]),
  });
}
