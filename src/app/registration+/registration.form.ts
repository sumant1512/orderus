import { FormControl, FormGroup } from '@angular/forms';

export function RegistrationForm(): FormGroup {
  return new FormGroup({
    email: new FormControl(''),
  });
}
