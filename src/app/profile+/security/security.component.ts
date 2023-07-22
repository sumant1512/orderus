import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITwoFactorAuth } from 'src/app/store/user-info/interfaces/user-info.interface';
import { UserInfoFacade } from 'src/app/store/user-info/user-info.facade';
import { twoFactorAuthForm, passwordForm } from './security.form';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent {
  twoFactorAuthForm = twoFactorAuthForm();
  passwordForm = passwordForm();
  subscription = new Subscription();
  twoFactorAuthInfo!: ITwoFactorAuth;

  twoFactorBtnLabel = 'Turn on';

  constructor(private userInfoFacade: UserInfoFacade) {}

  ngOnInit(): void {
    this.getUserAddressList();
  }

  getUserAddressList(): void {
    this.subscription.add(
      this.userInfoFacade.twoFactorAuthInfo.subscribe((authInfo) => {
        this.twoFactorAuthInfo = authInfo;
        this.twoFactorBtnLabel = this.twoFactorAuthInfo.isActive
          ? 'Turn off'
          : 'Turn on';
        this.setTwoFactorAuthForm(this.twoFactorAuthInfo);
      })
    );
  }

  setTwoFactorAuthForm(twoFactorInfo: ITwoFactorAuth): void {
    this.twoFactorAuthForm.setValue({
      phone: twoFactorInfo.phone || '',
    });
  }
}
