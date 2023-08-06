import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as userInfoSelector from './user-info.selectors';
import {
  IAddress,
  IAuthInfo,
  ILoginRequestBody,
  IPayment,
  ITwoFactorAuth,
  IUserBasicInfo,
  IUserInfo,
} from './interfaces/user-info.interface';
import {
  FetchUserInfo,
  FetchedUserInfo,
  LoggedInUser,
  LoggedOut,
  LoginUser,
  Logout,
} from './user-info.actions';

@Injectable({ providedIn: 'root' })
export class UserInfoFacade {
  userInfo: Observable<IUserInfo> = this.store.select(
    userInfoSelector.fetchUserInfo
  );

  authToken: Observable<string> = this.store.select(
    userInfoSelector.fetchAuthToken
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

  login(credentials: ILoginRequestBody) {
    this.store.dispatch(new LoginUser(credentials));
  }

  loggedIn(authToken: IAuthInfo): Action {
    return new LoggedInUser(authToken);
  }

  logout(userId: number): void {
    this.store.dispatch(new Logout(userId));
  }

  loggedOut(): Action {
    return new LoggedOut();
  }

  fetchUserInfo() {
    this.store.dispatch(new FetchUserInfo());
  }

  fetchedUserInfo(userInfoList: IUserInfo) {
    this.store.dispatch(new FetchedUserInfo(userInfoList));
  }
}
