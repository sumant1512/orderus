import { FormControl, FormGroup } from '@angular/forms';

export function ForgetPasswordForm(): FormGroup {
  return new FormGroup({
    email: new FormControl(''),
  });
}
