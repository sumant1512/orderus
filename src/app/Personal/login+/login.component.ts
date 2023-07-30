import { Component } from '@angular/core';
import { LoginForm } from './login.form';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = LoginForm();
  appRoutes = APP_ROUTES;

  constructor(private router: Router) {}

  navigateToPage(routePath: string): void {
    this.router.navigate([routePath]);
  }
}
