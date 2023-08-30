import { CustomerActions } from '../customers+/customers-store/customer.actions';
import { RestaurantMenuActions } from '../menu+/restaurant-menu-store/restaurant-menu-items/restaurant-menu.actions';
import { RestaurantReceivedOrdersActions } from '../orders+/restaurant-received-orders/restaurant-received-orders.actions';

export type RestaurantAppActionsUnion =
  | RestaurantReceivedOrdersActions
  | CustomerActions
  | RestaurantMenuActions;
