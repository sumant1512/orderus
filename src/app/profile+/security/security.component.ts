import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITwoFactorAuth } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent {
  subscription = new Subscription();
  twoFactorAuthInfo!: ITwoFactorAuth;

  constructor(private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserAddressList();
  }

  getUserAddressList(): void {
    this.subscription.add(
      this.userInfoFacade.twoFactorAuthInfo.subscribe((authInfo) => {
        this.twoFactorAuthInfo = authInfo;
      })
    );
  }
}
