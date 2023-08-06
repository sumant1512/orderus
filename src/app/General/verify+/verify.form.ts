import { FormControl, FormGroup } from '@angular/forms';

export function VerifyForm(): FormGroup {
  return new FormGroup({
    code: new FormControl(''),
  });
}
