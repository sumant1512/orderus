import { CustomerActions } from '../customers+/customers-store/customer.actions';
import { RestaurantMenuActions } from '../menu+/restaurant-menu-store/restaurant-menu.actions';
import { RestaurantReceivedOrdersActions } from '../orders+/restaurant-received-orders-store/restaurant-received-orders.actions';
import { RestaurantPromotionsActions } from '../promotions+/restaurant-promotions-store/restaurant-promotions.actions';

export type RestaurantAppActionsUnion =
  | RestaurantReceivedOrdersActions
  | CustomerActions
  | RestaurantMenuActions
  | RestaurantPromotionsActions;
