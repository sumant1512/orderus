import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUserBasicInfo } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  subscription = new Subscription();
  userInfo!: IUserBasicInfo;

  constructor(private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserBasicInfo();
  }

  getUserBasicInfo(): void {
    this.subscription.add(
      this.userInfoFacade.userBasicInfo.subscribe((userInfo) => {
        this.userInfo = userInfo;
      })
    );
  }
}
