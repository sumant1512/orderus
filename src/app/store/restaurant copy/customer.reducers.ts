import { ICustomerState } from './interfaces/customer.interface';
import { CustomerActions, CustomerActionsUnion } from './customer.actions';

export const initialCustomerState: ICustomerState = {
  customerList: [],
};

export function CustomerReducer(
  state = initialCustomerState,
  action: CustomerActionsUnion
) {
  switch (action.type) {
    case CustomerActions.FETCHED_CUSTOMERS:
      return {
        ...state,
        customerList: action.payload,
      };
    default:
      return state;
  }
}
