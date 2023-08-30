import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as customerSelector from './customer.selectors';
import { ICustomer } from './interfaces/customer.interface';
import { FetchCustomers, FetchedCustomers } from './customer.actions';
import { RestaurantAppState } from '../../resturant-store/restaurant-app.state';

@Injectable({ providedIn: 'root' })
export class CustomerFacade {
  customerListState: Observable<ICustomer[]> = this.store.select(
    customerSelector.fetchCustomerList
  );

  constructor(private store: Store<RestaurantAppState>) {}

  fetchCustomer() {
    this.store.dispatch(new FetchCustomers());
  }

  fetchedCustomers(customerList: ICustomer[]) {
    this.store.dispatch(new FetchedCustomers(customerList));
  }
}
