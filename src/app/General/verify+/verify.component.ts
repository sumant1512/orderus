import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';
import { IVerifyRequestBody } from 'src/app/store/registration/interfaces/registration.interface';
import { RegistrationFacade } from 'src/app/store/registration/registration.facade';
import { VerifyForm } from './verify.form';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {
  subscription = new Subscription();
  verifyForm = VerifyForm();
  appRoutes = APP_ROUTES;
  userName!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private registrationFacade: RegistrationFacade
  ) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(): void {
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((params) => {
        this.userName = params['userName'];
      })
    );
  }

  verify(): void {
    const verifyBody: IVerifyRequestBody = {
      userName: this.userName,
      code: this.verifyForm.value.code,
    };
    this.registrationFacade.verifyUser(verifyBody);
  }

  navigateToPage(routePath: string): void {
    this.router.navigate([routePath]);
  }
}
