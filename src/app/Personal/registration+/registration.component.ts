import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes.constants';
import { RegistrationForm } from './registration.form';
import { IRegistrationPage } from './registration.interface';
import { RegistrationFacade } from 'src/app/store/registration/registration.facade';
import { Subscription } from 'rxjs';
import { IRoles } from 'src/app/store/registration/interfaces/registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  subscription = new Subscription();
  registrationForm = RegistrationForm();
  appRoutes = APP_ROUTES;
  selectedPageId = 1;
  selectedUserTypeId = 1;

  pageList: Array<IRegistrationPage> = [
    { id: 1, name: 'Account type', isActive: true },
    { id: 2, name: 'Personal Details', isActive: false },
    { id: 3, name: 'Additional info', isActive: false },
    { id: 4, name: 'Confirmation', isActive: false },
  ];

  rolesList!: Array<IRoles>;

  constructor(
    private router: Router,
    private registrationFacade: RegistrationFacade
  ) {
    this.registrationFacade.fetchRoles();
  }

  ngOnInit(): void {
    this.getRolesList();
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
    if (this.selectedPageId < this.pageList.length) {
      this.selectedPageId = this.selectedPageId + 1;
    }
  }

  back(): void {
    if (this.selectedPageId > 1) {
      this.selectedPageId = this.selectedPageId - 1;
    }
  }

  navigateToPage(routePath: string): void {
    this.router.navigate([routePath]);
  }
}
