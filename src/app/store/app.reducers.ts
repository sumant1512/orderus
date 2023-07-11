import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { RestaurantReducer } from './restaurant/restaurant.reducers';
import { RestaurantDetailsReducer } from './restaurant-details/restaurant-details.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  restaurant: RestaurantReducer,
  restaurantDetails: RestaurantDetailsReducer,
};
