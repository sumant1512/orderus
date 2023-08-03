import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  INotifcation,
  IUserBasicInfo,
} from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';
import { accountInfoForm } from './account-info.form';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  subscription = new Subscription();
  userInfo!: IUserBasicInfo;
  emailNotificationList!: Array<INotifcation>;
  accountInfoForm = accountInfoForm();

  constructor(private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserBasicInfo();
  }

  getUserBasicInfo(): void {
    this.subscription.add(
      this.userInfoFacade.userBasicInfo.subscribe((userInfo) => {
        this.userInfo = userInfo;
        this.emailNotificationList = this.userInfo.emailNotification || [];
        this.accountInfoForm.setValue({
          firstName: this.userInfo.firstName || '',
          lastName: this.userInfo.lastName || '',
          email: this.userInfo.email || '',
          phone: this.userInfo.phone || '',
          altPhone: this.userInfo.altPhone || '',
        });
      })
    );
  }
}
