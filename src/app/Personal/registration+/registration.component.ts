import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes.constants';
import { RegistrationForm } from './registration.form';
import { IRegistrationPage } from './registration.interface';
import { RegistrationFacade } from 'src/app/store/registration/registration.facade';
import { Subscription } from 'rxjs';
import {
  IRegistrationRequestBody,
  IRoles,
} from 'src/app/store/registration/interfaces/registration.interface';
import { ERegistrationAction } from 'src/app/store/registration/enum/registration-action.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  registrationForm = RegistrationForm();
  appRoutes = APP_ROUTES;
  currentAction = ERegistrationAction.CONTINUE;
  registrationAction = ERegistrationAction;
  selectedPageId = 1;
  selectedUserTypeId = 1;

  pageList: Array<IRegistrationPage> = [
    { id: 1, name: 'Account type', isActive: true },
    { id: 2, name: 'Personal Details', isActive: false },
    { id: 3, name: 'Additional info', isActive: false },
  ];

  rolesList!: Array<IRoles>;

  get nextBtnLabel(): ERegistrationAction {
    return this.currentAction;
  }

  constructor(
    private router: Router,
    private registrationFacade: RegistrationFacade
  ) {
    this.registrationFacade.fetchRoles();
  }

  ngOnInit(): void {
    this.getRolesList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getRolesList(): void {
    this.subscription.add(
      this.registrationFacade.rolesListState.subscribe((rolesList) => {
        this.rolesList = rolesList;
      })
    );
  }

  selectUserType(id: number): void {
    this.selectedUserTypeId = id;
  }

  next(): void {
    switch (this.currentAction) {
      case ERegistrationAction.REGISTER:
        const registerBody: IRegistrationRequestBody = {
          name: this.registrationForm.value.name,
          userName: this.registrationForm.value.userName,
          email: this.registrationForm.value.email,
          password: this.registrationForm.value.password,
          roleId: this.selectedUserTypeId,
          phone: this.registrationForm.value.phone,
        };
        if (
          registerBody &&
          registerBody.name &&
          registerBody.userName &&
          registerBody.email &&
          registerBody.password &&
          registerBody.roleId &&
          registerBody.phone
        ) {
          this.registrationFacade.registerUser(registerBody);
        }
        break;
      default:
        break;
    }

    if (this.selectedPageId < this.pageList.length) {
      this.selectedPageId = this.selectedPageId + 1;
      this.currentAction = ERegistrationAction.CONTINUE;
    }
    if (this.selectedPageId === this.pageList.length) {
      this.currentAction = ERegistrationAction.REGISTER;
    }
  }

  back(): void {
    if (this.selectedPageId > 1) {
      this.selectedPageId = this.selectedPageId - 1;
      this.currentAction = ERegistrationAction.CONTINUE;
    }
  }

  navigateToPage(routePath: string): void {
    this.router.navigate([routePath]);
  }
}
