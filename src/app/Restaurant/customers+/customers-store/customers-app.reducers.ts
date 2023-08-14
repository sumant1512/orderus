import { ActionReducerMap } from '@ngrx/store';
import { CustomersAppState } from './customers-app.state';
import { CustomerReducer } from './customer/customer.reducers';

export const customersAppReducers: ActionReducerMap<CustomersAppState, any> = {
  customerList: CustomerReducer,
};
