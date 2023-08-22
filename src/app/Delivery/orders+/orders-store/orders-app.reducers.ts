import { ActionReducerMap } from '@ngrx/store';
import { OrdersAppState } from './orders-app.state';
import { RestaurantReceivedOrdersReducer } from './restaurant-received-orders/restaurant-received-orders.reducers';

export const ordersAppReducers: ActionReducerMap<OrdersAppState, any> = {
  restaurantReceivedOrdersList: RestaurantReceivedOrdersReducer,
};
