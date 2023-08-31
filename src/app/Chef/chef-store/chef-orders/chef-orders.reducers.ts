import { IChefOrders } from './interfaces/chef-orders.interface';
import {
  ChefOrdersActions,
  ChefOrdersActionsUnion,
} from './chef-orders.actions';

export const initialChefOrders: Array<IChefOrders> = [];

export function ChefOrdersReducer(
  state = initialChefOrders,
  action: ChefOrdersActionsUnion
) {
  switch (action.type) {
    case ChefOrdersActions.FETCHED_CHEF_ORDERS:
      return action.payload;
    default:
      return state;
  }
}
