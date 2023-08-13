import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { RestaurantReducer } from './restaurant/restaurant.reducers';
import { RestaurantDetailsReducer } from './restaurant-details/restaurant-details.reducers';
import { ItemFilterReducer } from './item-filter/item-filter.reducers';
import { OffersReducer } from './offers/offers.reducers';
import { UserInfoReducer } from './user-info/user-info.reducers';
import { RegistrationReducer } from './registration/registration.reducers';
import { CustomerReducer } from './customer/customer.reducers';
import { RestaurantReceivedOrdersReducer } from './restaurant-received-orders/restaurant-received-orders.reducers';
import { PromotionReducer } from './promotion/promotion.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  restaurant: RestaurantReducer,
  restaurantDetails: RestaurantDetailsReducer,
  itemFilters: ItemFilterReducer,
  offers: OffersReducer,
  userInfo: UserInfoReducer,
  registration: RegistrationReducer,
  customer: CustomerReducer,
  restaurantReceivedOrders: RestaurantReceivedOrdersReducer,
  promotion: PromotionReducer,
};
