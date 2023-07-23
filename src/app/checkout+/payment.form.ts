import { FormControl, FormGroup, Validators } from '@angular/forms';

export function paymentForm(): FormGroup {
  return new FormGroup({
    coupanCode: new FormControl(''),
    tip: new FormControl('', Validators.pattern(/^[0-9]+$/)),
  });
}
