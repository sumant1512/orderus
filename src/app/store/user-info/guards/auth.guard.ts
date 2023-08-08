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
    const authInfo: IAuthInfo = JSON.parse(
      localStorage.getItem('authInfo') as string
    );
    switch (authInfo?.roleId) {
      case 0:
        isRouteActivated = state.url.includes(APP_ROUTES.SUPER_ADMIN.PARENT);
        break;
      case 1:
        isRouteActivated = state.url.includes(APP_ROUTES.ADMIN.PARENT);
        break;
      case 2:
        isRouteActivated = state.url.includes(APP_ROUTES.RESTAURANT.PARENT);
        break;
      case 3:
        isRouteActivated = true;
        break;
      case 4:
        isRouteActivated = state.url.includes(APP_ROUTES.DELIVERY.PARENT);
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
