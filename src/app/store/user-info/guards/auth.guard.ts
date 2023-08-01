import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoFacade } from '../user-info.facade';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userInfoFacade: UserInfoFacade, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isRouteActivated = false;
    this.userInfoFacade.authToken.subscribe((authToken: string) => {
      if (authToken) {
        isRouteActivated = true;
      } else {
        isRouteActivated = false;
        this.router.navigate([APP_ROUTES.LOGIN]);
      }
    });
    return isRouteActivated;
  }
}
