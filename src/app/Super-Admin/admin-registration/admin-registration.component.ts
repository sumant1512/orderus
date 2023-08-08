import { Component } from '@angular/core';
import { adminRegistrationForm } from './admin-registration.form';
import { EAdmin } from '../enum/admin-registration.enum';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss'],
})
export class AdminRegistrationComponent {
  adminRegistrationForm = adminRegistrationForm();
  adminKeys = EAdmin;
}
