import { Action } from '@ngrx/store';
import { IRoles } from './interfaces/registration.interface';

export enum RegistrationActions {
  FETCH_ROLES = '[Registraion] Fetch Roles',
  FETCHED_ROLES = '[Registraion] Fetched Roles',
}

export class FetchRoles implements Action {
  readonly type = RegistrationActions.FETCH_ROLES;
}

export class FetchedRoles implements Action {
  readonly type = RegistrationActions.FETCHED_ROLES;
  constructor(public payload: IRoles[]) {}
}

export type RegistrationActionsUnion = FetchRoles | FetchedRoles;
