import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes.constants';
import { ForgetPasswordForm } from './forget-password.form';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  forgetPasswordForm = ForgetPasswordForm();
  appRoutes = APP_ROUTES;

  constructor(private router: Router) {}

  navigateToPage(routePath: string): void {
    this.router.navigate([routePath]);
  }
}
