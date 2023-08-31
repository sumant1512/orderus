import { ActionReducerMap } from '@ngrx/store';
import { RestaurantAppState } from './restaurant-app.state';
import { CustomerReducer } from '../customers+/customers-store/customer.reducers';
import { RestaurantReceivedOrdersReducer } from '../orders+/restaurant-received-orders-store/restaurant-received-orders.reducers';
import { RestaurantMenuReducer } from '../menu+/restaurant-menu-store/restaurant-menu.reducers';
import { RestaurantPromotionsReducer } from '../promotions+/restaurant-promotions-store/restaurant-promotions.reducers';

export const restaurantAppReducers: ActionReducerMap<RestaurantAppState, any> =
  {
    restaurantReceivedOrders: RestaurantReceivedOrdersReducer,
    customerList: CustomerReducer,
    restaurantMenu: RestaurantMenuReducer,
    restaurantPromotions: RestaurantPromotionsReducer,
  };
