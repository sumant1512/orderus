import { ICustomer } from './interfaces/customer.interface';
import { CustomerActions, CustomerActionsUnion } from './customer.actions';

export const initialCustomerState: Array<ICustomer> = [];

export function CustomerReducer(
  state = initialCustomerState,
  action: CustomerActionsUnion
) {
  switch (action.type) {
    case CustomerActions.FETCHED_CUSTOMERS:
      return action.payload;
    default:
      return state;
  }
}
