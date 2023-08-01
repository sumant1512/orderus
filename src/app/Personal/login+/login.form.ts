import { FormControl, FormGroup, Validators } from '@angular/forms';

export function LoginForm(): FormGroup {
  return new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    keepSignedIn: new FormControl(''),
  });
}
