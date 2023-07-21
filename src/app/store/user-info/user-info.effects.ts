import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedUserInfo,
  UserInfoActions,
  UserInfoActionsUnion,
} from './user-info.actions';
import { IUserInfo } from './interfaces/user-info.interface';
import { UserInfoService } from './api/user-info.service';

@Injectable()
export class UserInfoEffects {
  fetchUserInfo$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserInfoActions.FETCH_USER_INFO),
      mergeMap(() =>
        this.userInfoService.fetchUserInfo().pipe(
          map((userInfo: IUserInfo) => {
            return new FetchedUserInfo(userInfo);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<UserInfoActionsUnion>,
    private userInfoService: UserInfoService
  ) {}
}
