import { Action } from '@ngrx/store';
import { ILoginRequestBody, IUserInfo } from './interfaces/user-info.interface';

export enum UserInfoActions {
  FETCH_USER_INFO = '[UserInfo] Fetch UserInfo',
  FETCHED_USER_INFO = '[UserInfo] Fetched UserInfo',
  LOGIN = '[User] Login',
  LOGGED_IN = '[User] Logged In User',
  LOGOUT = '[User] Logout User',
  LOGGED_OUT = '[User] Logged Out User',
}

export class FetchUserInfo implements Action {
  readonly type = UserInfoActions.FETCH_USER_INFO;
}

export class FetchedUserInfo implements Action {
  readonly type = UserInfoActions.FETCHED_USER_INFO;
  constructor(public payload: IUserInfo) {}
}

export class LoginUser implements Action {
  readonly type = UserInfoActions.LOGIN;
  constructor(public payload: ILoginRequestBody) {}
}

export class LoggedInUser implements Action {
  readonly type = UserInfoActions.LOGGED_IN;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = UserInfoActions.LOGOUT;
  constructor(public payload: number) {}
}

export class LoggedOut implements Action {
  readonly type = UserInfoActions.LOGGED_OUT;
}

export type UserInfoActionsUnion =
  | FetchUserInfo
  | FetchedUserInfo
  | LoginUser
  | LoggedInUser
  | Logout
  | LoggedOut;
