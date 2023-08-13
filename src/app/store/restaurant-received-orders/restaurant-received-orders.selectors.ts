import { AppState } from '../app.state';

export const fetchRestaurantReceivedOrdersList = (state: AppState) =>
  state.restaurantReceivedOrders?.restaurantReceivedOrdersList || [];
