import { RestaurantDetailsActions } from './restaurant-details/restaurant-details.actions';
import { RestaurantActions } from './restaurant/restaurant.actions';

export type AppActionsUnion = RestaurantActions | RestaurantDetailsActions;
