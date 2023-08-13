import { Action } from '@ngrx/store';
import { ICustomer } from './interfaces/customer.interface';

export enum CustomerActions {
  FETCH_CUSTOMERS = '[Customer] Fetch Customers',
  FETCHED_CUSTOMERS = '[Customer] Fetched Customers',
}

export class FetchCustomers implements Action {
  readonly type = CustomerActions.FETCH_CUSTOMERS;
}

export class FetchedCustomers implements Action {
  readonly type = CustomerActions.FETCHED_CUSTOMERS;
  constructor(public payload: ICustomer[]) {}
}

export type CustomerActionsUnion = FetchCustomers | FetchedCustomers;
