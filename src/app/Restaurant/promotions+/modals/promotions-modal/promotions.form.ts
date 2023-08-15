import { FormControl, FormGroup, Validators } from '@angular/forms';

export function PromotionsForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });
}
