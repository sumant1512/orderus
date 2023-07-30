import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { RegistrationForm } from './registration.form';
import { ISettings } from '../shared/interfaces/settings.interface';
import { IRegistrationPage } from './registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
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

  userTypeList: Array<ISettings> = [
    {
      id: 1,
      name: 'Restaurant',
      path: 'restaurant',
      description: 'Manage your own restaurant',
      imgUrl: './../../assets/icons/user.svg',
      imgAlt: 'user',
    },
    {
      id: 2,
      name: 'Personal',
      path: 'personal',
      description: 'Keep your order in one place',
      imgUrl: './../../assets/icons/user.svg',
      imgAlt: 'address',
    },
  ];

  constructor(private router: Router) {}

  getPathById(id: number): string {
    const foundItem = this.userTypeList.find((item) => item.id === id);
    return foundItem ? foundItem.path : '';
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
