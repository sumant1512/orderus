import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as rolesSelector from './registration.selectors';
import {
  IRegistrationRequestBody,
  IRoles,
  IVerifyRequestBody,
} from './interfaces/registration.interface';
import {
  FetchRoles,
  FetchedRoles,
  RegisterUser,
  VerifyUser,
} from './registration.actions';

@Injectable({ providedIn: 'root' })
export class RegistrationFacade {
  rolesListState: Observable<IRoles[]> = this.store.select(
    rolesSelector.fetchRolesList
  );

  constructor(private store: Store<AppState>) {}

  fetchRoles(): void {
    this.store.dispatch(new FetchRoles());
  }

  fetchedRoles(rolesList: IRoles[]): void {
    this.store.dispatch(new FetchedRoles(rolesList));
  }

  registerUser(body: IRegistrationRequestBody): void {
    this.store.dispatch(new RegisterUser(body));
  }

  verifyUser(body: IVerifyRequestBody): void {
    this.store.dispatch(new VerifyUser(body));
  }
}
