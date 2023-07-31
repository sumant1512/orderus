import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRoles,
  RegistrationActions,
  RegistrationActionsUnion,
} from './registration.actions';
import { IRoles } from './interfaces/registration.interface';
import { RegistrationService } from './api/registration.service';

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

  constructor(
    private action$: Actions<RegistrationActionsUnion>,
    private registrationService: RegistrationService
  ) {}
}
