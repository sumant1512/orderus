import { Action } from '@ngrx/store';
import { IUserInfo } from './interfaces/user-info.interface';

export enum UserInfoActions {
  FETCH_USER_INFO = '[UserInfo] Fetch UserInfo',
  FETCHED_USER_INFO = '[UserInfo] Fetched UserInfo',
}

export class FetchUserInfo implements Action {
  readonly type = UserInfoActions.FETCH_USER_INFO;
}

export class FetchedUserInfo implements Action {
  readonly type = UserInfoActions.FETCHED_USER_INFO;
  constructor(public payload: IUserInfo) {}
}

export type UserInfoActionsUnion = FetchUserInfo | FetchedUserInfo;
