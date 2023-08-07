import { FormControl, FormGroup, Validators } from '@angular/forms';

export function LoginForm(): FormGroup {
  return new FormGroup({
    email: new FormControl('admin@gmail.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
    keepSignedIn: new FormControl(true),
  });
}
