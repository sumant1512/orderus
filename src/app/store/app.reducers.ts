import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { RestaurantReducer } from './restaurant/restaurant.reducers';
import { RestaurantDetailsReducer } from './restaurant-details/restaurant-details.reducers';
import { ItemFilterReducer } from './item-filter/item-filter.reducers';
import { OffersReducer } from './offers/offers.reducers';
import { UserInfoReducer } from './user-info/user-info.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  restaurant: RestaurantReducer,
  restaurantDetails: RestaurantDetailsReducer,
  itemFilters: ItemFilterReducer,
  offers: OffersReducer,
  userInfo: UserInfoReducer,
};
