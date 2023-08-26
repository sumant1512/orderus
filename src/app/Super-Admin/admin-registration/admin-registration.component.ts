import { Component, OnDestroy, OnInit } from '@angular/core';
import { adminRegistrationForm } from './admin-registration.form';
import { EAdmin } from '../enum/admin-registration.enum';
import { AdminDataService } from '../services/admin-data.service';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';
import { Subscription } from 'rxjs';
import { IAdmin } from '../interfaces/admin.interface';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss'],
})
export class AdminRegistrationComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  adminRegistrationForm = adminRegistrationForm();
  adminKeys = EAdmin;
  selectedAction: IAction = {
    id: EAction.Add,
    name: 'Add',
    heading: 'Create',
    btn: 'Save',
  };
  selectedAdmin!: IAdmin;

  constructor(private adminDataService: AdminDataService) {}

  ngOnInit(): void {
    this.getCurrentAction();
    this.getSelectedAdmin();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCurrentAction(): void {
    this.subscription.add(
      this.adminDataService.action.subscribe((action: IAction) => {
        this.selectedAction = action;
      })
    );
  }

  getSelectedAdmin(): void {
    this.subscription.add(
      this.adminDataService.selectedAdminDetails.subscribe((admin: IAdmin) => {
        this.selectedAdmin = admin;
        if (this.selectedAction.id === EAction.Edit) {
          this.adminRegistrationForm.setValue({
            [EAdmin.NAME]: this.selectedAdmin.name,
            [EAdmin.USER_NAME]: this.selectedAdmin.userName,
            [EAdmin.PASSWORD]: this.selectedAdmin.password,
          });
        }
      })
    );
  }
}
