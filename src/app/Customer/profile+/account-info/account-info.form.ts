import { FormControl, FormGroup } from '@angular/forms';

export function accountInfoForm(): FormGroup {
  return new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    altPhone: new FormControl(''),
  });
}
