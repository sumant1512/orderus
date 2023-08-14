import { ActionReducerMap } from '@ngrx/store';
import { RestaurantPromotionsAppState } from './restaurant-promotions-app.state';
import { RestaurantPromotionsReducer } from './restaurant-promotions/restaurant-promotions.reducers';

export const restaurantPromotionsAppReducers: ActionReducerMap<
  RestaurantPromotionsAppState,
  any
> = {
  restaurantPromotionsList: RestaurantPromotionsReducer,
};
