import { FormControl, FormGroup, Validators } from '@angular/forms';

export function MenuItemForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
}
