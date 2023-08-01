import { Action } from '@ngrx/store';
import {
  IRegistrationRequestBody,
  IRoles,
  IVerifyRequestBody,
} from './interfaces/registration.interface';

export enum RegistrationActions {
  FETCH_ROLES = '[Registraion] Fetch Roles',
  FETCHED_ROLES = '[Registraion] Fetched Roles',
  REGISTER_USER = '[Registraion] Register User',
  VERIFY_USER = '[Registraion] Verify User',
}

export class FetchRoles implements Action {
  readonly type = RegistrationActions.FETCH_ROLES;
}

export class FetchedRoles implements Action {
  readonly type = RegistrationActions.FETCHED_ROLES;
  constructor(public payload: IRoles[]) {}
}

export class RegisterUser implements Action {
  readonly type = RegistrationActions.REGISTER_USER;
  constructor(public payload: IRegistrationRequestBody) {}
}

export class VerifyUser implements Action {
  readonly type = RegistrationActions.VERIFY_USER;
  constructor(public payload: IVerifyRequestBody) {}
}

export type RegistrationActionsUnion =
  | FetchRoles
  | FetchedRoles
  | RegisterUser
  | VerifyUser;
