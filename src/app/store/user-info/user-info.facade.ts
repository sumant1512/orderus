import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as userInfoSelector from './user-info.selectors';
import {
  IAddress,
  IPayment,
  ITwoFactorAuth,
  IUserBasicInfo,
  IUserInfo,
} from './interfaces/user-info.interface';
import { FetchUserInfo, FetchedUserInfo } from './user-info.actions';

@Injectable({ providedIn: 'root' })
export class UserInfoFacade {
  userInfo: Observable<IUserInfo> = this.store.select(
    userInfoSelector.fetchUserInfo
  );

  userBasicInfo: Observable<IUserBasicInfo> = this.store.select(
    userInfoSelector.fetchUserBasicInfo
  );

  userAddressListInfo: Observable<Array<IAddress>> = this.store.select(
    userInfoSelector.fetchUserAddressList
  );

  userPaymentListInfo: Observable<Array<IPayment>> = this.store.select(
    userInfoSelector.fetchUserPaymentList
  );

  twoFactorAuthInfo: Observable<ITwoFactorAuth> = this.store.select(
    userInfoSelector.fetchTwoFactorAuthInfo
  );

  constructor(private store: Store<AppState>) {}

  fetchUserInfo() {
    this.store.dispatch(new FetchUserInfo());
  }

  fetchedUserInfo(userInfoList: IUserInfo) {
    this.store.dispatch(new FetchedUserInfo(userInfoList));
  }
}
