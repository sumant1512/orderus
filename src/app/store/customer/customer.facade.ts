import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as customerSelector from './customer.selectors';
import { ICustomer } from './interfaces/customer.interface';
import { FetchCustomers, FetchedCustomers } from './customer.actions';

@Injectable({ providedIn: 'root' })
export class CustomerFacade {
  customerListState: Observable<ICustomer[]> = this.store.select(
    customerSelector.fetchCustomerList
  );

  constructor(private store: Store<AppState>) {}

  fetchCustomer() {
    this.store.dispatch(new FetchCustomers());
  }

  fetchedCustomers(customerList: ICustomer[]) {
    this.store.dispatch(new FetchedCustomers(customerList));
  }
}
