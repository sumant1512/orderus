import { FormControl, FormGroup, Validators } from '@angular/forms';

export function MenuCategoryForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
}
