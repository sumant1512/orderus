import { ItemFilterActions } from './item-filter/item-filter.actions';
import { OffersActions } from './offers/offers.actions';
import { RestaurantDetailsActions } from './restaurant-details/restaurant-details.actions';
import { RestaurantActions } from './restaurant/restaurant.actions';

export type AppActionsUnion =
  | RestaurantActions
  | RestaurantDetailsActions
  | ItemFilterActions
  | OffersActions;
