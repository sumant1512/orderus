import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedUserInfo,
  UserInfoActions,
  UserInfoActionsUnion,
} from './user-info.actions';
import { IAuthInfo, IUserInfo } from './interfaces/user-info.interface';
import { UserInfoService } from './api/user-info.service';
import { UserInfoFacade } from './user-info.facade';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Injectable()
export class UserInfoEffects {
  fetchUserInfo$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserInfoActions.FETCH_USER_INFO),
      mergeMap((action) =>
        this.userInfoService.fetchUserInfo(action.payload).pipe(
          map((userInfo: IUserInfo) => {
            console.log(userInfo);
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
          map((userInfo: IAuthInfo) => {
            localStorage.setItem('authInfo', JSON.stringify(userInfo));
            this.navigateToProfile(userInfo.roleId);
            this.userInfoFacade.fetchUserInfo({
              userName: userInfo.userName,
              authToken: userInfo.authToken,
            });
            return this.userInfoFacade.loggedIn(userInfo as IAuthInfo);
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

  navigateToProfile(roleId: number): void {
    let routePath: string = '';
    switch (roleId) {
      case 1:
        routePath = APP_ROUTES.ADMIN.PARENT;
        break;
      case 2:
        routePath = APP_ROUTES.RESTAURANT.PARENT;
        break;
      case 3:
        // routePath = APP_ROUTES.ADMIN.PARENT
        break;
      case 4:
        routePath = APP_ROUTES.DELIVERY.PARENT;
        break;
      default:
        break;
    }
    this.router.navigate([routePath]);
  }

  constructor(
    private action$: Actions<UserInfoActionsUnion>,
    private userInfoService: UserInfoService,
    private userInfoFacade: UserInfoFacade,
    private router: Router
  ) {}
}
