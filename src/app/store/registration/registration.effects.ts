import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import {
  FetchedRoles,
  RegistrationActions,
  RegistrationActionsUnion,
} from './registration.actions';
import { IRoles } from './interfaces/registration.interface';
import { RegistrationService } from './api/registration.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Injectable()
export class RegistrationEffects {
  fetchRoles$ = createEffect(() =>
    this.action$.pipe(
      ofType(RegistrationActions.FETCH_ROLES),
      mergeMap(() =>
        this.registrationService.fetchRoles().pipe(
          map((rolesList: IRoles[]) => {
            return new FetchedRoles(rolesList);
          })
        )
      )
    )
  );

  registerUser$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RegistrationActions.REGISTER_USER),
        tap((action) => {
          this.registrationService
            .registerUser(action.payload)
            .subscribe((resp) => {
              if (resp && resp.status && resp.userName) {
                this.router.navigate([APP_ROUTES.VERIFY], {
                  queryParams: { userName: resp.userName },
                });
              }
            });
        })
      ),
    { dispatch: false }
  );

  verifyUser$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RegistrationActions.VERIFY_USER),
        tap((action) => {
          this.registrationService
            .verifyUser(action.payload)
            .subscribe((resp) => {
              if (resp && resp.status) {
                this.router.navigate([APP_ROUTES.LOGIN]);
              }
            });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions<RegistrationActionsUnion>,
    private registrationService: RegistrationService,
    private router: Router
  ) {}
}
