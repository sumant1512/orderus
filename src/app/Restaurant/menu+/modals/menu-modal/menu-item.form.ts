import { FormControl, FormGroup, Validators } from '@angular/forms';

export function MenuItemForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    ingredeints: new FormControl('', [Validators.required]),
  });
}
