import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';
import { IAuthInfo } from '../interfaces/user-info.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isRouteActivated = false;
    console.log(route, state.url);
    const authInfo: IAuthInfo = JSON.parse(
      localStorage.getItem('authInfo') as string
    );
    switch (authInfo.roleId) {
      case 2:
        isRouteActivated = state.url.includes(APP_ROUTES.RESTAURANT);
        break;
      case 4:
        isRouteActivated = state.url.includes(APP_ROUTES.DELIVERY);
        break;

      default:
        isRouteActivated = false;
        break;
    }
    if (!isRouteActivated) {
      this.router.navigate([APP_ROUTES.LOGIN]);
    }
    return isRouteActivated;
  }
}
