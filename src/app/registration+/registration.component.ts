import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { RegistrationForm } from './registration.form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm = RegistrationForm();
  appRoutes = APP_ROUTES;

  constructor(private router: Router) {}

  navigateToPage(routePath: string): void {
    this.router.navigate([routePath]);
  }
}
