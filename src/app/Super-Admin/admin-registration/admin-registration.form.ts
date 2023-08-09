import { FormControl, FormGroup } from '@angular/forms';
import { EAdmin } from '../enum/admin-registration.enum';

export function adminRegistrationForm(): FormGroup {
  return new FormGroup({
    [EAdmin.NAME]: new FormControl(''),
    [EAdmin.USER_NAME]: new FormControl(''),
    [EAdmin.PASSWORD]: new FormControl(''),
  });
}
