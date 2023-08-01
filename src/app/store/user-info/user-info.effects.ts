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
import { UserInfoFacade } from './user-info.facade';

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

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserInfoActions.LOGIN),
      mergeMap((action) =>
        this.userInfoService.login(action.payload).pipe(
          map((userInfo) => {
            return this.userInfoFacade.loggedIn(userInfo);
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserInfoActions.LOGOUT),
      mergeMap((action) => {
        return this.userInfoService.logout(action.payload).pipe(
          map(() => {
            return this.userInfoFacade.loggedOut();
          })
        );
      })
    )
  );

  constructor(
    private action$: Actions<UserInfoActionsUnion>,
    private userInfoService: UserInfoService,
    private userInfoFacade: UserInfoFacade
  ) {}
}
