import { AppState } from '../app.state';

export const fetchRestaurantList = (state: AppState) =>
  state.restaurant?.restaurantList || [];
