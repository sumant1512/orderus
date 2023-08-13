import { ItemFilterActions } from './item-filter/item-filter.actions';
import { OffersActions } from './offers/offers.actions';
import { RegistrationActions } from './registration/registration.actions';
import { CustomerActions } from './customer/customer.actions';
import { RestaurantDetailsActions } from './restaurant-details/restaurant-details.actions';
import { RestaurantActions } from './restaurant/restaurant.actions';
import { UserInfoActions } from './user-info/user-info.actions';
import { RestaurantReceivedOrdersActions } from './restaurant-received-orders/restaurant-received-orders.actions';

export type AppActionsUnion =
  | RestaurantActions
  | RestaurantDetailsActions
  | ItemFilterActions
  | OffersActions
  | UserInfoActions
  | RegistrationActions
  | CustomerActions
  | RestaurantReceivedOrdersActions;
