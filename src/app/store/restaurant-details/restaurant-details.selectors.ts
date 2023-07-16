import { AppState } from '../app.state';
import { IRestaurantDetailsState } from './interfaces/restaurant-details.interface';

export const fetchRestaurantDetails = (state: AppState) =>
  state.restaurantDetails || ({} as IRestaurantDetailsState);
