import { AppState } from '../app.state';

export const fetchCustomerList = (state: AppState) =>
  state.customer?.customerList || [];
