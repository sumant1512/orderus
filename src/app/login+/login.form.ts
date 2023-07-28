import { FormControl, FormGroup } from '@angular/forms';

export function LoginForm(): FormGroup {
  return new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    keepSignedIn: new FormControl(''),
  });
}
