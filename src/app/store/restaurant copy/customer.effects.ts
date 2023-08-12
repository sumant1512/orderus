import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedCustomers,
  CustomerActions,
  CustomerActionsUnion,
} from './customer.actions';
import { ICustomer } from './interfaces/customer.interface';
import { CustomerService } from './api/customer.service';

@Injectable()
export class CustomerEffects {
  fetchCustomer$ = createEffect(() =>
    this.action$.pipe(
      ofType(CustomerActions.FETCH_CUSTOMERS),
      mergeMap(() =>
        this.customerService.fetchCustomers().pipe(
          map((customerList: ICustomer[]) => {
            return new FetchedCustomers(customerList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<CustomerActionsUnion>,
    private customerService: CustomerService
  ) {}
}
