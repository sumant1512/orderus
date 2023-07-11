import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { RestaurantReducer } from './restaurants/restaurant.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  restaurant: RestaurantReducer,
};
