import { FormControl, FormGroup } from '@angular/forms';

export function addressInfoForm(): FormGroup {
  return new FormGroup({
    address1: new FormControl(''),
    address2: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    pinCode: new FormControl(''),
  });
}
