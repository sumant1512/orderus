import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as rolesSelector from './registration.selectors';
import { IRoles } from './interfaces/registration.interface';
import { FetchRoles, FetchedRoles } from './registration.actions';

@Injectable({ providedIn: 'root' })
export class RegistrationFacade {
  rolesListState: Observable<IRoles[]> = this.store.select(
    rolesSelector.fetchRolesList
  );

  constructor(private store: Store<AppState>) {}

  fetchRoles() {
    this.store.dispatch(new FetchRoles());
  }

  fetchedRoles(rolesList: IRoles[]) {
    this.store.dispatch(new FetchedRoles(rolesList));
  }
}
