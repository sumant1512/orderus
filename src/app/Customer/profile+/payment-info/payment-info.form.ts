import { FormControl, FormGroup } from '@angular/forms';

export function paymentInfoForm(): FormGroup {
  return new FormGroup({
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    cvc: new FormControl(''),
    cardHolderName: new FormControl(''),
  });
}
