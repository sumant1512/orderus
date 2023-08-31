import { ActionReducerMap } from '@ngrx/store';
import { ChefAppState } from './chef-app.state';
import { ChefOrdersReducer } from './chef-orders/chef-orders.reducers';

export const chefAppReducers: ActionReducerMap<ChefAppState, any> = {
  chefOrdersList: ChefOrdersReducer,
};
